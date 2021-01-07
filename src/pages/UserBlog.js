
import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import CButton from '../components/button';



export default class App extends Component {
 

  render() {
    
    return (
      <View style={styles.container}>
        <Image style={styles.imageContainer} source={require('../images/koza-home-photo.png')}/>
        <View style={styles.blog}>
          <Text style={{textAlign: 'center'}}>BLOG</Text>

          <View>
            <View style={{ flexDirection:'column' ,justifyContent:'center'}}>
              <Image style={styles.imageBar} />
              </View>

              <View style={styles.description}>
                <Text style={{marginBottom: '1%'}} > Ad Soyad</Text>
                <Text style={{marginBottom: '2%'}}> Tarifin Adı</Text>
              </View>
          </View>
          
            <ScrollView style={styles.tarifBar}>
              <Text> Tarifin Açıklaması</Text>
              <View>
              </View>
            </ScrollView>
            
        </View>
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
  blog:{
    backgroundColor: '#fff',
    width: '70%',
    height: '80%',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    shadowOpacity:.2,
    shadowRadius:5,
    elevation:5,
    marginTop:'20%'
  },
  imageBar:{
    width: 240,
    height: 240,
    backgroundColor: '#e1e2e8',
    borderRadius: 15,
    marginBottom: '3%'
   
  },
  description:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  tarifBar:{
    alignItems: 'center',
    width: '85%',
  }
  

});
