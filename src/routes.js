import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import logo from './assets/logo.png';
import camera from './assets/camera.png';
import send from './assets/send.png';

import Feed from './pages/Feed';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator>
        <AppStack.Screen name="Feed"
          component={Feed}
          options={{
            headerStyle: { backgroundColor: '#1c1d1d' },
            headerTitle: <Image style={{ tintColor: '#f8f9f9' }} source={logo} />,
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 20 }}>
                <Image  style={{ tintColor:'#f8f9f9' }} source={camera}/>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image style={{ tintColor:'#f8f9f9' }} source={send} />
              </TouchableOpacity>
            ) }}/>

      </AppStack.Navigator>

    </NavigationContainer>
  );
};