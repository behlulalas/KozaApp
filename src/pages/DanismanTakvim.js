
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, ScrollView,TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import AwesomeAlert from 'react-native-awesome-alerts';
import Moment from 'moment';
Moment.locale('tr');
import CButton from '../components/button';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      showAlert: false
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: Moment(date).format('D-MMMM')

    });
  }
 
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };


  render() {
    const {showAlert} = this.state;
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const result = selectedStartDate ? "tarihi için uygun olduğunuz saatleri işaretleyiniz." : "";
    return (
      <View style={styles.container}>
        <Image style={styles.imageContainer} source={require('../images/koza-home-photo.png')}/>
        

        <View style={styles.scrollHeader}>
          <View style={styles.danismanLogin}>
            <CalendarPicker style={styles.calendar}
            months={['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık',]}
            weekdays={['P','Pt','S','Çrş ','Prş','C','Ct',]}
            textStyle={{
              color: '#000000',
              fontSize: 12
            }}
            customDatesStylesPriority={{width: 50}}
            onDateChange={this.onDateChange}
            />
            <View style={{flexDirection: 'row',justifyContent:'center'}}>
              <Text style={{fontSize: 16,marginTop:'1%',textAlign: 'center',color: '#40edb1', textDecorationLine: 'underline'}}>{ startDate }{' '}</Text>
              <Text style={{fontSize: 16,marginTop:'1%',textAlign: 'center',color: '#40edb1', width: '60%'}}>{result}</Text>
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
                  <Text style={styles.styleText}>12:00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>13:00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>14:00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>15:00</Text>
                </View>
              </TouchableOpacity>
            </View>               
          </View>

          <View style={styles.clockBarRow}>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>16:00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>17:00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>18:00</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.clockBar}>
              <TouchableOpacity style={{width: '100%'}}>
                <View style={styles.bilgiDanisan}>
                  <Text style={styles.styleText}>19:00</Text>
                </View>
              </TouchableOpacity>
            </View>               
          </View>
            
          </View>

        </View>
        <View style={{width: '75%'}}>
          <CButton
          text="ONAYLA"
          onPress={() => {this.showAlert(); }}
          />
        </View>

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          message="Randevunuzu iptal etmek istiyormusunuz? "
          messageStyle={{color: 'white', textAlign: 'center'}}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          showCancelButton={true}
          contentContainerStyle={{backgroundColor: '#2DE1BD'}}
          cancelText="HAYIR"
          confirmText="EVET"
          actionContainerStyle={{flexDirection: 'row-reverse', justifyContent: 'space-around'}}
          cancelButtonStyle={{borderWidth: 2, borderColor: 'orange',borderRadius: 10,}}
          confirmButtonStyle={{borderWidth: 2, borderColor: 'orange',borderRadius: 10,}}
          cancelButtonTextStyle={{fontSize:18,paddingHorizontal: '5%'}}
          confirmButtonTextStyle={{fontSize:18,paddingHorizontal: '5%'}}
          confirmButtonColor="#2DE1BD"
          cancelButtonColor="#2DE1BD"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
                
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
danismanLogin:{
  
  marginHorizontal: '3.5%',
  backgroundColor: '#fff',
  borderRadius:15,
  elevation: 4,
  flexDirection: 'column',
  alignItems: 'center',

  shadowColor: 'black',
  shadowOpacity: .2,
  shadowRadius:3,
  height: '100%'
},

scrollHeader:{
  width: '100%',
  height: '71%',
  flexDirection: 'column',
  justifyContent: 'center',

},
styleText:{
  padding: '5%',
  fontSize: 13,
  fontWeight: '500',
  color: 'white',
  fontStyle: 'normal',
},
bilgiDanisan:{
  backgroundColor: '#1DE9B6',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  marginTop: '3%',
  width: '100%'
},
clockBar:{
  width: '25%',
  marginRight: '2%',
},
clockBarRow:{
  width: '90%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1%'
}


});
