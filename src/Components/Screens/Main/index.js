import React, {Component} from 'react';
import { TouchableNativeFeedback,Alert, Dimensions, Image, ScrollView ,FlatList,ActivityIndicator, Platform, StyleSheet, Text, View} from 'react-native';
import styles from './styles'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {Footer,FooterTab, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import * as Img from '../../../API/Helper/'
import MainMovies from '../MainMovies'
import MainTVSeries from '../MainTVSeries'
import {connect} from 'react-redux';
import {movie} from '../../../Redux/Action/Mov'
import Modal from "react-native-modal";
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';



const url='http://image.tmdb.org/t/p/w500/'
type Props = {};
 class Main extends Component<Props> {
    constructor(props){
        super(props)
        this.state={
            dataMovies:[],
            dataUpMovies:[],
            isLoading:true,
            isModal:false,
            search:false,
            drawer:false,
            progress: new Animated.Value(0),
        }
    }
    componentDidMount = async () =>{
        this.setState({isModal:true})
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
          }).start();
        try {
          let responseNowPlaying = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?api_key=ba6c83a57eaaae900b700fad3a945735&language=en-US'
          );
          let responseUpComing = await fetch(
            'https://api.themoviedb.org/3/movie/upcoming?api_key=ba6c83a57eaaae900b700fad3a945735&language=en-US'
          );
          let responseOnAir = await fetch(
            'https://api.themoviedb.org/3/tv/on_the_air?api_key=ba6c83a57eaaae900b700fad3a945735&language=en-US'
          );
          let responsePopular = await fetch(
            'https://api.themoviedb.org/3/tv/popular?api_key=ba6c83a57eaaae900b700fad3a945735&language=en-US'
          );
          let responseJson = await responseNowPlaying.json();
          let responseJsonUpComming = await responseUpComing.json();
          let responseJsonOnAir= await responseOnAir.json();
          let responseJsonPopular= await responsePopular.json();
          this.props.onMount(responseJson.results,responseJsonUpComming.results,responseJsonOnAir.results,responseJsonPopular.results)
          this.setState({isModal:false})
        } catch (error) {
          console.error(error);
        }
      }
    
  render() {
    return (
      <View style={styles.containerMain} >
        {this.state.isLoading==false?
          this.props.navigation.navigate('MainMovies'):this.props.navigation.navigate('MainTVSeries')
        }
       
        <Modal style={{margin:0}} animationIn={'slideInLeft'} animationOut={'slideOutLeft'} isVisible={this.state.drawer} onBackdropPress={()=>this.setState({drawer:false})} onBackButtonPress={()=>this.setState({drawer:false})} >
            <View style={styles.drawer}>
                <View style={styles.profile}></View>
            </View>
        </Modal>
        <Modal isVisible={this.state.isModal} a>
            <View style={styles.containerModal}>
                <View style={styles.loadin_modal}>
                <LottieView source={require('../../../Assets/kewl.json')} progress={this.state.progress} />
                </View>
            </View>
        </Modal>
        <Modal isVisible={this.state.search} onBackdropPress={()=>this.setState({search:false})} onBackButtonPress={()=>this.setState({search:false})}>
            <View style={styles.modal}>
            </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        dataMovies:state.Mov.dataMovies,
        dataUpcomming:state.Mov.dataUpcomming,
        dataTVSeries:state.Mov.dataTVSeries,
        dataPopular:state.Mov.dataPopular,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: ( dataMovies,dataUpcomming,dataTVSeries,dataPopular) => { dispatch(movie(dataMovies, dataUpcomming, dataTVSeries, dataPopular)); }
    }
}


Main.navigationOptions = {
    header:null,
};

export default connect(mapStateToProps,mapDispatchToProps)(Main)