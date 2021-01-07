import React, {Component,useState} from 'react';
import { CheckBox,StyleSheet, View, Image, ScrollView,Text,TouchableOpacity,TextInput, ImageBackground} from 'react-native';
import InputText from  '../components/InputText';
import CButton from '../components/button';


export default class App extends Component{
state = {
    result: true
  };

_onValueChange=() =>{
  this.setState({
    result 
  });
};

  render() {
    const {result} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../images/koza-home-photo.png')}
          style={styles.image}>
          <View style={styles.HeaderArea}>
            <Image source={require('../images/logo-koza.png')} style={styles.Logo} />
          </View>
            
        
          <View style={styles.danismanLogin}>
          <ScrollView style={styles.danismanBilgi}>
          <View style={styles.profilImage}></View>
            <InputText placeholder=" İsim"/>
            <InputText placeholder=" Soyisim"/>
            <InputText placeholder=" E-Posta"/>
            <InputText placeholder=" Doğum Tarihi"/>
            <InputText placeholder=" Telefon Numarası"/>
            <InputText placeholder=" Cinsiyet"/>
          
            <CButton
              text="Özgeçmiş"
              onPress={() => navigate('Ozgecmis')}
            />
            
            </ScrollView>
          </View>
          <View style={{flex:1, marginHorizontal:'20%'}}>
        <CButton
              text="Düzenle"
              onPress={() => navigate('DanismanEdit')}
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
  
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },

danismanLogin:{
  margin: 10,
  flex: 8,
  alignItems:'center',
  padding: 5,
  borderRadius:5,
  shadowColor: '#000',
      shadowOffset:{
        width:1,
        height:2
      },
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:2,
  
},
  HeaderArea: {
    alignItems: 'center',
    flex: 2
  },
  Logo: {
    width: 150,
    height: 150,
  },

danismanBilgi:{
  width:'85%',
  backgroundColor: 'white',
  padding: '5%',
  borderRadius: 15,
  shadowColor: '#000',
      shadowOffset:{
        width:1,
        height:2
      },
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:2,
 
  
  
},
  profilImage:{
    height: '20%',
    width: '30%',
    backgroundColor: '#2DE1BD',
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: '#FBB663',
    marginBottom:'5%',
    alignSelf: 'center'
  },


});