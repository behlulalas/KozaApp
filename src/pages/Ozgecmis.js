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
    const {navigate} = this.props.navigation;   
    return (
      <View style={styles.container}>

        <ImageBackground
          source={require('../images/koza-home-photo.png')}
          style={styles.image}>
          <View style={styles.HeaderArea}>
            <Image source={require('../images/logo-koza.png')} style={styles.Logo} />
          </View>
          <View style={styles.ProfilArea}>
            <Text style={styles.baslik}>Özgeçmiş</Text>

            <ScrollView style={{width:"100%", padding:"5%"}}>
            <Text style={styles.yazi}>Mezun olduğunuz okul</Text>
            <InputText/>

            <Text style={styles.yazi}>Yer aldığı projeler</Text>
            <InputText/>

            <Text style={styles.yazi}>Yayınladığı makaleler</Text>
            <InputText/>

            <Text style={styles.yazi}>Uzmanlık Alanı</Text>
            <InputText/>
              

            </ScrollView>
          </View>
          <View style={styles.DescriptionArea}>
          <CButton
              text="ÖZGEÇMİŞİ KAYDET"
              onPress={() => this.props.navigation.goBack() }
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
yazi:{
  color:"white", 
  paddingHorizontal:"3%",
  paddingBottom:"2%",
  paddingTop:"5%"
  }

});
