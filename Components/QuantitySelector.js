import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const QuantitySelector = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.addQuantityText}> Quantity:</Text>
      <TouchableOpacity onPress={onDecrement}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={onIncrement}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderColor:'#512104',
    borderWidth: 2,
    marginHorizontal:16,
    borderRadius:10
  },
  addQuantityText: {
    fontSize: 18,
    marginRight: 150,
  },
  button: {
    backgroundColor: '#512104',
    borderColor: '#512104',
    borderWidth: 2,
    borderRadius: 3,
    padding: 4,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  textContainer: {
    backgroundColor: '#fff',
    borderColor: '#512104',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default QuantitySelector;

