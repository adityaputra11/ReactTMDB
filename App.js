import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Setup from './src/Setup'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <Setup/>
    );
  }
}
