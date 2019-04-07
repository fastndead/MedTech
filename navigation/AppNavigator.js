import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SlideShow from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';
import ListOfDrugs from '../components/ListOfDrugs'

export default createAppContainer(createSwitchNavigator({
  MainTabNavigator: MainTabNavigator,
  HomeScreen: SlideShow,

}));