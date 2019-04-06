import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
} from 'react-native';

import {Container, Content, List, ListItem, Thumbnail, Text} from 'native-base';
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB_kq3_yayBGD8X-QNBKmcHsM6CT9p5XEY",
    authDomain: "medtech-d8031.firebaseapp.com",
    databaseURL: "https://medtech-d8031.firebaseio.com",
    projectId: "medtech-d8031",
    storageBucket: "medtech-d8031.appspot.com",
    messagingSenderId: "672509459339"
};
firebase.initializeApp(config);


export default class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(){
        super()
        this.state={
            name: 'undefined',
            pharmAct:'',
            indications:'',
            contraindications:'',
        }
    }

    onNameChange = (name) =>{
        this.setState({name: name})
    }

    sendOnCheck = () =>{
        const  db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const find =  db.collections('drugs').doc(this.state.name)
            .get()
            .then(doc =>{
                if (doc.exists){
                    this.setState({
                        pharmAct: doc.data.pharmAct,
                        indications: doc.data.indications,
                        contraindications: doc.data.contraindications,
                    })
                }
            })
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 30, borderRadius: 30, padding: 10}}
                    onChangeText={this.onNameChange}
                    onSubmitEditing={

                        this.sendOnCheck(this.state.name)
                    }
                    placeholder='Search'
                />
                <Container>
                    <Content>
                        <List>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../assets/images/item1.jpg')} />
                                <Text>{this.state.name}</Text>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});