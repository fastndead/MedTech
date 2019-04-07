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




export default class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(){
        super();
        this.state={
            displayDrug: false,
            arrayToShow: [],
            name:'',
        }
    }



    displayDrug = () => {
        if(this.state.displayDrug){
            return <ListOfDrugs drugs={[{data:this.state.arrayToShow}]}/>;
        }
    };

    onNameChange = (name) =>{

    };

    search = (name) =>{
        var found = false;
        this.state.arrayToShow = [];
        drugs[0].data.forEach((value, index)=>{
            if(value.name === name){
                let temp = this.state.arrayToShow;
                temp.push(value);
                this.setState({arrayToShow: temp});
                found = true;
            }
        });

        if (found === false){
            throw new Exception("Nothing found")
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBar}
                    onSubmitEditing={(event)=>{
                            this.setState({name: event.nativeEvent.text})
                            try{
                                this.search(event.nativeEvent.text);
                            }catch{
                                this.onNameChange("Nothing found");
                            }
                            this.state.displayDrug = true
                        }
                    }
                    placeholder='Search'
                />
                {this.displayDrug()}
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
    searchBar:{
        height: 40,
        marginTop: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 30,
        borderRadius: 30,
        padding: 10
    },
    Thumbnail:{

    }
});