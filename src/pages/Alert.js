import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, TouchableOpacity,Text,Alert} from 'react-native';
import CButton from '../components/button';

import AwesomeAlert from 'react-native-awesome-alerts';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  }
 
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const {showAlert} = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.imageContainer} source={require('../images/koza-home-photo.png')}/>
        <TouchableOpacity onPress={() => {
          this.showAlert();
        }}>
          <View style={styles.button}>
            <Text style={styles.text}>ONAYLA</Text>
          </View>
            
        </TouchableOpacity>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          message="Randevunuzu iptal etmek istiyormusunuz? "
          messageStyle={{color: 'white', textAlign: 'center'}}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          showCancelButton={true}
          contentContainerStyle={{backgroundColor: '#2DE1BD'}}
          cancelText="HAYIR"
          confirmText="EVET"
          actionContainerStyle={{flexDirection: 'row-reverse', justifyContent: 'space-around'}}
          cancelButtonStyle={{borderWidth: 2, borderColor: 'orange',borderRadius: 10,}}
          confirmButtonStyle={{borderWidth: 2, borderColor: 'orange',borderRadius: 10,}}
          cancelButtonTextStyle={{fontSize:18,paddingHorizontal: '5%'}}
          confirmButtonTextStyle={{fontSize:18,paddingHorizontal: '5%'}}
          confirmButtonColor="#2DE1BD"
          cancelButtonColor="#2DE1BD"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
         
         
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageContainer:{
    position: 'absolute',
    width:'100%',
    height:'100%',
    alignItems: 'center'
},
button: {
  margin: 10,
  paddingHorizontal: 20,
  paddingVertical: 10,
  backgroundColor: "#2DE1BD",
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#FBB663',
  shadowColor:'black',
  shadowOpacity:.2,
  shadowRadius:3,
   
  shadowOffset:{
    width:0,
    height:2,
  },

  elevation:3,
},
text: {
  color: '#fff',
  fontSize: 15,
  fontWeight: '600'
}
 
});
