import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import options from '../assets/options.png';
import like from '../assets/like.png';
import comment from '../assets/comment.png';
import send from '../assets/send.png';
import save from '../assets/save.png';

export default function Feed() {

  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadPage(pageNumber = page) {
    if (total && pageNumber > total) return;

    setLoading(true);

    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`
    );

    const data = await response.json();
    const totalItems = response.headers.get('X-Total-Count');

    setTotal(Math.floor(totalItems / 5));
    setFeed([...feed, ...data]);
    setPage(pageNumber + 1);
    setLoading(false);

  };

  useEffect(() => {
    loadPage();
  }, []);

  function refreshList() {
    
  };

  return (
    <View style={styles.content}>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        onEndReached={() => loadPage()}//função executada quando chegar no final da lista
        onEndReachedThreshold={0.1}//a 0.1 do final começa a carregar a lista
        onRefresh={refreshList()}
        ListFooterComponent={loading && <ActivityIndicator style={ styles.loading } />}//ultimo componente renderizado
        renderItem={({ item }) => (
          <View style={styles.post} >
            <View style={styles.header} >
              <Image style={styles.avatar} source={{ uri: item.author.avatar }} />
              <Text style={styles.name}>{item.author.name}</Text>

              <TouchableOpacity style={{ position: "absolute", marginLeft: 380 }} >
                <Image style={{ tintColor: '#fff' }} source={options} />
              </TouchableOpacity>
            </View>

            <Image style={styles.postImage} ratio={item.aspectRatio} source={{ uri: item.image }} />

            <View style={styles.footer} >
              <View style={styles.actions} >
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={styles.action}>
                    <Image style={styles.colorActions} source={like} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.action} >
                    <Image style={styles.colorActions} source={comment} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image style={styles.colorActions} source={send} />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity>
                    <Image style={styles.colorActions} source={save} />
                  </TouchableOpacity>
                </View>

              </View>
            </View>

            <View style={styles.description}>
              <Text style={styles.textDescription}>{item.description}</Text>
            </View>

          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#07090a'
  },

  post: {
    marginTop: 15,
  },

  header: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center"
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10
  },

  name: {
    fontSize: 20,
    color: '#f7f8f9',
    fontWeight: "bold",
  },

  postImage: {
    width: `100%`,
    height: 400
  },

  footer: {
    paddingVertical: 15,
    paddingHorizontal: 10
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  colorActions: {
    tintColor: '#f7f8f9'
  },

  action: {
    marginRight: 18,
  },

  description: {
    padding: 10,
    lineHeight: 18
  },

  textDescription: {
    fontSize: 17,
    color: '#f7f8f9',
  },

  loading: {
    margin: 30,
  }
});
