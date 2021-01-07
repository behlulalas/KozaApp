
import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button} from 'react-native';
import Cbutton from '../components/button'

export default class Register extends Component {
  render() {
    const {navigate} =this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.imageContainer} source={require('../images/koza-home-photo.png')}/>
        <View style={{width: '30%', height: '20%', marginTop: '15%',marginBottom: '47%'}}>
          <Image style={styles.imageControl} source={require('../images/logo-koza.png')}/>
        </View>
        <View style={{ justifyContent:'center'}}>
          <Text style={styles.textStyle}> Lutfen Danisman/Kullanici Girisini Seciniz.</Text>
        </View>
        <View style={styles.iconBarStyle}>
          <TouchableOpacity style={{width:130 ,height: 120, marginRight: '10%'}} onPress={()=>navigate('DanismanLogin')}>
            <Image style={styles.imageSize} source={require('../images/icon-danisman.jpeg')} />
            <Text style={styles.textimage}>DANISMAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:130 ,height: 120,}}   onPress={()=>navigate('BottomTabNavigator2')}>
            <Image style={styles.imageSize} source={require('../images/icon-user.jpeg')} />
            <Text style={styles.textimage}>KULLANICI</Text>
          </TouchableOpacity>
        </View>              
      </View>
    );
  }
}
//nereye yonlenıcektı
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
  flexDirection: 'column',
},
imageContainer:{
  position: 'absolute',
  width:'100%',
  height:'100%',
  alignItems: 'center'
},
imageControl:{
 width: '100%',
 height: '100%',
},
textStyle:{
  fontSize:18,
  color: '#38cf9a',
  fontStyle: 'normal',
  fontWeight: '650',
  marginBottom: '10%'
},
iconBarStyle:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
},
textimage:{
  fontSize: 22,
  textAlign: 'center',
  textDecorationLine: 'underline',
  fontWeight: 500,
  color: '#40edb1'
},
imageSize:{
  width: '100%',
  height: '100%'
}
  
});