
import { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native';
import QuantitySelector from '../Components/QuantitySelector';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();

  const { ProductName, ProductCategoryId, ProductDescription, ProductPrice } = route.params;

  console.log('Product Name:', ProductName);
  console.log('Product ID:', ProductCategoryId);
  console.log('Product Price:', ProductPrice);
  console.log('Product Description:', ProductDescription);


  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = (ProductPrice * quantity).toFixed(2);
  
    const productDetailArray = [ProductName,ProductCategoryId,ProductPrice,ProductDescription,quantity];
  
  function addToBagHandler()
  {
    console.log('productDetailArray',productDetailArray);
  navigation.navigate('YOUR BAG', {productDetailArray} );
  }

  return (
    <>
    <ScrollView style={styles.container}>
      <View style={styles.productImageContainer}>
        <Image source={require('./Images/clothing1.png')} style={styles.productImage} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{ProductName}</Text>
        <Text style={styles.description}>{ProductDescription}</Text>
        <Text style={styles.price}>${ProductPrice}</Text>
      </View>
      <QuantitySelector
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <View style={styles.additionalInfoContainer}>
        <View style={styles.infoItem}>
          <Ionicons name="storefront-outline" size={24} color="#333" />
          <Text style={styles.infoText}>Free pick-up in store</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="train" size={24} color="#333" />
          <Text style={styles.infoText}>Delivery in Uptown, 3 days</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="return-up-back" size={24} color="#333" />
          <Text style={styles.infoText}>Free return</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="lock-closed" size={24} color="#333" />
          <Text style={styles.infoText}>Secure pay</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Product Details</Text>
        <Text style={styles.detailText}>{ProductDescription}</Text>
      </View>
    </ScrollView>
    <TouchableOpacity style={styles.addToBagButton} onPress={addToBagHandler}>
    <Text style={styles.addToBagText}>Add to Bag</Text>
    <Text style={styles.priceText}>${totalPrice}</Text>
  </TouchableOpacity>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 80,
  },
  productImageContainer: {
    alignItems: 'center',
  },
  productImage: {
    resizeMode: 'contain',
    width: '50%',
    height: 200,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop:5
  },
  price: {
    marginTop:8,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  additionalInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#f9f9f9',
    marginTop:20
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    marginLeft: 10,
  },
  detailContainer: {
    padding: 20,
    marginBottom:50
    
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 16,
    color: '#666',
  },
  addToBagButton: {
    backgroundColor: '#333',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  addToBagText: {
    fontSize: 18,
    color: '#fff',
  },
  priceText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ProductDetailScreen;
