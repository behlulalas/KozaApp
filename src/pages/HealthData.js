import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ImageBackgroundSafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, ListItem, Button } from 'react-native-elements';
import CButton from './../components/button';
import InputText from  '../components/InputText';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>

        <ImageBackground
          source={require('../images/koza-home-photo.png')}
          style={styles.image}>
          <View style={styles.HeaderArea}>
            <Image source={require('../images/logo-koza.png')} style={styles.Logo} />
          </View>
          <View style={styles.ProfilArea}>
            <Text style={styles.baslik}>Sağlık Verileri</Text>
             <View style={styles.kutu }>
            
              <TextInput style={styles.parola}
                placeholder=''
                secureTextEntry={false}
                placeholderTextColor='white'
              ></TextInput>

              <TouchableOpacity
              onPress ={() => alert('Koza Ailesine selamlar !')}
              
              >
              <Icon
                  name={"caret-forward-outline"}
                  size={20}
                  color="white"
                  style={styles.gizle} />
              </TouchableOpacity>
            </View>
            <ScrollView style={{width:"100%", paddingTop:"5%"}}>
              <View style={styles.bilgi}>
                <Text style={{color:"white"}}>7 Haziran 2020</Text>
                <Text style={{color:"white"}}>45 Kilo</Text>
              </View>
              <View style={styles.bilgi}>
                <Text style={{color:"white"}}>7 Temmuz 2020</Text>
                <Text style={{color:"white"}}>45 Kilo</Text>
              </View>
              <View style={styles.bilgi}>
                <Text style={{color:"white"}}>7 Eylül 2020</Text>
                <Text style={{color:"white"}}>45 Kilo</Text>
              </View>

            </ScrollView>
          </View>
          <View style={styles.DescriptionArea}>
          <CButton
              text="KAYDET"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </ImageBackground>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderArea: {
    alignItems: 'center',
    flex: 2
  },
    ProfilArea: {
    flex: 7,
    backgroundColor: '#2DE1BD',
    borderRadius: 15,
    marginVertical:'3%',
    marginHorizontal:'10%',
    padding:'3%',
    shadowColor: '#000',
    shadowOffset:{
      width:0,
      height:6
    },
    shadowOpacity:0.2,
    shadowRadius:7.5,
    elevation:5,
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },

  Logo: {
    width: 150,
    height: 150,
  },
  DescriptionArea: {
    flex: 1,
    paddingHorizontal: "20%",
    
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },


  baslik:{
    paddingVertical:"5%",
    color: "white",
    fontSize:20
  },
    kutu:{
    borderRadius: 20,
    backgroundColor:"#a3ffeb",
    flexDirection: 'row',
    marginTop: 10,
    height: 40,
  },
    parola:{
    height: 40,
    width:"85%",
    paddingHorizontal:"5%",
    borderRadius: 20,
    backgroundColor: '#a3ffeb',
    fontSize:14,
    borderWidth:0.5,
    borderColor: '#87fff7'
  },
   gizle:{
    paddingTop: "50%",
    alignSelf: 'right'
  },
bilgi:{
  paddingVertical:"1%",
  paddingHorizontal:"5%",
  flexDirection: 'row',
  justifyContent: 'space-between',
}
});
