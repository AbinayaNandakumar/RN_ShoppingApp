import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import SearchBar from '../Components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { fetchSubCategoriesData } from '../Util/http';

const SearchCategories = ({ route }) => {
  const navigation = useNavigation();
  const [fetchedSubCategoryData, setFetchedSubCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getSubCategoriesData = async () => {
      setIsLoading(true);
      try {
        const subcategoryData = await fetchSubCategoriesData();
        setFetchedSubCategoryData(subcategoryData.filter((item) => item !== null));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getSubCategoriesData();
  }, []);

  const { categoryName, categoryId } = route.params;

  const displayedSubcategories = fetchedSubCategoryData.filter((dataItem) => {
    return dataItem.categoryId.indexOf(categoryId) >= 0;
  });

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = displayedSubcategories.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredData(filtered);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#512104" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearch={(text) => handleSearch(text)} />
      <Text style={styles.header}>{categoryName}</Text>
      <FlatList
        data={searchQuery === '' ? displayedSubcategories : filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Products', { categoryId: item.subCategoryId })}>
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
    color: '#512104',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccb5a8',
    borderRadius: 5,
    marginBottom: 5,
  },
  listText: {
    fontSize: 16,
    color: '#512104',
  },
});

export default SearchCategories;