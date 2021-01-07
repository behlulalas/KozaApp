import React, {Component,useState} from 'react';
import { CheckBox,StyleSheet, View, Image, ScrollView,Text,TouchableOpacity,TextInput,ImageBackground} from 'react-native';
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
        <ImageBackground style={styles.imageContainer} source={require('../images/koza-home-photo.png')}/>
        <View style={{width: '40%', height: '10%', marginTop:'2%',flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.imageControl} source={require('../images/logo-koza.png')}/>
        </View>
            
        <ScrollView>
          
          <View style={styles.danismanLogin}>
            <View style={{ width: '100%',height: '25%', marginBottom: '5%',flexDirection: 'column',alignItems: 'center'}}>
              <TouchableOpacity style={{ width: '50%',height: '100%',borderRadius: '100%',backgroundColor: '#2DE1BD'}}></TouchableOpacity>
            </View>
            <InputText placeholder=" İsim"/>
            <InputText placeholder=" Soyisim"/>
            <InputText placeholder=" E-Posta"/>
            <InputText
            secureTextEntry={true}
            placeholder=" Parola" />
            <InputText 
            secureTextEntry={true}
            placeholder=" Parola Doğrulama"/>
        
          <TouchableOpacity style={styles.sertifica}>
            <View style={styles.checkContain}>
              <Text style={{fontSize: 12, color:'#34c2c7', marginTop: 5}}>Sertifika ve Yeterlilik Belgelerinizi Yukleyiniz.
              </Text>
              <Image source={require('../images/cloud-icon.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.checkContain}>
            <CheckBox 
            value={this.state.result}
            onValueChange={result=>this.setState.result}         
            />
            <Text style={{fontSize: 10, color:'#34c2c7',marginTop: 10}}> Üyelik Sözleşmesi ve Gizlilik Politikasını Kabul Ediyorum.</Text>
          </View>
          
            <CButton
              text="Kayıt Ol"
              onPress={()=>navigate('Login')}
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
 width: '100%',
 height: '100%',
},

sertifica:{
  paddingVertical: 5,
  paddingHorizontal: '20%',
  backgroundColor:'#a3ffeb',
  borderRadius: 20,
  borderWidth:1.5,
  borderColor: '#defffa',
},
checkContain:{
  flexDirection: 'row',
  justifyContent:'center'
},


});