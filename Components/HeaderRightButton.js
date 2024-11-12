import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import BagCart from '../Screens/BagCart';

const HeaderRightButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('YOUR BAG');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Ionicons name="bag-handle-outline" size={24} style={{ marginLeft: 16 }} />
    </TouchableOpacity>
  );
};

export default HeaderRightButton;
