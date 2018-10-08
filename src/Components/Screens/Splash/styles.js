import React from 'react';
import {StyleSheet} from 'react-native';


const color={
    main:'#212121',
    green:'#01D277',
    white:'#fff'
}
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.main,
    },
    welcome: {
      textAlign: 'center',
      margin: 10,
      color:color.white
    },
    instructions: {
      textAlign: 'center',
      color: color.green,
      marginBottom: 5,
    },
    bottomLogo:{
      position:"absolute",
      bottom:15
    }
  });
  
  