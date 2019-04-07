import React from 'react';
import ListOfDrugs from '../components/ListOfDrugs.js'

import {
    TextInput,
    StyleSheet,
    TouchableNativeFeedback,
    Image,
    View,
} from 'react-native';
import {drugs} from '../assets/data/drugs.js';

import {Container, Content, Card,CardItem, ListItem, Thumbnail, Text} from 'native-base';




export default class ListScreen extends React.Component {
    static navigationOptions = {
        title: 'Все медикаменты',
    };



    render() {
        return (
            <ListOfDrugs drugs={drugs}/>
        );
    }
}

