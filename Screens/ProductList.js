import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import productsdata from '../Data/productsdata.json';


const screenWidth = Dimensions.get('window').width;
//const screenHeight = Dimensions.get('window').height;


const ProductList = ({route}) => {
  const navigation = useNavigation();


  //   const [productslist, setProductslist] = useState([]);
  // useEffect(() => {
  //   setProductslist(categoriesdata[0].ActivewearCategory);
  //  }, []);

  const{categoryName, categoryId} = route.params;
  console.log('catname:',categoryName);
  console.log( 'catid:',categoryId);

  const displayedproducts = productsdata.filter((dataItem)=> {
    return dataItem.subCategoryId.indexOf(categoryId) >= 0;
  });
  console.log('plsworkout2:',displayedproducts);

  const renderItem = ({ item }) => (
    
    <View style={styles.productContainer}>
      <Image source={require(`./clothing2.png`)} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.Price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedproducts}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
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
    marginBottom: 10,
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
