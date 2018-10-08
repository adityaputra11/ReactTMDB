import React, {Component} from 'react';
import {TouchableOpacity, TouchableNativeFeedback,Alert, Dimensions, Image, ScrollView ,FlatList, Modal, ActivityIndicator, Platform, StyleSheet, Text, View} from 'react-native';
import styles from './styles'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {Footer,FooterTab, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import * as Img from '../../../API/Helper/'
import {connect} from 'react-redux'
import {genre} from '../../../API/Helper'

const url='http://image.tmdb.org/t/p/w500/'
type Props = {};
class MainMovies extends Component<Props> {
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
    
     onRenderItemUp=({item})=>
      <View>
         <Image style={styles.imageSizeBorder} source={{uri:url+item.poster_path}}/>
         <Text style={styles.welcome}>{item.title.substring(0,20)}</Text>
         <Text style={styles.subtitle}>{genre.map(x=>{return x.id==item.genre_ids[0]? x.name:null})}{item.genre_ids.length>1?', ':null}{genre.map(x=>{return x.id==item.genre_ids[1]? x.name:null})}</Text>
     </View>

  render() {
    return (
      <View style={styles.containerMain} >
       <Header style={{backgroundColor:'#000'}} >
          <Left style={{flex:1}}>   
          <Button transparent onPress={()=>this.setState({drawer:true})}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body style={{flex:1,alignItems:'center'}}>    
            <Image style={styles.imageLogoSize} source={Img.Logo}/> 
           </Body>
          <Right style={{flex:1}}>
          <Button transparent onPress={()=>this.setState({search:true})}>
              <Icon name='ios-search' style={{color:'#01D277'}} />
            </Button>
          </Right>
        </Header>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:1}}/>
            <View style={{flex:1, alignItems:"center"}}>
              <Text style={styles.welcome}>Now Playing</Text>
            </View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail')} style={{flex:1, right:15,alignItems:"flex-end"}}>
                <View style={styles.btnOther}>
                  <Text style={{color:'#fff',fontSize:12}}>Other</Text>
                  <Icon style={{color:'#fff',fontSize:12}} name="ios-arrow-forward" />
                </View>
              </TouchableOpacity>
        </View>
        {this.state.isLoading?
           <View style={styles.container}>
           <View style={styles.loadin_modal}>
               <ActivityIndicator/>
           </View>
           </View>:
        <FlatList
        data={this.props.dataMovies}
        horizontal={true}
        renderItem={this.onRenderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({title},index)=>title}
        />
        }
        <View style={styles.border}/>
        
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:1}}/>
            <View style={{flex:1, alignItems:"center"}}>
              <Text style={styles.welcome}>Upcoming</Text>
            </View>
            <TouchableNativeFeedback>
              <View style={{flex:1,right:15,alignItems:"flex-end"}}>
                <View style={styles.btnOther}>
                  <Text style={{color:'#fff',fontSize:12}}>Other</Text>
                  <Icon style={{color:'#fff',fontSize:12}} name="ios-arrow-forward" />
                </View>
              </View>
            </TouchableNativeFeedback>
        </View>
        {this.state.isLoading?
        <View style={styles.container}>
        <View style={styles.loadin_modal}>
            <ActivityIndicator/>
        </View>
        </View>:
        <FlatList
        data={this.props.dataUpcomming}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={this.onRenderItemUp}
        keyExtractor={({title},index)=>title}
        />
        }
          <Footer>
                    <FooterTab style={{backgroundColor:'#000'}}>
                        <Button onPress={()=>this.setState({isLoading:false})}>
                            <Icon style={this.state.isLoading==false? styles.instructions:styles.instructionsWhite} name='ios-apps-outline' />
                            <Text style={this.state.isLoading==false? styles.instructions:styles.instructionsWhite}>Movies</Text>
                        </Button>
                        <Button onPress={()=>this.setState({isLoading:true})}>
                            <Icon style={this.state.isLoading==false? styles.instructionsWhite:styles.instructions} name='ios-camera-outline' />
                            <Text style={this.state.isLoading==false? styles.instructionsWhite:styles.instructions}>TV Series</Text>
                        </Button>
                       </FooterTab>
        </Footer>
      </View>
    );
  }
}
MainMovies.navigationOptions = {
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

export default connect(mapStateToProps)(MainMovies)