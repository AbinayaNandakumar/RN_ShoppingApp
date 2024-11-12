import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const RewardsScreen = () => {
  const rewardsData = [
    {
      id: 1,
      title: '10% Off',
      description: 'On your next purchase',
      points: 100,
      image: require('./Images/rewards1.png'),
    },
    {
      id: 2,
      title: 'Free Shipping',
      description: 'On orders over $50',
      points: 200,
      image: require('./Images/rewards2.png'),
    },
    {
      id: 3,
      title: '$5 Off',
      description: 'On your birthday',
      points: 50,
      image: require('./Images/rewards3.png'),
    },
  ];

  const renderRewardItem = ({ item }) => (
    <TouchableOpacity style={styles.rewardItem}>
      <Image source={item.image} style={styles.rewardImage} />
      <View style={styles.rewardInfo}>
        <Text style={styles.rewardTitle}>{item.title}</Text>
        <Text style={styles.rewardDescription}>{item.description}</Text>
        <Text style={styles.rewardPoints}>{item.points} points</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rewards</Text>
      <FlatList
        data={rewardsData}
        renderItem={renderRewardItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.rewardsList}
      />
      <TouchableOpacity style={styles.redeemButton}>
        <Text style={styles.redeemButtonText}>Redeem Rewards</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rewardsList: {
    paddingVertical: 10,
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  rewardImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  rewardInfo: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666',
  },
  rewardPoints: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  redeemButton: {
    backgroundColor: '#3D3D3D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  redeemButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default RewardsScreen;

