import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,SafeAreaView} from 'react-native';
import CButton from '../components/button';


export default class BlogDetay extends Component {
  render(){
    const {navigate} =this.props.navigation;
    return(
      <SafeAreaView style={styles.container}>
        <Image style={styles.imageContainer} source={require('../images/koza-home-photo.png')}/>
        <ScrollView style={{marginTop: '20%'}}>
          <View style={styles.BlogrowOne}>
        
          <View style={styles.blogBar1}>
            <View style={styles.imageBoyut}>
                <Image style={styles.imageBar} />
            </View>
            <View style={styles.Aciklama}>
              <View style={styles.description}>
                <Text style={{marginBottom: '1%'}} > Ad Soyad</Text>
                <Text style={{marginBottom: '2%'}}> Tarifin Adı</Text>
                <Text style={{marginBottom: '2%', fontSize: 8, color: 'grey'}}> Tarifin Yayınlanma Tarihi
                </Text>
              </View>
            </View>

           <CButton
            text="GÖRÜNTÜLE"
            onPress={()=>navigate('Blog')}
            />
          </View>

          <View style={styles.blogBar2}>
          <View style={styles.imageBoyut}>
                <Image style={styles.imageBar} />
            </View>
            <View style={styles.Aciklama}>
             
              <View style={styles.description}>
                <Text style={{marginBottom: '1%'}} > Ad Soyad</Text>
                <Text style={{marginBottom: '2%'}}> Tarifin Adı</Text>
                <Text style={{marginBottom: '2%', fontSize: 8, color: 'grey'}}> Tarifin Yayınlanma Tarihi
                </Text>
              </View>
            </View>

           <CButton
            text="GÖRÜNTÜLE"
            onPress={()=>navigate('Blog')}
            />
          </View>
          
        </View>

          
        <View style={styles.BlogrowOne2}>
          <View style={styles.blogBar3}>
          <View style={styles.imageBoyut}>
                <Image style={styles.imageBar} />
            </View>
            <View style={styles.Aciklama}>
              
              <View style={styles.description}>
                <Text style={{marginBottom: '1%'}} > Ad Soyad</Text>
                <Text style={{marginBottom: '2%'}}> Tarifin Adı</Text>
                <Text style={{marginBottom: '2%', fontSize: 8, color: 'grey'}}> Tarifin Yayınlanma Tarihi
                </Text>
              </View>
            </View>

           <CButton
            text="GÖRÜNTÜLE"
            onPress={()=>navigate('Blog')}
            />
          </View>

          <View style={styles.blogBar4}>
          <View style={styles.imageBoyut}>
                <Image style={styles.imageBar} />
            </View>
            <View style={styles.Aciklama}>

              <View style={styles.description}>
                <Text style={{marginBottom: '1%'}} > Ad Soyad</Text>
                <Text style={{marginBottom: '2%'}}> Tarifin Adı</Text>
                <Text style={{marginBottom: '2%', fontSize: 8, color: 'grey'}}> Tarifin Yayınlanma Tarihi
                </Text>
              </View>
            </View>

           <CButton
            text="GÖRÜNTÜLE"
            onPress={()=>navigate('Blog')}
            />
          </View>
        </View>

        <View style={styles.BlogrowOne3}>
          <View style={styles.blogBar3}>
          <View style={styles.imageBoyut}>
                <Image style={styles.imageBar} />
            </View>
            <View style={styles.Aciklama}>

              <View style={styles.description}>
                <Text style={{marginBottom: '1%'}} > Ad Soyad</Text>
                <Text style={{marginBottom: '2%'}}> Tarifin Adı</Text>
                <Text style={{marginBottom: '2%', fontSize: 8, color: 'grey'}}> Tarifin Yayınlanma Tarihi
                </Text>
              </View>
            </View>

           <CButton
            text="GÖRÜNTÜLE"
            onPress={()=>navigate('Blog')}
            />
          </View>

          <View style={styles.blogBar4}>
          <View style={styles.imageBoyut}>
                <Image style={styles.imageBar} />
            </View>
            <View style={styles.Aciklama}>

              <View style={styles.description}>
                <Text style={{marginBottom: '1%'}} > Ad Soyad</Text>
                <Text style={{marginBottom: '2%'}}> Tarifin Adı</Text>
                <Text style={{marginBottom: '2%', fontSize: 8, color: 'grey'}}> Tarifin Yayınlanma Tarihi
                </Text>
              </View>
            </View>

           <CButton
            text="GÖRÜNTÜLE"
            onPress={()=>navigate('Blog')}
            />
          </View>
        </View>
      </ScrollView>
        
      </SafeAreaView>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer:{
    position: 'absolute',
    width:'100%',
    height:'100%',
    alignItems: 'center',
   
  },
  imageBar:{
    width: '100%',
    height: '100%',
    backgroundColor: '#e1e2e8',
    borderRadius: 15,
    
  },

  blogBar1:{
    backgroundColor: '#fff',
    width: '50%',
    height: '88%',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    shadowOpacity:.2,
    shadowRadius:5,
    elevation:5,
    marginRight: '1%'
  },

  blogBar2:{
    backgroundColor: '#fff',
    width: '50%',
    height: '88%',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    shadowOpacity:.2,
    shadowRadius:5,
    elevation:5,
  },

  blogBar3:{
    backgroundColor: '#fff',
    width: '50%',
    height: '88%',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    shadowOpacity:.2,
    shadowRadius:5,
    elevation:5,
    marginRight: '1%'
  },

   blogBar4:{
    backgroundColor: '#fff',
    width: '50%',
    height: '88%',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    shadowOpacity:.2,
    shadowRadius:5,
    elevation:5
  },
  
  description:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageBoyut:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    width: '90%',
    height: 180,
    marginTop: '5%'
  },
  Aciklama:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
    marginTop: '2%'
  },

  BlogrowOne:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4%',
  },

  BlogrowOne2:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4%',
    marginBottom: '5%'
  },

  BlogrowOne3:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4%',
    marginBottom: '5%'
  }

});