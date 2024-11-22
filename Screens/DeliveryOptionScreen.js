import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RadioForm, { RadioButtonInput } from 'react-native-simple-radio-button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartUserContext } from '../Store/CartUserContext';
import { useContext } from 'react';

const DeliveryOptionScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { setDeliveryOption, setShippingCost } = useContext(CartUserContext);
  const [selectedOption, setSelectedOption] = useState(route.params?.selectedOption || 'in-store-pickup');

  const deliveryOptions = [
    { label: 'In-store Pickup', description: 'Pick up your order at our store location', price: 0 },
    { label: 'Standard Delivery', description: 'Delivery within 3-5 business days', price: 4.99 },
    { label: 'Express Delivery', description: 'Delivery within 1-2 business days', price: 9.99 },
  ];

  const handleSave = () => {
    setDeliveryOption(selectedOption);
    setShippingCost(deliveryOptions.find(option => option.label === selectedOption).price);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {deliveryOptions.map((option, index) => (
        <View key={index} style={styles.radioButtonContainer}>
          <View style={styles.radioButton}>
            <RadioButtonInput
              obj={{}}
              index={index}
              isSelected={selectedOption === option.label}
              onPress={() => setSelectedOption(option.label)}
              buttonInnerColor={'#000'}
              buttonOuterColor={selectedOption === option.label ? '#512104' : '#ccc'}
              buttonSize={16}
              buttonOuterSize={24}
            />
            <View style={styles.labelContainer}>
              <Text style={styles.label} onPress={() => setSelectedOption(option.label)}>{option.label}</Text>
              <Text style={styles.description}>{option.description}</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${option.price.toFixed(2)}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ccb5a8',
    borderRadius:8,
    padding:8
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  labelContainer: {
   marginLeft: 10,
  },
  label: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    marginLeft: 20,
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#512104',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:8,
   
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default DeliveryOptionScreen;