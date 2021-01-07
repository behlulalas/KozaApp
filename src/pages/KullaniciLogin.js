import React, {Component,useState} from 'react';
import { CheckBox,StyleSheet, View, Image, ScrollView,Text,TouchableOpacity,TextInput,} from 'react-native';
import InputText from  '../components/InputText';
import CButton from '../components/button';


export default class KullaniciLogin extends Component{
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
    return (
      <View style={styles.container}>
            <Image style={styles.imageContainer} source={require('../images/koza-home-photo.png')}/>
            <View>
                <Image style={styles.imageControl} source={require('../images/logo-koza.png')}/>
            </View>
            
        <ScrollView>
          <View style={styles.danismanLogin}>
            <InputText placeholder=" İsim"/>
            <InputText placeholder=" Soyisim"/>
            <InputText placeholder=" E-Posta"/>
            <InputText
            secureTextEntry={true}
            placeholder=" Parola" />
            <InputText 
            secureTextEntry={true}
            placeholder=" Parola Doğrulama"/>
        
          <View style={styles.checkContain}>
            <CheckBox 
            value={this.state.result}
            onValueChange={result=>this.setState.result}         
            />
            <Text style={{fontSize: 10, color:'#34c2c7',marginTop: 10}}> Üyelik Sözleşmesi ve Gizlilik Politikasını Kabul Ediyorum.</Text>
          </View>
          
            <CButton
              text="Kayıt Ol"
              onPress={() => alert('Koza Ailesine selamlar !')}
            />
          </View>
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

danismanLogin:{
  marginHorizontal: 40,
  marginVertical: 40,
  backgroundColor: '#fff',
  width: '75%',
  padding: 20,
  borderRadius:5,
  elevation: 4,

  shadowColor: 'black',
  shadowOpacity: .2,
  shadowRadius:3
},
imageControl:{
  width: 110,
  height: 110,
  paddingVertical: 100
},
checkContain:{
  flexDirection: 'row',
  justifyContent:'center'
},


});