import * as React from 'react';
import styles from './style/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Post from './src/Cadastrar';
import lista from './src/ListaUsuarios';
import Login from './src/Login';

const Stack = createStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator
    initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff',height: 60},
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name='lista' component={lista}/>
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
