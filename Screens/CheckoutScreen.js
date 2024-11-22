import { CartUserContext } from '../Store/CartUserContext';
import {useContext} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShippingAddressScreen from './ShippingAddressScreen';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
    const navigation = useNavigation();

    const { 
      cartItems, 
      shippingAddress, 
      deliveryOption, 
      shippingCost, 
      selectedPaymentOption, 
      addCardDetails 
    } = useContext(CartUserContext);


  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  //const shippingCost = 10; 
  const totalPrice = calculateSubtotal() + shippingCost;

  const handlePress = (item) => {
    console.log(`Pressed: ${item.title}`);
    if (item.title === 'Shipping Address') {
        navigation.navigate('SHIPPING ADDRESS');
      } else if (item.title === 'Delivery Options') {
        navigation.navigate('DELIVERY OPTIONS');
      } 
       else if (item.title === 'Payment Method') {
        navigation.navigate('PAYMENT METHOD');
       } 
       //else if (item.title === 'Add Discount Code') {
    //     navigation.navigate('AddDiscountCode');
    //   }
  };

  const handlePlaceOrder = () => {
    console.log('Place Order pressed');
    // Validate shipping address
  if (!shippingAddress.firstName || !shippingAddress.lastName || !shippingAddress.address || !shippingAddress.city || !shippingAddress.country || !shippingAddress.postalCode) {
    alert('Please fill in shipping address details');
    return;
  }

  // Validate delivery option
  if (!deliveryOption) {
    alert('Please select a delivery option');
    return;
  }

  // Validate payment method
  if (!selectedPaymentOption) {
    alert('Please select a payment method');
    return;
  }

  // Validate card details if payment method is Card
  if (selectedPaymentOption === 'Card' && (!addCardDetails.cardNumber || !addCardDetails.expiryDate || !addCardDetails.cvv || !addCardDetails.cardHolderName)) {
    alert('Please fill in card details');
    return;
  }

  // Validate cart items
  if (cartItems.length === 0) {
    alert('Your cart is empty');
    return;
  }

  // Navigate to Order Confirmation screen
  navigation.navigate('ORDER COMPLETE', {
    cartItems,
    shippingAddress,
    deliveryOption,
    selectedPaymentOption,
    addCardDetails,
    totalPrice,
  });
  };

  const data = [
    {
      id: 1,
      title: 'Shipping Address',
      icon: 'location-outline',
      description: `${shippingAddress.firstName} 
      ${shippingAddress.lastName}, 
      ${shippingAddress.address}, 
      ${shippingAddress.city}, 
      ${shippingAddress.country} ,
      ${shippingAddress.postalCode}`,
    },
    {
      id: 2,
      title: 'Delivery Options',
      icon: 'bus-outline',
    },
    {
      id: 3,
      title: 'Payment Method',
      icon: 'card-outline',
    },
    {
      id: 4,
      title: 'Add Discount Code',
      icon: 'gift-outline',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={() => handlePress(item)}
          >
            <Ionicons name={item.icon} size={24} color="#333" />
            <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            {item.title === 'Shipping Address' && shippingAddress.firstName ? (
                <Text style={styles.itemDescription}>
                  {shippingAddress.firstName} {shippingAddress.lastName}, {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.country}, {shippingAddress.postalCode}.
                </Text>
              ) : item.title === 'Delivery Options' && deliveryOption ? (
                <Text style={styles.itemDescription}>{deliveryOption}</Text>
              ) :item.title === 'Payment Method' && selectedPaymentOption ? (  <View>
                <Text style={styles.itemDescription}>{selectedPaymentOption}</Text>
                {selectedPaymentOption === 'Card' && addCardDetails ? (
                  <View>
                    <Text>Card Number: {addCardDetails.cardNumber}</Text>
                    <Text>Expiry Date: {addCardDetails.expiryDate}</Text>
                    <Text>CVV: {addCardDetails.cvv}</Text>
                    <Text>Card Holder Name: {addCardDetails.cardHolderName}</Text>
                  </View>
                ) : null}
              </View>
            ) : null}
            </View>
        
            <Ionicons 
              name="chevron-forward-outline" 
              size={24} 
              color="#333" 
              style={styles.arrowIcon} 
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <ScrollView style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Item Summary</Text>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.summaryItem}>
            <Text style={styles.summaryItemTitle}>{item.name}</Text>
            <Text style={styles.summaryItemPrice}>${item.price} x {item.quantity}</Text>
          </View>
        ))}
        <View style={styles.total}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.value}>${calculateSubtotal().toFixed(2)}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.label}>Shipping Cost:</Text>
          <Text style={styles.value}>${shippingCost.toFixed(2)}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.value}>${totalPrice.toFixed(2)}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity 
        style={styles.placeOrderButton}
        onPress={handlePlaceOrder}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
    marginBottom: 5,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  itemTitle: {
    fontSize: 16,
    flex: 1,
  },
  arrowIcon: {
    marginRight: 10,
  },
  summaryContainer: {
    marginTop: 20,
    marginBottom:15,
    padding: 15,
    backgroundColor: '#ccb5a8',
    borderRadius: 10,
  },
  summaryTitle: {
    fontSize: 18,
    marginBottom: 10,
    color:'white',
    fontWeight:'bold'
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryItemTitle: {
    fontSize: 16,
  },
  summaryItemPrice: {
    fontSize: 16,
    color: '#666',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
  value: {
    fontSize: 16,
  },
  placeOrderButton: {
    backgroundColor:'#512104',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:12,
    marginBottom:7
    
    },

  placeOrderText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CheckoutScreen;
