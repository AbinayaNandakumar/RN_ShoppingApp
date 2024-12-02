

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const OthersScreen = () => {
  const othersData = [
    {
      id: 1,
      title: 'Gift Cards',
    },
    {
      id: 2,
      title: 'Track Orders',
    },
    {
      id: 3,
      title: 'Help & Support',
    },
    {
      id: 4,
      title: 'Refer a Friend',
    },
    {
      id: 5,
      title: 'Rate Our App',
    },
    {
      id: 6,
      title: 'Feedback',
    }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={othersData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeaea',
  },
  list: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#512104'
  },
});

export default OthersScreen;
