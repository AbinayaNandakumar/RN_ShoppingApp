import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './Components/TabNavigator';
import BagCart from './Screens/BagCart';
import HeaderRightButton from './Components/HeaderRightButton';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                     headerStyle: { backgroundColor: '#ccb5a8' }}}>
      <Stack.Screen
          name='H&M'
          component={TabNavigator}
          options={({ navigation }) => ({
            headerRight: () => <HeaderRightButton/> })} />
      <Stack.Screen name="YOUR BAG" component={BagCart} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

