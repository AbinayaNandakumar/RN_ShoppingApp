import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ShopScreen from '../Screens/ShopScreen';
import ProductList from '../Screens/ProductList';
import SearchCategories from '../Screens/SearchCategories';
import CategoryButtons from './CategoryButton';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import HeaderRightButton from './HeaderRightButton';

const Stack = createStackNavigator();

function ShopStack () {
  return (
    <Stack.Navigator  screenOptions={{
      headerStyle: { backgroundColor: '#ccb5a8' }}}>
      <Stack.Screen name="Shopy" component={ShopScreen} options={{headerTitle:'Shop', headerRight: () => <HeaderRightButton/>}}/>
      <Stack.Screen name="Products" component={ProductList} options={{ headerRight: () => <HeaderRightButton/>}} />
      <Stack.Screen name="SearchCategories" component={SearchCategories} options={{headerTitle:'Categories', headerRight: () => <HeaderRightButton/>}}/>
      <Stack.Screen name="CategoryButtons" component={CategoryButtons} options={{ headerRight: () => <HeaderRightButton/>}}/>
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerRight: () => <HeaderRightButton/>}} />
    </Stack.Navigator>
  );
};

export default ShopStack;

