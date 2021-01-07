
import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CButton from './../components/button';
import InputText from  '../components/InputText';

export default class Login extends Component {
  static navigationOptions={
   title:'Login',
 };
  state={
    durum: true,
  };
  
  degistir = () =>{
    if(this.state.durum){
      this.setState({
        durum: false,
      });
    }
    else
      {this.setState({
        durum: true,
      });
    }
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

          
            <InputText placeholder="E-posta"/>
          
          <View style={styles.kutu }>
          {this.state.durum ? (
            <TextInput style={styles.parola}
              placeholder='Parola'
              secureTextEntry={true}
              placeholderTextColor='white'
            ></TextInput>
          ) : (
            <TextInput style={styles.parola}
              placeholder='Parola'
              secureTextEntry={false}
              placeholderTextColor='white'
            ></TextInput>
          )}

            <TouchableOpacity
            onPress ={()=>this.degistir()}
            
            >
             <Icon
                name={this.state.durum ? "ios-eye" : 'ios-eye-off'}
                size={20}
                color="white"
                style={styles.gizle} />
            </TouchableOpacity>

          </View>
          <CButton
              text="GİRİŞ"
              onPress={() => navigate('BottomTabNavigator')}
            />
        </View>

        <View style={styles.linkler}>
          <TouchableOpacity style={styles.parolalink} onPress={()=>navigate('SendEposta')}>
            <Text style={styles.link}>Parolamı Unuttum  </Text>
          </TouchableOpacity>
          <View style={styles.kayit}>
            <Text style={styles.yazi}>Hesabınız yok mu? </Text>           
            <TouchableOpacity 
              onPress={()=>this.props.navigation.navigate('Register')}>
              <Text style={styles.link}>Kayıt Olun</Text>
            </TouchableOpacity>
          </View>
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
    marginTop:"40%",
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

  linkler:{
    flex:1,
    alignItems: 'center',
    
  },

  kayit:{
    flexDirection: 'row',
    paddingTop: 5,
  },

  link:{
    borderBottomWidth: 1,
    borderBottomColor: '#2DE1BD',
    color: '#2DE1BD',
    fontSize: 15,
    fontWeight: "bold"
  },

  yazi:{
    color: '#2DE1BD',
    fontSize: 15,
    fontWeight: "bold"
  },

  parolalink:{
    paddingBottom: 5,
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
});
