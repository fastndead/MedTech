import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SlideShow from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  HomeScreen: SlideShow,

}));