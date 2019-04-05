import React from 'react';
import Swiper from 'react-native-swiper';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _firstWelcomeSlide(){
    return(
        <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.textHeader}> Добро пожаловать в Med.Tech </Text>
            <Text style={styles.text}> Добро пожаловать в Med.Tech </Text>
            <Image style={styles.welcomeImage} source={require('../assets/images/WelcomeScreen1.jpg')} />
            <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   </Text>
          </View>

        </View>
    )
  }

  _SecondWelcomeSlide(){
    return(
        <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.textHeader}> Добро пожаловать в Med.Tech </Text>
            <Text style={styles.text}> Добро пожаловать в Med.Tech </Text>
            <Image style={styles.welcomeImage} source={require('../assets/images/WelcomeScreen1.jpg')} />
            <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   </Text>
          </View>

        </View>
    )
  }

  _ThirdWelcomeSlide(){
    return(
        <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.textHeader}> Добро пожаловать в Med.Tech </Text>
            <Text style={styles.text}> Добро пожаловать в Med.Tech </Text>
            <Image style={styles.welcomeImage} source={require('../assets/images/WelcomeScreen1.jpg')} />
            <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   </Text>
          </View>

        </View>
    )
  }

  render() {
    return (
        <Swiper style={styles.wrapper}
                loop={false}>
          {this._firstWelcomeSlide()}
          {this._SecondWelcomeSlide()}
          {this._ThirdWelcomeSlide()}
        </Swiper>
        );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden'
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
