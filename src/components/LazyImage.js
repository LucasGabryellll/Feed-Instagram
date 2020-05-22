import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Image, Animated } from 'react-native';

const OriginalAnimeted = Animated.createAnimatedComponent(Image);

export default function LazyImage({
  smallSource,
  source,
  shouldLoad,
}) {

  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      //setTimeout(() => {
        setLoaded(true);
      //}, 1000);
    }
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <ImageBackground style={styles.small}
        source={smallSource}
        resizeMode="contain"
        blurRadius={1}
      >
        {
          loaded &&
          <OriginalAnimeted
            style={styles.original}
            source={source}
            resizeMode="contain"
            onLoadEnd={handleAnimate}
          />
        }
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  small: {
    width: `100%`,
    height: 500,
  },

  original: {
    width: `100%`,
    height: 500,
  }
});
