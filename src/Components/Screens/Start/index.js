import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert} from 'react-native';
import styles from './styles'
import {AppNavigator,MainNavigator} from '../../../Navigator/AppNavigator'


type Props = {};
export default class Main extends Component<Props> {
  constructor(props){
    super(props)
    this.state={
      isLoading:true
    }
  }
  componentDidMount(){
    setInterval(()=> this.setState({isLoading:false}) , 2000);
  }
  render() {
    return (
      <View style={styles.container}>
       {this.state.isLoading?
       <AppNavigator/>
       :
       <MainNavigator/>}
      </View>
    );
  }
}
Main.navigationOptions = {
    header:null,
};
