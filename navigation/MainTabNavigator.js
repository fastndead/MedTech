import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import CalendarScreen from '../screens/CalendarScreen';

const Search = createStackNavigator({
  MainScreen: MainScreen,
});

Search.navigationOptions = {
  tabBarLabel: 'Поиск',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-search'}
    />
  ),
};

const Map = createStackNavigator({
  MapScreen: MapScreen,
});

Map.navigationOptions = {
  tabBarLabel: 'Карта',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-map'}
    />
  ),
};

const Calendar = createStackNavigator({
    CalendarScreen: CalendarScreen,
});

Calendar.navigationOptions = {
  tabBarLabel: 'Календарь',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-calendar'}
    />
  ),
};

const Main = createStackNavigator({
    MainScreen: MainScreen,
});

Main.navigationOptions = {
  tabBarLabel: 'Список',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-list'}
    />
  ),
};

const Settings = createStackNavigator({
    MainScreen: MainScreen,

});

Settings.navigationOptions = {
  tabBarLabel: 'Настройки',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-settings'}

    />
  ),
};



export default createBottomTabNavigator({
    Search,
    Calendar,
    Main,
    Map,
    Settings,

});
