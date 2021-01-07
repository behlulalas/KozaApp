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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, ListItem, Button } from 'react-native-elements';
import CButton from './../components/button';
import InputText from '../components/InputText';
export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ImageBackground
              source={require('../images/koza-home-photo.png')}
              style={styles.image}>
              <View style={styles.HeaderArea}>
                <Image
                  source={require('../images/logo-koza.png')}
                  style={styles.Logo}
                />
              </View>

              <ScrollView>
                <Card containerStyle={{ borderRadius: 20 }}>
                  <Card.Title style={styles.headercard}>
                    Kayıtlı Kartlarınız:{' '}
                  </Card.Title>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                    }}>
                    <View style={styles.circle}>
                      <Image
                        source={require('./../images/card2.png')}
                        style={styles.cardimage}
                      />
                      <View style={styles.square}>
                        <Text style={styles.CardText}>
                          Kayıtlı Başka{'\n'}Kartınız Yok
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.AboutCard}>Yeni Kart Bilgileri :</Text>
                    <View style={styles.squareAbout}>
                      <TextInput
                        placeholder="Kart Sahibinin Adı Soyadı"
                        returnKeyType={'next'}
                        onSubmitEditing={() => {
                          this.secondTextInput.focus();
                        }}
                        blurOnSubmit={false}
                        style={styles.inputContain}
                        placeholderTextColor="white"
                      />

                      <TextInput
                        ref={(input) => {
                          this.secondTextInput = input;
                        }}
                        returnKeyType={'next'}
                        onSubmitEditing={() => {
                          this.threeinput.focus();
                        }}
                        placeholder="Kart Numarası"
                        style={styles.inputContain}
                        placeholderTextColor="white"
                      />
                      <TextInput
                        ref={(input) => {
                          this.threeinput = input;
                        }}
                        onSubmitEditing={() => {
                          this.fourinput.focus();
                        }}
                        placeholder="Geçerlilik Tarihi"
                        style={styles.inputContain}
                        placeholderTextColor="white"
                      />
                      <TextInput
                        ref={(input) => {
                          this.fourinput = input;
                        }}
                        placeholder="CVV"
                        style={styles.inputContain}
                        placeholderTextColor="white"
                      />
                      <Text style={styles.AboutPay}>
                        Geçmiş Ödeme Bilgileri:
                      </Text>
                      <Text style={styles.AboutPay2}>
                        Geçmiş ödeme bilginiz bulunmamaktadır.
                      </Text>
                      <CButton
                        text="ONAYLA"
                        onPress={() => navigate('Choose')}
                      />
                    </View>
                  </View>
                </Card>
              </ScrollView>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '150%',
  },
  circle: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  squareAbout: {
    width: '%70',
    padding: 10,
  },
  square: {
    width: 150,
    height: 100,
    borderColor: '#2DE1BD',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  AboutCard: {
    color: '#2DE1BD',
    fontSize: 22,
    fontWeight: 'bold',
  },
  AboutPay: {
    color: '#2DE1BD',
    fontSize: 16,
    fontWeight: 'bold',
  },
  AboutPay2: {
    color: '#2DE1BD',
    fontSize: 16,
  },
  CardText: {
    color: '#2DE1BD',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headercard: {
    textAlign: 'flex-start',
    color: '#2DE1BD',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
  inputContain: {
    height: 50,
    paddingHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#a3ffeb',
    fontSize: 20,
    marginVertical: 2,
    borderWidth: 0.5,
    borderColor: '#87fff7',
  },
  cardimage: {
    width: 150,
    height: 100,
  },
});
