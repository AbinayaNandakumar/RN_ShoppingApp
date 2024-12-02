import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RandomNumberGenerator from '../Components/RandomNumberGenerator';
import { useState,useEffect,useContext } from 'react';
import { CartUserContext } from '../Store/CartUserContext';
import { useNavigation } from '@react-navigation/native';


const OrderCompleteScreen = ({ route }) => {
  const navigation = useNavigation();

  const { cartItems, shippingAddress, deliveryOption, selectedPaymentOption, addCardDetails, totalPrice ,orderNumber} = route.params;
  const { clearCart } = useContext(CartUserContext);

  useEffect(() => {
    clearCart();
     }, []);
 

  const handleShopMore = () => {
    console.log('shop more');
   navigation.navigate('Shopy');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank you for your purchase</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryOrderNumber}>Your Order Number is {orderNumber}</Text>
            <Text style={styles.summaryDeliveryTime}>Estimate delivery time by XXXXXX</Text>
            <Text style={styles.summaryEmail}>You will receive an email at {shippingAddress.emailAddress}</Text>
            <Text style={styles.summaryEditOrder}>To change or cancel order go to Order History.</Text>
         </View>
         <TouchableOpacity style={styles.shopMoreButton} onPress={handleShopMore}>
        <Text style={styles.shopButtonText}>Shop More</Text>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor:'#ccb5a8',
    margin: 20,
    borderRadius:10,
    marginBottom:40,
    alignItems:'center'
  },
  title:
  {
    margin: 20,
    fontSize: 20,
    color:'#512104',
    fontWeight: 'bold'
  },
  summaryContainer:
  {
    backgroundColor:'white',
    borderRadius:8,
    elevation:4,
    shawdowColor: 'black',
    shadowOpacity: 0.65,
    shadowOffset: {width:0,height:2},
    shadowRadius:8
  },
  summaryOrderNumber:
  {
    margin:10,
    color:'#512104'
  },
  summaryDeliveryTime:
  {
    margin:10,
    color:'#512104'
  },
  summaryEmail:
  {
    margin:10,
    color:'#512104'
  },
  summaryEditOrder:
  {
    margin:10,
    color:'#512104'
  },
  shopMoreButton:
  {
    backgroundColor: '#512104',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:8,
    margin:20
   
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OrderCompleteScreen;