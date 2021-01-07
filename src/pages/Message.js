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
    return (
      <View style={styles.container}>
      
        <ImageBackground
          source={require('../images/koza-home-photo.png')}
          style={styles.image}>
          <View style={styles.HeaderArea}>
            <Image source={require('../images/logo-koza.png')} style={styles.Logo} />
          </View>
          <View style={styles.MessageArea}>
          <ScrollView>
          <TouchableOpacity style={styles.MessageBox}>
            <View style={{flex:1}}>
              <Image source={require('../images/logo-koza.png')} style={styles.Logo2}/>
            </View>
            <View style={{flex:2, marginLeft:'10px'}}>
            
              <Text> </Text>
              <Text style={{color:'#80391e'}}>Elifnur Bayrak</Text>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
              <Text style={{color:'#b97455', fontSize:'11px'}}>
              Son Görüşme Tarihi: 22/10/2020 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.MessageBox2}>
            <View style={{flex:1}}>
              <Image source={require('../images/logo-koza.png')} style={styles.Logo2}/>
            </View>
            <View style={{flex:2, marginLeft:'10px'}}>
              <Text> </Text>
              <Text style={{color:'#80391e'}}>Yusuf Tuner</Text>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
              <Text style={{color:'#b97455', fontSize:'11px'}}>
              Son Görüşme Tarihi: 12/10/2020 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.MessageBox}>
            <View style={{flex:1}}>
              <Image source={require('../images/logo-koza.png')} style={styles.Logo2}/>
            </View>
            <View style={{flex:2, marginLeft:'10px'}}>
              <Text> </Text>
              <Text style={{color:'#80391e'}}>Mertcan Krakaya</Text>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
              <Text style={{color:'#b97455', fontSize:'11px'}}>
              Son Görüşme Tarihi: 12/09/2020 </Text>
            </View>
          </TouchableOpacity>
          </ScrollView>
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
    MessageArea: {
    flex: 8,
    
  },
  Logo: {
    width: 150,
    height: 150,
  },
    Logo2: {
    width: 100,
    height: 100,
  },
  DescriptionArea: {
    flex: 1,
    
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
    
  },

  MessageBox: {
    borderRadius: 15,
    backgroundColor: '#FBB663',
    margin: '5%',
    padding: '2%',
    flexDirection: 'row',
  },
    MessageBox2: {
    borderRadius: 15,
    backgroundColor: '#2DE1BD',
    margin: '5%',
    padding: '2%',
    flexDirection: 'row',
  }
 
});
