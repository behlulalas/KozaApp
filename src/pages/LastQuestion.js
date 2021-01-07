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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, ListItem, Button } from 'react-native-elements';
import CButton from './../components/button';
export default class Home extends Component {
  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../images/koza-home-photo.png')}
          style={styles.image}>
          <View style={styles.HeaderArea}>
            <Image source={require('../images/logo-koza.png')} style={styles.Logo} />
          </View>
          <Card containerStyle={{ borderRadius: 20 }}>
            <Card.Title>
              <Text style={styles.cardtitle}>
                Online danışmanlık hizmetine hoşgeldin! Hizmet alacağın
                danışmanları görmeden önce seni biraz tanıyalım.
              </Text>
            </Card.Title>
            <Card.Divider />
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Icon
                  raised
                  name="arrow-undo"
                  size={34}
                  color="#13997e"
                  style={{paddingVertical:30,paddingLeft:5,}}
                  onPress={() => this.props.navigation.goBack()}
                />
              <Text style={styles.textWithShadow2}>6</Text>
              <Text style={styles.textWithShadow2}>7</Text>
              <Text style={styles.textWithShadow2}>8</Text>
              <Text style={styles.textWithShadow2}>9</Text>
              <Text style={styles.textWithShadow}>10</Text>
             
                
        
            </View>

            <Text style={styles.cardtitle2}>
              Diyetisyen desteği aldınız mı ya da alıyor musunuz?
            </Text>

            <CButton
              text="Evet, diyetisyen desteği aldım/alıyorum."
              onPress={() => navigate('Advisors')}
            />
            <CButton
              text="Hayır, diyetisyen desteği almadım/almıyorum."
              onPress={() => navigate('Advisors')}
            />
            <CButton
              text="Devam Et"
              onPress={() => navigate('Advisors')}
            />
          </Card>
        </ImageBackground>
        </ScrollView>
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
    width: 150,
    height: 150,
  },
 
  cardtitle: {
    marginBottom: 10,
    color: '#2DE1BD',
    fontFamily: 'Trebuchet MS Family',
    fontSize: 20,
    textAlign: 'center',
  },
  cardtitle2: {
    marginBottom: 10,
    color: '#2DE1BD',
    fontFamily: 'Trebuchet MS Family',
    fontSize: 24,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '150%',
  },
  textWithShadow: {
    textShadowColor: 'rgba(1, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    fontSize: 38,
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 5,
    opacity: 0.75,
  },
  textWithShadow2: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    paddingHorizontal: 5,
    fontSize: 34,
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 30,
  },
});
