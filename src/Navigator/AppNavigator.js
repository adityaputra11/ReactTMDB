import {createStackNavigator,createTabNavigator} from 'react-navigation'
import Main from '../Components/Screens/Main'
import Splash from '../Components/Screens/Splash'
import React from 'react'
import Detail from '../Components/Screens/Detail'
import MainMovies from '../Components/Screens/MainMovies'
import MainTVSeries from '../Components/Screens/MainTVSeries'

export const AppNavigator = createStackNavigator({
    Splash:{
        screen:Splash
    },
  
  });
  export const MainNavigator = createStackNavigator({
    Main: {
      screen: Main
    },
    Detail:{
      screen: Detail
    },
    MainMovies:{
      screen: MainMovies
    },
    MainTVSeries:{
      screen: MainTVSeries
    }
    
  })