import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button
} from 'react-native';
import CButton from '../components/button';


export default class Home extends Component {
    static navigationOptions={
    headerTransparent:true,

  };
  render() {
    
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../images/koza-home-photo.png')}
          style={styles.image}>
          <View style={styles.HeaderArea}>
            <Image source={require('../images/logo-koza.png')} style={styles.Logo} />
          </View>

          <View style={styles.DescriptionArea}>
            <Text style={styles.Description}> </Text>
            <Text style={styles.Description}>Merhaba!</Text>
            <Text style={styles.Description}>Ben senin yeni danışmanınım</Text>
            <Text style={styles.Description}>
              En iyi sen'e ulaşmaya hazır mısın ?
            </Text>
          </View>
          <View style={styles.fixToText}>
            <CButton
              text="Kayıt Ol"
              onPress={() => this.props.navigation.navigate('Register')}
             
            />
            <CButton text="Giriş" 
             onPress={() => this.props.navigation.navigate('Login')} />
                      
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
    alignItems:'center',
    paddingTop:30,
    
  },
  Logo: {
    
    width:150,
    height:150,
   
  },
  Description: {
    
    color:"white",
    fontSize:18,
    fontFamily: 'Trebuchet MS Family',
    
  },
  DescriptionArea: {
    flex:3,
    paddingLeft:60,
    
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingBottom:60,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height:'150%',
  },
});

