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
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
export default class Home extends Component {
constructor(){
super()
this.state={
  isVisible:false,
  isVisible2:false,
 choosendate:'Tarih: __/__/____',
 choosentime:'Saat: __:__'
}

}
handlePicker=(datetime)=>{
  this.setState({
    isVisible:false,
   choosendate:'Tarih: '+moment(datetime).format('DD.MM.YYYY'),
  })
}
handletPicker=(datetime2)=>{
  this.setState({
    isVisible2:false,
   choosentime:'Saat: '+moment(datetime2).format('HH:mm')
  })
}
showPicker=()=>{
  this.setState({
    isVisible:true,
   
  })
}
hidePicker=()=>{
  this.setState({
    isVisible:false,
   
  })
}

showtPicker=()=>{
  this.setState({
    isVisible2:true,
   
  })
}
hidetPicker=()=>{
  this.setState({
    isVisible2:false,
   
  })
}


  render() {
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            source={require('../images/koza-home-photo.png')}
            style={styles.image}>
            <View style={styles.HeaderArea}>
              <Image
                source={require('../images/logo-koza.png')}
                style={styles.Logo}
              />
            </View>
            <Card containerStyle={{ borderRadius: 20 }}>
              <Card.Title>
                
                
              </Card.Title>
               <Text style={styles.cardtitle}>
                  {this.state.choosendate} 
                </Text>
                 <Text style={styles.cardtitle}>
                  {this.state.choosentime} 
                </Text>
              <Card.Divider />
            <CButton
                text="Tarih Seç"
                onPress={this.showPicker}
              />
              <CButton
                text="Saat Seç"
                onPress={this.showtPicker}
              />
              <DateTimePicker
                isVisible={this.state.isVisible}
                headerTextIOS="Tarih Seç"
                confirmTextIOS="Onayla"
                cancelTextIOS="İptal"
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
                locale="tr-TR"
              />
              <DateTimePicker
               headerTextIOS="Saat Seç"
                confirmTextIOS="Onayla"
                cancelTextIOS="İptal"
                isVisible={this.state.isVisible2}
                onConfirm={this.handletPicker}
                onCancel={this.hidetPicker}
                mode='time'
              />
            </Card>
            <View style={styles.DescriptionArea}>
              <CButton
                text="Onayla"
                onPress={() => alert('Koza Ailesine selamlar !')}
              />
            </View>
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
  DescriptionArea: {
    flex: 3,
    paddingLeft: 10,
  },
  cardtitle: {
    marginBottom: 10,
    color: '#2DE1BD',
    fontFamily: 'Trebuchet MS Family',
    fontSize: 20,
    textAlign: 'center',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '150%',
  },
});
