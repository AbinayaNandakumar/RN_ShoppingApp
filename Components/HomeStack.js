import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ShopScreen from '../Screens/ShopScreen';
import SearchCategories from '../Screens/SearchCategories';
import CategoryButtons from './CategoryButton';
import ProductList from '../Screens/ProductList';
import ProductDetailScreen from '../Screens/ProductDetailScreen';

const Stack = createStackNavigator();

function HomeStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Shopp" component={ShopScreen} options={{headerTitle:'Shop'}}/>
      <Stack.Screen name="SearchCategories" component={SearchCategories} options={{headerTitle:'Categories'}}/>
      <Stack.Screen name="CategoryButtons" component={CategoryButtons}/>
      <Stack.Screen name="Products" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />

     
      
    </Stack.Navigator>
  );
};

export default HomeStack;
