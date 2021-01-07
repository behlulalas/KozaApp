import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, ListItem, Button } from 'react-native-elements';
import CButton from './../components/button';

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
          
            <View style={styles.profilImage}></View>
            <TouchableOpacity style={styles.buton} onPress={()=>navigate('DanismanInfo')}>
              <Text style={styles.text}>Kullanıcı Bilgileri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buton} onPress={()=>navigate('Cards')}>
              <Text style={styles.text}>Kart Bilgileri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buton} >
              <Text style={styles.text}>Diploma Bilgisi</Text>
              <Icon
                name={"cloud-upload-outline"}
                size={20}
                style={{color:'#FBB663'}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buton}>
              <Text style={styles.text}>Sertifika Bilgisi(Tercihen)</Text>
              <Icon
                name={"cloud-upload-outline"}
                size={20}
                style={{color:'#FBB663'}}
                />
            </TouchableOpacity>
            <View style={{height:'9%'}}></View>
            <TouchableOpacity style={styles.buton} >
              <Text style={styles.text}>Çıkış Yap</Text>
            </TouchableOpacity>
          
          </View>
          <View style={styles.DescriptionArea}></View>
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
    flex: 3
  },
    ProfilArea: {
    flex: 11,
    backgroundColor: 'white',
    borderRadius: 15,
    margin:'10%',
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
    alignItems: 'center'
  },

  Logo: {
    width: 150,
    height: 150,
  },
  DescriptionArea: {
    flex: 0.3,
    paddingLeft: 10,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },

  profilImage:{
    height: '20%',
    width: '30%',
    backgroundColor: '#2DE1BD',
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: '#FBB663'
  },
  buton:{
    width:'85%',
    backgroundColor: '#2DE1BD',
    borderRadius: '25px',
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  text:{
    color: 'white',
    width: '90%'
    
  }

});
