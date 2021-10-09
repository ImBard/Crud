import * as React from 'react';
import styles from './style/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Crud from './src/Crud';
import lista from './src/lista';
import Post from './src/POST';

const Stack = createStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Crud" component={Crud} />
      <Stack.Screen name="lista" component={lista} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
