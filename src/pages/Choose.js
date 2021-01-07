import React, {Component} from 'react';
import {
Platform,
StyleSheet,
Text,
View,
Image,
ImageBackground,
SafeAreaView,
ScrollView} from 'react-native';
import CButton from './../components/button';
export default class Home extends Component {
  
  render() {
    const {navigate}=this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../images/koza-home-photo.png')} style={styles.image}>
         <View style={styles.HeaderArea}>
        <Image source={require('../images/logo-koza.png')} style={styles.Logo} />  
        </View>
        <View style={styles.DescriptionArea}>
        </View>
        <View style={styles.fixToText}>
        <CButton 
        text="Online Danışmanlık"
        size="large"
        onPress={()=>navigate('Question')}
          />
           </View>
           <View style={styles.fixToText}>
        <CButton 
        text="Yüz yüze danışmanlık"
        size="large"
        onPress={()=>navigate("AdvisorsForyou")}
          />
     </View>
     
      </ImageBackground>
      
      </SafeAreaView>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderArea: {
    alignItems:'center',
    paddingTop:30,
  },
  Logo: {
    width:350,
    height:350,
  },
  DescriptionArea: {
    flex:3,
    paddingLeft:60,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingBottom:30,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height:'150%',
  },
});
