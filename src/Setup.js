
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Redux/Reducers/rootReducer'
import Start from './Components/Screens/Start'
import getTheme from '../native-base-theme/components';
import {StyleProvider} from 'native-base'


const store = createStore(rootReducer);
type Props = {};
export default class Setup extends Component<Props> {
   
  render() {
    return (
      <View style={{flex:1}}>
            <Provider store={store}>
              <StyleProvider  style={getTheme()}>                                                                              
                <Start/>  
              </StyleProvider>
            </Provider>
    </View>
    );
  }
}
