import React from 'react';
import {StyleSheet} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


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
    header: {
        backgroundColor: color.main,
      },
    containerMain: {
        flex: 1,
        backgroundColor: color.main,
      },
    welcome: {
      fontSize: responsiveFontSize(1.8),
      textAlign: 'center',
      margin:10,
      color:color.white
    },
    subtitle: {
        fontSize: responsiveFontSize(1.4),
        textAlign: 'center',
        color:color.white
      },
    instructions: {
      textAlign: 'center',
      color: color.green,
      marginBottom: 5,
    },
    loadin_modal:{
        padding:15,
        backgroundColor:'#fff',
        borderRadius:10,
        width:responsiveWidth(20),
        height:responsiveWidth(20),
        justifyContent:"center",
        alignItems:"center"
    },
    modal:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    imageSize:{
        width:responsiveWidth(35),
        height:responsiveHeight(30)
    },
    imageLogoSize:{
        width:30,
        height:30,
    },
    border:{
        width:responsiveWidth(100),
        borderBottomWidth:2,
        borderColor:'#000',
        marginVertical:5
    },
    imageSizeBorder:{
        width:responsiveWidth(35),
        height:responsiveHeight(27),
        marginHorizontal:5,
        borderRadius:15,
    },
    btnOther:{
        backgroundColor:color.green,
        padding:5,
        width:responsiveWidth(17),
        borderRadius:30,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    }
  });
  
  