import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import categoriesdata from '../Data/categoriesdata.json';
import { useNavigation } from '@react-navigation/native';


const CategoryButtons = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {categoriesdata.map((category) => (
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.pressed : null,
          ]}
         onPress={() => navigation.navigate('SearchCategories', { categoryName: category.name, categoryId: category.categoryId })}
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
    color:'#512104'
  },
});

export default CategoryButtons;
