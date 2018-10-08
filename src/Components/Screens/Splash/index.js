import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert} from 'react-native';
import styles from './styles'
import * as Img from '../../../API/Helper/'


type Props = {};
export default class Main extends Component<Props> {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
           <Image source={Img.Logo}/> 
        <Text style={styles.welcome}>Discover Movies</Text>
        <Image style={styles.bottomLogo} source={Img.LogoTMDB}/>
      </View>
    );
  }
}
Main.navigationOptions = {
    header:null,
};
