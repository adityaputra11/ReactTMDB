import React, {Component} from 'react';
import {TouchableNativeFeedback,Alert, Dimensions, Image, ScrollView ,FlatList, Modal, ActivityIndicator, Platform, StyleSheet, Text, View} from 'react-native';
import styles from './styles'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {Footer,FooterTab, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import * as Img from '../../../API/Helper/'
import {connect} from 'react-redux'
import {genre} from '../../../API/Helper'


const url='http://image.tmdb.org/t/p/w500/'
type Props = {};
class MainTVSeries extends Component<Props> {
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
        }
    }
    onRenderItem=({item})=>
    <View>
        <Image style={styles.imageSize} source={{uri:url+item.poster_path}}/>
    </View>
     onRenderItemUp=({item})=>
      <View>
         <Image style={styles.imageSizeBorder} source={{uri:url+item.poster_path}}/>
         <Text style={styles.welcome}>{item.name.substring(0,20)}</Text>
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
              <Text style={styles.welcome}>On The Air</Text>
            </View>
            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Detail')}>
              <View style={{flex:1, right:15,alignItems:"flex-end"}}>
                <View style={styles.btnOther}>
                  <Text style={{color:'#fff',fontSize:12}}>Other</Text>
                  <Icon style={{color:'#fff',fontSize:12}} name="ios-arrow-forward" />
                </View>
              </View>
            </TouchableNativeFeedback>
        </View>
       
        <FlatList
        data={this.props.dataTVSeries}
        horizontal={true}
        renderItem={this.onRenderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({name},index)=>name}
        />
        
        <View style={styles.border}/>
        
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:1}}/>
            <View style={{flex:1, alignItems:"center"}}>
              <Text style={styles.welcome}>Popular</Text>
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
        <FlatList
        data={this.props.dataPopular}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={this.onRenderItemUp}
        keyExtractor={({name},index)=>name}
        />
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
MainTVSeries.navigationOptions = {
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

export default connect(mapStateToProps)(MainTVSeries)