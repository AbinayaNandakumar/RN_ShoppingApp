import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { CartUserContext } from '../Store/CartUserContext';

const PaymentMethodScreen = () => {
  const navigation = useNavigation();
  const { selectedPaymentOption, setSelectedPaymentOption } = useContext(CartUserContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.paymentOption} 
        onPress={() => 
          selectedPaymentOption === 'Apple Pay' 
            ? setSelectedPaymentOption('') 
            : setSelectedPaymentOption('Apple Pay')
        }
      >
        <Text style={styles.optionText}>Apple Pay</Text>
        {selectedPaymentOption === 'Apple Pay' && (
          <Text style={styles.tickMark}>√</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.paymentOption} 
        onPress={() => 
          selectedPaymentOption === 'Google Pay' 
            ? setSelectedPaymentOption('') 
            : setSelectedPaymentOption('Google Pay')
        }
      >
        <Text style={styles.optionText}>Google Pay</Text>
        {selectedPaymentOption === 'Google Pay' && (
          <Text style={styles.tickMark}>√</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.addCardContainer} 
        onPress={() => navigation.navigate('ADD A CARD')}
      >
        <Text style={styles.addCardText}>Add Debit/Credit Card</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#512104" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.saveButton} 
        onPress={() => {
          navigation.navigate('CHECKOUT');
        }}
      >
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ccb5a8',
    borderRadius: 8,
    margin: 10,
  },
  tickMark: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#512104',
  },
  optionText: {
    color: '#512104',
    fontSize: 18,
  },
  addCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  addCardText: {
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: '#512104',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 10,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default PaymentMethodScreen;








