import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Badge } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { CartUserContext } from '../Store/CartUserContext';

const HeaderRightButton = () => {
  const navigation = useNavigation();
  const { cartItems } = useContext(CartUserContext);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handlePress = () => {
    navigation.navigate('YOUR BAG');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{ marginRight: 8, flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="cart-outline" size={25} style={{ marginRight: -7 }} />
        {totalQuantity > 0 && (
          <Badge
            style={{
              backgroundColor: '#16772c',
            }}
          >
            {totalQuantity}
          </Badge>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default HeaderRightButton;




