
import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CButton from './../components/button';
import InputText from  '../components/InputText';


export default class PasswordReset extends Component {
 static navigationOptions={
   title:'Parola Sıfırlama',
 };

  render() {
    const {navigate} = this.props.navigation;   
    return (
      <SafeAreaView style={styles.ekran}>
        <ImageBackground
          source={require('../images/koza-home-photo.png')}
          style={styles.image}>
          <View style={styles.HeaderArea}>
            <Image source={require('../images/logo-koza.png')} style={styles.Logo} />
          </View>

        <View style={styles.giris}>
          <Text style={styles.yazi}>Lütfen E-posta Adresinizi Giriniz </Text> 
          <View style={styles.kutu }>
            <InputText placeholder="E-posta"/>
            </View>
            <CButton
                text="E-POSTA GÖNDER"
                onPress={() => navigate('PasswordReset')}
              />
            


        </View>
    </ImageBackground>
      </SafeAreaView>
      
    );
  }
}


const styles = StyleSheet.create({

  ekran:{
    flex:1,
    backgroundColor: "#F5FCFF"
  },

  giris:{
    flex:2,
    paddingHorizontal: "15%",
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

  HeaderArea: {
    alignItems: 'center',
    flex: 2
  },
  Logo: {
    width: 150,
    height: 150,
  },
    image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },

    yazi:{
    color: '#2DE1BD',
    fontSize: 15,
    paddingBottom: "8%",
    textAlign:"center"
  },
});
