import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BagCart = ({ route }) => {
 // const { productDetailArray } = route.params;
  const productDetailArray = route.params ? route.params.productDetailArray : null;
  // Check if productDetailArray is empty or null
  if (!productDetailArray || productDetailArray.length === 0) {
    return (
      <View>
        <Text>No products found.</Text>
      </View>
    );
  }

  // Convert productDetails array into an array of objects
  const products = [
    {
      title: productDetailArray[0],
      id: productDetailArray[1],
      price: productDetailArray[2],
      description: productDetailArray[3],
      quantity: productDetailArray[4],
    },
  ];

  const calculateSubtotal = () => {
    let subtotal = 0;
    products.forEach((product) => {
      subtotal += parseFloat(product.price) * product.quantity;
    });
    return subtotal.toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const shipment = 5;
    return (subtotal + shipment).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={require('./Images/clothing1.png')} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Quantity: {products.reduce((acc, product) => acc + product.quantity, 0)}
        </Text>
        <Text style={styles.summaryText}>Subtotal: ${calculateSubtotal()}</Text>
        <Text style={styles.summaryText}>Shipment: $5</Text>
        <Text style={styles.summaryText}>Total: ${calculateTotal()}</Text>
      </View>
      <TouchableOpacity style={styles.orderButton}>
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
  productQuantity: {
    fontSize: 16,
    color: '#666',
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