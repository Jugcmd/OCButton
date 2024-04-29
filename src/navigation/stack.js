import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Tabs from './tabs';
import ArticleView from '../screens/articleView';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Tabs} options={{headerShown: false}} />
      <Stack.Screen name="ArticleView" component={ArticleView} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Routes;