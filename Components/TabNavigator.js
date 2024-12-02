import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen';
import RewardsScreen from '../Screens/RewardsScreen';
import OthersScreen from '../Screens/OthersScreen';
import ShopStack from './ShopStack';
import MenuStack from './MenuStack';
import HeaderRightButton from './HeaderRightButton';

const Tab = createBottomTabNavigator();


function TabNavigator()
{
    return(
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#512104',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerRight: () => <HeaderRightButton/>,
            headerTitle:'H&M',
            headerStyle: {
            backgroundColor: '#ccb5a8',
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),  tabBarStyle: {
              backgroundColor: '#ccb5a8'
            },
          }}
        />
        <Tab.Screen
          name="Others"
          component={OthersScreen}
          options={{
            headerShown: true,
            headerRight: () => <HeaderRightButton/>,
            headerStyle: {
            backgroundColor: '#ccb5a8',
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="umbrella-outline" color={color} size={size} />
            ),tabBarStyle: {
              backgroundColor: '#ccb5a8'
            },
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" color={color} size={size} />
            ),tabBarStyle: {
              backgroundColor: '#ccb5a8',
            },
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={RewardsScreen}
          options={{
            headerShown: true,
            headerRight: () => <HeaderRightButton/>,
            headerStyle: {
              backgroundColor: '#ccb5a8',
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="gift-outline" color={color} size={size} />
            ),tabBarStyle: {
              backgroundColor: '#ccb5a8',
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="menu-outline" color={color} size={size} />
            ),tabBarStyle: {
              backgroundColor: '#ccb5a8',
            },
          }}
        />
      </Tab.Navigator>
    );

}
export default TabNavigator;