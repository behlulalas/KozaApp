import React, {Component,useState} from 'react';
import { CheckBox,StyleSheet, View, Image, ScrollView,Text,TouchableOpacity,TextInput,} from 'react-native';
import InputText from  '../components/InputText';
import CButton from '../components/button';


export default class Sozlesme extends Component{
  render() {
    return (
      <View style={styles.container}>
            <Image style={styles.imageContainer} source={require('../images/koza-home-photo.png')}/>
            <View>
                <Image style={styles.imageControl} source={require('../images/logo-koza.png')}/>
            </View>
            
        <ScrollView style={styles.Sozlesme}>
         
        </ScrollView>

      </View>
    );
 }
}


const styles = StyleSheet.create({

  container: {
    backgroundColor:'white',
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    
  },
  
  imageContainer:{
    position: 'absolute',
    width:'100%',
    height:'100%',
    alignItems: 'center'
},


imageControl:{
  width: 110,
  height: 110,
  paddingVertical: 100
},

Sozlesme:{
  backgroundColor: '#fff',
  width: '75%',
  borderRadius: 15,
  elevation: 4,
  shadowColor: 'black',
  shadowOpacity: .2,
  shadowRadius:3,
  marginBottom: '40%'
}


});