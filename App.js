import { CartUserProvider } from './Store/CartUserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './Components/TabNavigator';
import BagCart from './Screens/BagCart';
import CheckoutScreen from './Screens/CheckoutScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import DeliveryOptionScreen from './Screens/DeliveryOptionScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import AddCardDetailsScreen from './Screens/AddCardDetailsScreen';
import OrderCompleteScreen from './Screens/OrderCompleteScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <CartUserProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#ccb5a8' }}}>
      <Stack.Screen
          name=' '
          component={TabNavigator}
          options={({ navigation }) => ({
            headerShown:false})} />
            
      <Stack.Screen name="YOUR BAG" component={BagCart}/>
      <Stack.Screen name="CHECKOUT" component={CheckoutScreen} />
      <Stack.Screen name="SHIPPING ADDRESS" component={ShippingAddressScreen} />
      <Stack.Screen name="DELIVERY OPTIONS" component={DeliveryOptionScreen} />
      <Stack.Screen name="PAYMENT METHOD" component={PaymentMethodScreen} />
      <Stack.Screen name="ADD A CARD" component={AddCardDetailsScreen} />
      <Stack.Screen name="ORDER COMPLETE" component={OrderCompleteScreen}  options={{ headerBackVisible: false }} />

      </Stack.Navigator>
    </NavigationContainer>
    </CartUserProvider>
  );
}

