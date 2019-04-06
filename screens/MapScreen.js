import React from 'react';
import {
    StyleSheet,
} from 'react-native';

import {Container, Header, Icon, Left, Body, Title, Button, Right} from 'native-base';

export default class MapScreen extends React.Component {
    static navigationOptions = {
        title:'Ближайшие аптеки',
        headerTitleStyle: {
            fontWeight: 'normal',
        },


    };

    constructor(){
        super();
        this.state={
        }
    }

    render() {
        return null
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    title:{
    }
});