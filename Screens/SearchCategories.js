
import { useState, useEffect } from 'react';
import React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import SearchBar from '../Components/SearchBar';
import subcategories from '../Data/subcategories.json';
import { useNavigation } from '@react-navigation/native';


const SearchCategories = ({ route }) => {
  const navigation = useNavigation();

  // let listCategory;
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   setProducts(listCategory);
  //  }, []);
 
  const{categoryName, categoryId} = route.params;
  console.log('category::',categoryName);
  console.log( 'id:',categoryId);

  const displayedSubcategories = subcategories.filter((dataItem)=> {
    return dataItem.categoryId.indexOf(categoryId) >= 0;
  });
  console.log('plsworkout:',displayedSubcategories);


  // const handleCategoryPress = (category) => {
  //   navigation.navigate('Products', { category });
  // };

  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Text style={styles.header}>{categoryName}</Text>
      <FlatList
        data={displayedSubcategories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>
           navigation.navigate('Products', 
           { categoryName: item.name, categoryId: item.subCategoryId })} >
         <View style={styles.listItem}>
            <Text style={styles.listText}>{item.name}</Text>
          </View>
        </TouchableOpacity>

        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    color:'#512104'

  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccb5a8',
    borderRadius: 5,
    marginBottom: 5,
  },
  listText: {
    fontSize: 16,
    color:'#512104'
  },
});

export default SearchCategories;
/*
<Pressable style={styles.listItem} >
<Text style={styles.listText}>{item.name}</Text>
</Pressable> */