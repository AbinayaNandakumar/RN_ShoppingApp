import { 
    View, 
    Text, 
    StyleSheet, 
     
  } from 'react-native';
  
  const AboutScreen = () =>  {
    
    return (
      <View>
        <Text>About Beauty & Clothing App</Text>
        <Text>
          This app provides a wide range of beauty and clothing products from popular brands.
        </Text>
        <Text>
          Our mission is to provide the best shopping experience to our customers.
        </Text>
        <Text>
          Contact us: support@H&M.com
        </Text>
      </View>
    );
  }
  export default AboutScreen;

  const styles = StyleSheet.create ({ 

    container:
    {
        flex: 1,
        backgroundColor: '#ebeaea'
    },
    header:
    {
        margin: 18,
        fontSize: 16,
        color:'#512104'
    },
    text:
    {
        fontSize: 16,
        margin: 10,
        color:'#512104'
    }

  });