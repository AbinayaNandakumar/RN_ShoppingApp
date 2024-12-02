

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Alert } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import  Menudata from '../Data/Menudata.json';


function MenuScreen () {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={Menudata}
        renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              switch(item.name)
              {

                case 'About':
                    navigation.navigate('AboutScreen');
                    break;
                  case 'Logout':
                    Alert.alert(
                      'Logout',
                      'Are you sure you want to logout?',
                      [
                        {
                          text: 'Cancel',
                          style: 'cancel',
                        },
                        { 
                          text: 'Logout', 
                          onPress: () => {
                            BackHandler.exitApp();
                           // navigation.navigate('Login');
                          } 
                        },
                      ]
                    );
                    break;
                  default:
                    console.log('selected:',item.name);
                }
              }
            
            }
          >
          
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={24} color="black" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Ionicons name="chevron-forward-outline" size={24} color="black" />
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
    backgroundColor: '#ebeaea',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  iconContainer: {
    width: 40,
  },
  textContainer: {
    flex: 1,
  },
  arrowContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  itemText: {
    fontSize: 18,
    marginLeft: 16,
  },
});

export default MenuScreen;
