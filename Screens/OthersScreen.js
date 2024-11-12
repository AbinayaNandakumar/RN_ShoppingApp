

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
     // icon: require('./gift-card.png'),
      //navigation: 'GiftCards',
    },
    {
      id: 2,
      title: 'Track Orders',
      //icon: require('./track-order.png'),
     // navigation: 'TrackOrders',
    },
    {
      id: 3,
      title: 'Help & Support',
      //icon: require('./help.png'),
      //navigation: 'HelpSupport',
    },
    {
      id: 4,
      title: 'Refer a Friend',
     // icon: require('./refer-friend.png'),
      //navigation: 'ReferFriend',
    },
    {
      id: 5,
      title: 'Rate Our App',
     // icon: require('./rate-app.png'),
     // navigation: 'RateApp',
    },
    {
      id: 6,
      title: 'Feedback',
      //icon: require('./feedback.png'),
      //navigation: 'Feedback',
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
    //paddingVertical: 10,
    //paddingHorizontal: 20,
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
