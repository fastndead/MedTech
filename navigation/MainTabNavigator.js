import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ListScreen from '../screens/ListScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
    ListScreen: ListScreen,
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
    SettingsScreen: SettingsScreen,

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
    Search: Search,
    Calendar:Calendar,
    Main: Main,
    Map: Map,
    Settings: Settings,

});
