import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useFetchProducts from '../hooks/useFetchProducts';

const screenWidth = Dimensions.get('window').width;

const ProductList = ({ route }) => {
  const navigation = useNavigation();
  const { fetchedProductsData, error, isLoading } = useFetchProducts();
  const { categoryId } = route.params;

  const displayedProducts = fetchedProductsData.filter((dataItem) => {
    return dataItem.subCategoryId === categoryId;
  });

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetail', {
            ProductName: item.name,
            ProductId: item.productId,
          })
        }
      >
        <Image
          source={require('./Images/clothing1.png')}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
          <Text style={styles.productPrice}>${item.Price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical:300 }}>
        <ActivityIndicator size="large" color="#512104" />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {displayedProducts.length === 0 ? (
        <Text
          style={{
            textAlign: 'center',
            padding: 20,
            fontSize: 18,
          }}
        >
          No Products Available
        </Text>
      ) : (
        <FlatList
          data={displayedProducts}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.productList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  productList: {
    justifyContent: 'space-between',
  },
  productContainer: {
    width: (screenWidth - 30) / 2,
    marginBottom: 12,
    padding: 6,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    color: '#3D3D3D',
    fontWeight: 'bold',
  },
});

export default ProductList;