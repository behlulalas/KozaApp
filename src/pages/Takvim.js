
import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity} from 'react-native';
import CButton from '../components/button';



export default class Takvim extends Component {
 

  render() {
    
    return (
      <View style={styles.container}>
        <Image style={styles.imageContainer} source={require('../images/koza-home-photo.png')}/>
        <View style={styles.takvimBackground}>
          <View style={styles.clockBarRow}>
          <View style={styles.clockBar}>
            <TouchableOpacity style={{width: '100%'}}>
              <View style={styles.bilgiDanisan}>
                <Text style={styles.styleText}>08:00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.clockBar}>
            <TouchableOpacity style={{width: '100%'}}>
              <View style={styles.bilgiDanisan}>
                <Text style={styles.styleText}>09:00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.clockBar}>
            <TouchableOpacity style={{width: '100%'}}>
              <View style={styles.bilgiDanisan}>
                <Text style={styles.styleText}>10:00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.clockBar}>
            <TouchableOpacity style={{width: '100%'}}>
              <View style={styles.bilgiDanisan}>
                <Text style={styles.styleText}>11:00</Text>
              </View>
            </TouchableOpacity>
          </View>
                          
          </View>

          <View style={styles.clockBarRow}>
          <View style={styles.clockBar}>
            <TouchableOpacity style={{width: '100%'}}>
              <View style={styles.bilgiDanisan}>
                <Text style={styles.styleText}>08:00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.clockBar}>
            <TouchableOpacity style={{width: '100%'}}>
              <View style={styles.bilgiDanisan}>
                <Text style={styles.styleText}>09:00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.clockBar}>
            <TouchableOpacity style={{width: '100%'}}>
              <View style={styles.bilgiDanisan}>
                <Text style={styles.styleText}>10:00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.clockBar}>
            <TouchableOpacity style={{width: '100%'}}>
              <View style={styles.bilgiDanisan}>
                <Text style={styles.styleText}>11:00</Text>
              </View>
            </TouchableOpacity>
          </View>
                          
          </View>

          <View style={styles.clockBarRow}>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>08:00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>09:00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>10:00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>11:00</Text>
                </View>
              </TouchableOpacity>
            </View>               
          </View>

        </View>

        <View style={{width: '75%'}}>
          <CButton
          text="ONAYLA"
          onPress={() => alert('Koza Ailesine selamlar !')}
          />
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
    flexDirection: 'column'
  },
  imageContainer:{
    position: 'absolute',
    width:'100%',
    height:'100%',
    alignItems: 'center'
  },
  takvimBackground:{
    backgroundColor: '#fff',
    width: '80%',
    height: '30%',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    shadowOpacity:.2,
    shadowRadius:5,
    elevation:5,
  },
  styleText:{
    padding: '5%',
    fontSize: 11,
    fontWeight: 500,
    color: 'white',
    fontStyle: 'normal',
  },
  bilgiDanisan:{
    backgroundColor: '#1DE9B6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: '2%',
    width: '100%'
  },
  clockBar:{
    width: '25%',
    marginRight: '2%'
  },
  clockBarRow:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%'
  }

});
