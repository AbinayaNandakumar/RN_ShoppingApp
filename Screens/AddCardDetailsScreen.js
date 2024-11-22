import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartUserContext } from '../Store/CartUserContext';
import Ionicons from '@expo/vector-icons/Ionicons';

const AddCardDetailsScreen = () => {
  const navigation = useNavigation();
  const { addCardDetails, setAddCardDetails } = useContext(CartUserContext);
  const { selectedPaymentOption, setSelectedPaymentOption } = useContext(CartUserContext);


  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleAddCard = () => {
    const newCardDetails = {
      cardNumber,
      expiryDate,
      cvv,
      cardHolderName,
    };
    setAddCardDetails(newCardDetails);
    setSelectedPaymentOption('Card');
    navigation.navigate('CHECKOUT');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={cardHolderName}
          onChangeText={(text) => setCardHolderName(text)}
          placeholder="Name on card"
        />
      </View>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          placeholder="Card number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.expiryCvvContainer}>
        <View style={styles.expiryContainer}>
          <TextInput
            style={styles.expiryInput}
            value={expiryDate}
            onChangeText={(text) => setExpiryDate(text)}
            placeholder="Expiry(MM/YY)"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.cvvContainer}>
          <TextInput
            style={styles.cvvInput}
            value={cvv}
            onChangeText={(text) => setCvv(text)}
            placeholder="CVV"
            keyboardType="numeric"
            secureTextEntry
          />
        </View>
      </View>
      
      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text style={styles.addButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  expiryCvvContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  expiryContainer: {
    width: '60%',
  },
  expiryInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cvvContainer: {
    width: '35%',
  },
  cvvInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  addButton: {
    backgroundColor: '#512104',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius:8
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default AddCardDetailsScreen;