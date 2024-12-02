import React from 'react';
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { fetchCategoriesData } from '../Util/http';

const CategoryButtons = () => {
  const navigation = useNavigation();
  const [fetchedCategoryData, setFetchedCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategoriesData = async () => {
      setIsLoading(true);
      try {
        const categoryData = await fetchCategoriesData();
        setFetchedCategoryData(categoryData.filter((item) => item !== null));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCategoriesData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical:300 }}>
        <ActivityIndicator size="large" color="#512104" />
      </View>
    );
  }

  if (!fetchedCategoryData || fetchedCategoryData.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:20 }}>
        <Text>No categories found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {fetchedCategoryData.map((category) => (
        <Pressable
          key={category.categoryId}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.pressed : null,
          ]}
          onPress={() =>
            navigation.navigate('SearchCategories', {
              categoryName: category.name,
              categoryId: category.categoryId,
            })
          }
        >
          <View style={styles.buttonContent}>
            <Ionicons name={category.icon} size={24} color="#512104" />
            <Text style={styles.buttonText}>{category.name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    width: '95%',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#ccb5a8',
  },
  pressed: {
    opacity: 0.5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#512104',
  },
});

export default CategoryButtons;
