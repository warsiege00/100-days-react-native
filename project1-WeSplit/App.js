import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Divide aí!',
            headerStyle: { 
              backgroundColor: 'papayawhip',               
            },
            headerTintColor: '#f4511e',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
              fontSize: 26
            }           
          }}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


