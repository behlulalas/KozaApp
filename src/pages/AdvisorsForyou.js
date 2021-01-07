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
          source={require('../images/koza-home-photo.png')}
          style={styles.image}>
          <View style={styles.HeaderArea}>
            <Image source={require('../images/logo-koza.png')} style={styles.Logo} />
          </View>
          <ScrollView>
         <Card containerStyle={{ borderRadius: 20 }}>
            <Card.Image style={{width:350,height:270}} source={require('../images/map.png')}>
              
              
            </Card.Image>
            </Card>
            <Card containerStyle={{ borderRadius: 20,backgroundColor:'#FBB663' }}>
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
                      justifyContent: 'space-around',
                    }}>
                    <Text style={styles.nameText}>Esra Akar</Text>
                  </View>

                  <Text>Adres Bilgileri</Text>
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
            <CButton
                text="Onayla"
                onPress={() => alert('Koza Ailesine selamlar !')}
              />
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
    width: 100,
    height: 100,
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
  nameText: {
    paddingBottom: 5,
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
    color: 'white',
  },
  stars: {
    paddingVertical: 20,
    paddingLeft: 5,
  },
  
});
