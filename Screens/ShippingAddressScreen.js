import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CartUserContext } from '../Store/CartUserContext';
import { useNavigation } from '@react-navigation/native';

const ShippingAddressScreen = () => {
  const navigation = useNavigation();
  const { shippingAddress, updateShippingAddress } = useContext(CartUserContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    emailAddress: '',
    postalCode: '',
    city: '',
    country: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.address ||
      !formData.emailAddress ||
      !formData.postalCode ||
      !formData.city ||
      !formData.country
    ) {
      Alert.alert('Error', 'Please fill all fields');
      return false;
    }

    //Name Validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.firstName) || !nameRegex.test(formData.lastName)) {
      Alert.alert('Error', 'Invalid name (use alphabets and spaces)');
      return false;
    }

    // Address validation (allow alphabets, numbers, spaces, and special characters)
    const addressRegex = /^[a-zA-Z0-9\s,.-]+$/;
    if (!addressRegex.test(formData.address)) {
      Alert.alert('Error', 'Invalid address (use alphabets, numbers, spaces, and special characters)');
      return false;
    }

    // City validation (allow alphabets and spaces)
    const cityRegex = /^[a-zA-Z\s]+$/;
    if (!cityRegex.test(formData.city)) {
      Alert.alert('Error', 'Invalid city (use alphabets and spaces)');
      return false;
    }

    // Country validation (allow alphabets and spaces)
    const countryRegex = /^[a-zA-Z\s]+$/;
    if (!countryRegex.test(formData.country)) {
      Alert.alert('Error', 'Invalid country (use alphabets and spaces)');
      return false;
    }
    // Phone Number Validation
    const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      Alert.alert('Error', 'Invalid phone number');
      return false;
    }
    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.emailAddress)) {
      Alert.alert('Error', 'Invalid email address');
      return false;
    }
    //PostalCode Validation
    const postalCodeRegex = /^(\d{5}-\d{4}|\d{5})$/; // US postal code format (5 or 9 digits)
    if (!postalCodeRegex.test(formData.postalCode)) {
      Alert.alert('Error', 'Invalid postal code (use XXXXX or XXXXX-XXXX)');
      return false;
    }
    return true;
  };

  const handleSaveAddress = () => {
    if (validateForm()) {
      updateShippingAddress(formData);
      navigation.navigate('CHECKOUT');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="First Name"
          value={formData.firstName}
          onChangeText={(text) => handleInputChange('firstName', text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Last Name"
          value={formData.lastName}
          onChangeText={(text) => handleInputChange('lastName', text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChangeText={(text) => handleInputChange('phoneNumber', text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Address"
          value={formData.address}
          onChangeText={(text) => handleInputChange('address', text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Email Address"
          value={formData.emailAddress}
          onChangeText={(text) => handleInputChange('emailAddress', text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Postal Code"
          value={formData.postalCode}
          onChangeText={(text) => handleInputChange('postalCode', text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="City"
          value={formData.city}
          onChangeText={(text) => handleInputChange('city', text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Country"
          value={formData.country}
          onChangeText={(text) => handleInputChange('country', text)}
        />
      </View>
      <TouchableOpacity style={styles.doneButton} onPress={handleSaveAddress}>
        <Text style={styles.doneButtonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
  },
  inputField: {
    height: 40,
    borderColor: '#512104',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  doneButton: {
    backgroundColor: '#512104',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom:10

  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ShippingAddressScreen;
