import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Feed() {

  const [ feed, setFeed ] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      const response = await fetch(
        'http://localhost:3000/feed?_expand=author&_limit=5&_page=1'
      );

      const data = await response.json();

      setFeed(data);
    }

    loadFeed();
  }, []);

  return (
    <View style={styles.content}>
      <FlatList 
        data={feed}
        keyExtractor={post => String(post.id)}
        renderItem={({ item }) => (
          <View style={styles.post} >
            <View style={styles.header} >
              <Image style={styles.avatar} source={{ uri: item.author.avatar }} />
              <Text style={styles.name}>{ item.author.name }</Text>
            </View>

            <Image style={styles.postImage} ratio={item.aspectRatio} source={{ uri: item.image }} />

            <View style={styles.description}> 
              <Text style={styles.name}>{ item.description }</Text>
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

  },

  header: {

  },

  avatar: {

  },

  name: {
    fontSize: 20,
    color: '#fff'
  },

  postImage: {
    width: `100%`,
    aspectRatio: `${ props => props.ratio }`
    
  },
  
  description: {
    
  }
});
