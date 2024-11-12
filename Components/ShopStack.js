import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ShopScreen from '../Screens/ShopScreen';
import ProductList from '../Screens/ProductList';
import SearchCategories from '../Screens/SearchCategories';
import CategoryButtons from './CategoryButton';
import ProductDetailScreen from '../Screens/ProductDetailScreen';

const Stack = createStackNavigator();

function ShopStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shopy" component={ShopScreen} options={{headerTitle:'Shop'}}/>
      <Stack.Screen name="Products" component={ProductList} />
      <Stack.Screen name="SearchCategories" component={SearchCategories} options={ { headerTitle: 'Categories'}}/>
      <Stack.Screen name="CategoryButtons" component={CategoryButtons}/>
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />


      
    </Stack.Navigator>
  );
};

export default ShopStack;

