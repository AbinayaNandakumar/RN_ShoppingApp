import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './Components/TabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                     headerStyle: { backgroundColor: '#ccb5a8' }
                      }}>
      <Stack.Screen
          name='H&M'
          component={TabNavigator}
          options={({ navigation }) => ({
            headerRight: () => (
                <Ionicons name="bag-handle-outline" size={24} style={{ marginLeft: 16 }} />
            ),
          })}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


