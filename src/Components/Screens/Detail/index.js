import React, {Component} from 'react';
import {TouchableNativeFeedback,Alert, Dimensions, Image, ScrollView ,FlatList, Modal, ActivityIndicator, Platform, StyleSheet, Text, View} from 'react-native';
import styles from './styles'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {Footer,FooterTab, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import * as Img from '../../../API/Helper/'
import {connect} from 'react-redux'

const genre=[
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]

const url='http://image.tmdb.org/t/p/w500/'
type Props = {};
class Detail extends Component<Props> {
    constructor(props){
        super(props)
        this.state={
            isLoading:false,
        }
    }
    onRenderItem=({item})=>
    <View>
        <Image style={styles.imageSize} source={{uri:url+item.poster_path}}/>
    </View>
     onRenderItemUp=({item} )=>
      <View>
         <Image style={styles.imageSizeBorder} source={{uri:url+item.poster_path}}/>
         <Text style={styles.welcome}>{item.title.substring(0,20)}</Text>
         <Text style={styles.subtitle}>{genre.map(x=>{return x.id==item.genre_ids[0]? x.name:null})}{item.genre_ids.length>1?', ':null}{genre.map(x=>{return x.id==item.genre_ids[1]? x.name:null})}</Text>
     </View>
  render() {
    return (
      <View style={styles.containerMain} >
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:1}}/>
            <View style={{flex:1, alignItems:"center"}}>
              <Text style={styles.welcome}>Now Playing</Text>
            </View>
            <TouchableNativeFeedback>
              <View style={{flex:1, right:15,alignItems:"flex-end"}}>
                <View style={styles.btnOther}>
                  <Text style={{color:'#fff',fontSize:12}}>Other</Text>
                  <Icon style={{color:'#fff',fontSize:12}} name="ios-arrow-forward" />
                </View>
              </View>
            </TouchableNativeFeedback>
        </View>
        <FlatList
        data={this.props.dataMovies}
        renderItem={this.onRenderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({title},index)=>title}
        />
        <FlatList
        data={this.props.dataUpcomming}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={this.onRenderItemUp}
        keyExtractor={({title},index)=>title}
        />
        </View>
    );
  }
}
Detail.navigationOptions = {
    header:null,
};


const mapStateToProps = (state, props) => {
  return {
      dataMovies:state.Mov.dataMovies,
      dataUpcomming:state.Mov.dataUpcomming,
      dataTVSeries:state.Mov.dataTVSeries,
      dataPopular:state.Mov.dataPopular,
  };
}

export default connect(mapStateToProps)(Detail)