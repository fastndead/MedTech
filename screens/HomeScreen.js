import React from 'react';
import Swiper from 'react-native-swiper';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
    Button,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';


class WelcomeButton extends React.Component{
  render() {
    return (<Button title="Got it"
                   style={styles.welcomeButton}
                   onPress={()=>{}}
            />);
  }
}

class WelcomeSlide extends React.Component{

    render(){


      return(
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.textHeader}> {this.props.header} </Text>
          <Text style={styles.text}> {this.props.textUpper} </Text>
          <Image style={styles.welcomeImage} source={this.props.picUrl} />
          <Text style={styles.text}>{this.props.textLower}</Text>
        </View>
      </View>
      )
    }
}

export default class HomeScreen extends React.Component {

    constructor(props){
      super(props);
      this.props = props
    }

  render() {
    var swiper = (
        <Swiper style={styles.wrapper} loop={false}>
          <WelcomeSlide picUrl={require('../assets/images/WelcomeScreen1.jpg')}
                        textUpper='Добро пожаловать в Med.Tech'
                        textLower='Добро пожаловать в Med.Tech'
                        header='Добро пожаловать в Med.Tech'/>
          <WelcomeSlide picUrl={require('../assets/images/WelcomeScreen1.jpg')}
                        textUpper='Добро пожаловать в Med.Tech'
                        textLower='Добро пожаловать в Med.Tech'
                        header='Добро пожаловать в Med.Tech'/>
          <WelcomeSlide picUrl={require('../assets/images/WelcomeScreen1.jpg')}
                        textUpper='Добро пожаловать в Med.Tech'
                        textLower='Добро пожаловать в Med.Tech'
                        header='Добро пожаловать в Med.Tech'/>
        </Swiper>
    );

    if(swiper.props.index === 2){
      return [swiper, <WelcomeButton/>]
    }
    return swiper;
  }


}

const styles = StyleSheet.create({
  wrapper:{

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textHeader:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop:28,
    color: '#195344',
  },
  text:{
    textAlign: 'center',
    marginHorizontal:20,
    fontSize: 22,
    marginTop:10,
    color: '#195344',

  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeButton: {
    justifyContent: 'flex-end',
  },
  welcomeImage: {
    width: 350,
    height: 200,
    marginTop: 40,
    resizeMode: 'contain',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
