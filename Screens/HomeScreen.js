import { View,Text,StyleSheet,Button,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



function HomeScreen()
{
    const navigation = useNavigation();

    function buttonHandler()
    {
        console.log('button pressed');
        navigation.navigate('Shop');
    }
    return(
        <View style={styles.rootContainer}>
            
            <View style={styles.baseView}>
            <Image source={require(`./rewards1.png`)} style={styles.productImage} />
            <Text style={styles.saleText}>Summer sale is here ! </Text>
            <Text style={styles.offerText}>Selected Items 25%,40% and 75% off ! </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Shop Now !' color='white' onPress={buttonHandler}></Button>
            </View>
        </View>
    
    );

}
export default HomeScreen;

const styles = StyleSheet.create ({
    rootContainer:
    {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#b07b5b'


    },

    baseView:
    {
    backgroundColor:'#ccb5a8',
    width: '80%',
    padding: 50,
    borderRadius: 30,
   justifyContent:'center',
    alignItems:'center',
    elevation:4,
    shawdowColor: 'black',
    shadowOpacity: 0.65,
    shadowOffset: {width:0,height:2},
    shadowRadius:8
    
    },
    smallContentView:
    {

    backgroundColor: '#ffffff',//'#BABECC',
    borderRadius: 10,
    borderWidth: 0.2,
    alignItems:'center',
    width: '45%',
    padding: 45,
    marginTop: 5,
    marginBottom: 5,
    elevation:4,
    shawdowColor: 'black',
    shadowOpacity: 0.65,
    shadowOffset: {width:0,height:2},
    shadowRadius:8

    },
    productImage: {
        width: '70%',
        height: 100,
        borderRadius: 2,
        alignItems:'center'
      },
    saleText:
    {
    fontSize: 18,
    marginTop: 6,
    color:'#512104',
    fontWeight: 'bold'
    },
    offerText:
    {
        marginTop: 8,
        fontSize: 14,
        color:'white',
        textAlign: 'center'

    },

    buttonContainer:
    {
    backgroundColor:'black',
    borderRadius: 12,
    padding: 6,
    marginTop: 40,
    width: '75%'

    }

});