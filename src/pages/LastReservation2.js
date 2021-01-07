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
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, ListItem, Button } from 'react-native-elements';
import CButton from './../components/button';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../images/arkaplansmall.png')}
          style={styles.image}>
          <View style={styles.HeaderArea}>
            <Image source={require('../images/logo-koza.png')} style={styles.Logo} />
          </View>
          <Text style={{marginLeft: '5%',marginBottom: '1%',fontSize:15,fontWeight: '500',color: 'white'}} >Yaklaşan Randevunuz</Text>
          <ScrollView>
          <View style={{flexDirection: 'column',justifyContent: 'flex-start'}}>
          
          <Card containerStyle={{ borderRadius: 20 }}>
              <View style={{flexDirection: 'row',justifyContent: 'flex-end',marginTop: '-6%'}}>
                <CButton text="İPTAL" size='small' onPress={() => null} />
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Image
                    source={require('../images/logo-koza.png')}
                    style={styles.Logo2}
                  />
                </View>

                <View style={styles.cardContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      
                    }}>
                    <Text style={styles.nameText}>Esra Akar</Text>
                    
                  </View>

                  <Text>15 Eylül : 14:00</Text>
                  <Card.Divider />
                  <View style={{ flexDirection: 'row' }}>
                    <Icon
                      raised
                      name="star"
                      size={16}
                      color="#2DE1BD"
                      style={styles.stars}
                    />
                    <Icon
                      raised
                      name="star"
                      size={16}
                      color="#2DE1BD"
                      style={styles.stars}
                    />
                    <Icon
                      raised
                      name="star"
                      size={16}
                      color="#2DE1BD"
                      style={styles.stars}
                    />
                    <Icon
                      raised
                      name="star"
                      size={16}
                      color="#2DE1BD"
                      style={styles.stars}
                    />
                    <Icon
                      raised
                      name="star-outline"
                      size={16}
                      color="#2DE1BD"
                      style={styles.stars}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.countText}>Ücret: </Text>
                    <Text style={styles.countText2}>210 TL</Text>
                  </View>
                </View>
                
              </View>
            </Card>
          </View>
          <View style={styles.bottomArea}>
              <Text style={styles.informate}>
                * Randevüyü iptal etmeniz durumunda {'\n'}ödemenizden %5 kesinti
                yapılacaktır.{' '}
              </Text>
              <Text style={styles.headercard}>
               Geçmiş Randevularım:
              </Text>
               <View style={styles.square}>
                  <Text style={styles.squareText}>Randevu Günü: __/__/___</Text>
                </View>
                <Text style={styles.headercard}>
               İptal Edilen Randevularım:
              </Text>
               <View style={styles.square}>
                  <Text style={styles.squareText}>Randevu Günü: __/__/___</Text>
                </View>
            </View>
            
            
          </ScrollView>
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
  },
  Logo: {
    width: 180,
    height: 180,
  },
  Logo2: {
    width: 130,
    height: 130,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '150%',
  },
  cardContainer: {
    padding: 10,
    marginTop: '-5%'    
  },
  nameText: {
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c6c6c6',
  },
  stars: {
    paddingVertical: 20,
    paddingLeft: 5,
  },
  square: {
    backgroundColor: '#2DE1BD',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal:20,
  },
  squareText:{
    color:'white',
    fontSize:16,
  },
  headercard: {
    textAlign: 'flex-start',
    color: '#2DE1BD',
    fontSize: 20,
    fontWeight: 'bold',
    padding:10
  },
  bottomArea:{
    width:'90%',
    paddingHorizontal:'5%'
  },
  informate: {
    color: '#2DE1BD',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
  },
  
  
});
