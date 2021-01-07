import React, { Component } from 'react';
import {StyleSheet, View, TextInput } from 'react-native';

export default class InputText extends Component {
  state = {
    value: ''
  };
  
  _onChangeText = () => {
    this.setState({
      value: text,
    });
  };
  
render() {
  const {value} = this.state;
    return (
      <View >
        <TextInput
        {...this.props}
         value={this.state.value}
         placeholderTextColor= 'white'
         onChangeText={value => this.setState({value})}
         style={styles.inputContain}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
  inputContain:{
    height: 40,
    paddingHorizontal:5,
    borderRadius: 20,
    backgroundColor: '#a3ffeb',
    fontSize:14,
    marginVertical:2,
    borderWidth:0.5,
    borderColor: '#87fff7'
  }

});

