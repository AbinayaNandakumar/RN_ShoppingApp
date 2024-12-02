import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from '../Screens/MenuScreen';
import AboutScreen from '../Screens/AboutScreen';
import HeaderRightButton from './HeaderRightButton';

const Stack = createStackNavigator();

function MenuStack () {
  return (
    <Stack.Navigator  screenOptions={{
      headerStyle: { backgroundColor: '#ccb5a8' }}}>
      <Stack.Screen name="Menus" component={MenuScreen} options={{headerTitle:'Menu',headerRight: () => <HeaderRightButton/>}}/>
      <Stack.Screen name="AboutScreen" component={AboutScreen} options={{headerTitle:'About'}}/>

      
    </Stack.Navigator>
  );
};

export default MenuStack;


