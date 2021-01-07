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
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Image
                    source={require('../images/logo-koza.png')}
                    style={styles.Logo}
                  />
                </View>

                <View style={styles.cardContainer}>
                  <Text style={styles.nameText}>Esra Akar</Text>
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
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity>
                    <Text style={{ color: '#FBB663', fontSize: 24 }}>
                      Daha{'\n'}Fazla{'\n'}Bilgi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
             <Card containerStyle={{ borderRadius: 20 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Image
                    source={require('../images/logo-koza.png')}
                    style={styles.Logo}
                  />
                </View>

                <View style={styles.cardContainer}>
                  <Text style={styles.nameText}>Behlül Şala</Text>
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
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity>
                    <Text style={{ color: '#FBB663', fontSize: 24 }}>
                      Daha{'\n'}Fazla{'\n'}Bilgi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
             <Card containerStyle={{ borderRadius: 20 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Image
                    source={require('../images/logo-koza.png')}
                    style={styles.Logo}
                  />
                </View>

                <View style={styles.cardContainer}>
                  <Text style={styles.nameText}>Mert Şahin</Text>
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
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity>
                    <Text style={{ color: '#FBB663', fontSize: 24 }}>
                      Daha{'\n'}Fazla{'\n'}Bilgi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
             <Card containerStyle={{ borderRadius: 20 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Image
                    source={require('../images/logo-koza.png')}
                    style={styles.Logo}
                  />
                </View>

                <View style={styles.cardContainer}>
                  <Text style={styles.nameText}>Emir Şahin</Text>
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
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity>
                    <Text style={{ color: '#FBB663', fontSize: 24 }}>
                      Daha{'\n'}Fazla{'\n'}Bilgi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
             <Card containerStyle={{ borderRadius: 20 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Image
                    source={require('../images/logo-koza.png')}
                    style={styles.Logo}
                  />
                </View>

                <View style={styles.cardContainer}>
                  <Text style={styles.nameText}>Mertcan Karakaya</Text>
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
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity>
                    <Text style={{ color: '#FBB663', fontSize: 24 }}>
                      Daha{'\n'}Fazla{'\n'}Bilgi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
             <Card containerStyle={{ borderRadius: 20 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Image
                    source={require('../images/logo-koza.png')}
                    style={styles.Logo}
                  />
                </View>

                <View style={styles.cardContainer}>
                  <Text style={styles.nameText}>Elif Nur Bayrak</Text>
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
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity>
                    <Text style={{ color: '#FBB663', fontSize: 24 }}>
                      Daha{'\n'}Fazla{'\n'}Bilgi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
             <Card containerStyle={{ borderRadius: 20 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Image
                    source={require('../images/logo-koza.png')}
                    style={styles.Logo}
                  />
                </View>

                <View style={styles.cardContainer}>
                  <Text style={styles.nameText}>Yusuf Tuner</Text>
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
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity>
                    <Text style={{ color: '#FBB663', fontSize: 24 }}>
                      Daha{'\n'}Fazla{'\n'}Bilgi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
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
    width: 150,
    height: 150,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '150%',
  },
  cardContainer: {
    padding: 10,
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
    color:"#c6c6c6"
  },
  stars: {
    paddingVertical: 20,
    paddingLeft: 5,
  },
});
