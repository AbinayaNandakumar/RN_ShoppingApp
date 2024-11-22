import { useState,useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Alert,Modal,Button } from 'react-native';
import QuantitySelector from '../Components/QuantitySelector';
import { CartUserContext } from '../Store/CartUserContext';
import CheckoutScreen from './CheckoutScreen';
import { useNavigation } from '@react-navigation/native';




const BagCart = ({ route }) => {
  const navigation = useNavigation();

 // const productDetailArray = route.params ? route.params.productsAddedForCart : null;
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartUserContext);
  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your bag is empty.</Text>
      </View>
    );
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
const handleIncrement = (id) => {
  updateQuantity(id, cartItems.find((item) => (item.id) === id).quantity + 1);
};

const handleDecrement = (id) => {
  updateQuantity(id, cartItems.find((item) => (item.id) === id).quantity - 1);
};

const calculateSubtotal = () => {
  let subtotal = 0;
  cartItems.forEach((product) => {
    subtotal += parseFloat(product.price) * product.quantity;
  });
  return subtotal.toFixed(2);
};

const calculateTotal = () => {
  const subtotal = parseFloat(calculateSubtotal());
  const shipment = 5;
  return (subtotal + shipment).toFixed(2);
};

const handleRemove = (id) => {
  Alert.alert(
    "Remove Item",
    "Are you sure you want to remove this item from your cart?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      { 
        text: "Remove", 
        onPress: () => removeFromCart(id) 
      },
    ]
  );
};

const handleCheckout = () => {
 navigation.navigate('CHECKOUT');
};


return (
  <View style={styles.container}>
    <FlatList
      data={cartItems}
      renderItem={({ item, index }) => (
        <View style={styles.productContainer}>
          <Image source={require('./Images/clothing1.png')} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>${item.price} /ea</Text>
            <QuantitySelector
              quantity={item.quantity}
              onIncrement={() => handleIncrement((item.id))}
              onDecrement={() => handleDecrement((item.id))}
            />
            <TouchableOpacity onPress={() => handleRemove((item.id))}>
    <Text style={{ color: 'red' }}>Remove Item</Text>
            </TouchableOpacity>

          </View>
        </View>
      )}
      keyExtractor={(item,index) => (index).toString()}
    />
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>
        Quantity: {cartItems.reduce((acc, product) => acc + product.quantity, 0)}
      </Text>
      <Text style={styles.summaryText}>Subtotal: ${calculateSubtotal()}</Text>
      <Text style={styles.summaryText}>Shipment: $5</Text>
      <Text style={styles.summaryText}>Total: ${calculateTotal()}</Text>
    </View>
    <TouchableOpacity style={styles.orderButton} onPress={handleCheckout}>
      <Text style={styles.orderButtonText}>Order Now</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    padding: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  orderButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default BagCart;



