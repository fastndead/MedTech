import React from 'react';
import {
    TextInput,
    StyleSheet,
    TouchableNativeFeedback,
    Image,
    View,
} from 'react-native';

import {Container, Content, Card,CardItem, ListItem, Thumbnail, Text} from 'native-base';




const drugs = [
    {
        name: 'Афобазол',
        pharmAct:'фарм1',
        indications:'инд1',
        contraindications:'сонтр1',
        picUri: require('../assets/images/drugs/item1.jpg')
    },
    {
        name: 'Де-нол',
        pharmAct:'фарм2',
        indications:'инд2',
        contraindications:'сонтр2',
        picUri: require('../assets/images/drugs/item2.jpg')


    },
    {
        name: 'Смекта',
        pharmAct:'фарм3',
        indications:'инд3',
        contraindications:'сонтр3',
        picUri: require('../assets/images/drugs/item3.jpg')

    },
    {
        name: 'Анальгин',
        pharmAct:'фарм4',
        indications:'инд4',
        contraindications:'сонтр4',
        picUri: require('../assets/images/drugs/item4.jpg')

    },
    {
        name: 'Эргоферон',
        pharmAct:'фарм5',
        indications:'инд5',
        contraindications:'сонтр5',
        picUri: require('../assets/images/drugs/item5.jpg')

    },
    {
        name: 'Омез',
        pharmAct:'фарм6',
        indications:'инд6',
        contraindications:'сонтр6',
        picUri: require('../assets/images/drugs/item6.jpg')

    },
    {
        name: 'Лидокаин',
        pharmAct:'фарм7',
        indications:'инд7',
        contraindications:'сонтр7',
        picUri: require('../assets/images/drugs/item7.jpg')

    },
    {
        name: 'Мидокалм',
        pharmAct:'фарм8',
        indications:'инд8',
        contraindications:'сонтр8',
        picUri: require('../assets/images/drugs/item8.jpg')

    },
];



export default class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(){
        super();
        this.state={
            displayDrug: false,
        }
    }

    // sendOnCheck = () =>{
    //     const  db = firebase.firestore();
    //
    //     const find =  db.collection('drugs').doc(this.state.name)
    //         .get()
    //         .then(doc =>{
    //             if (doc.exists){
    //                 this.setState({
    //                     pharmAct: doc.data.pharmAct,
    //                     indications: doc.data.indications,
    //                     contraindications: doc.data.contraindications,
    //                 })
    //             }
    //         })
    // }


    displayDrug = () => {
        console.log(this.state.displayDrug)
        if(this.state.displayDrug){
            console.log(this.state);
            return <Drug name={this.state.name}
                         pharmAct={this.state.pharmAct}
                         indications={this.state.indications}
                         contraindications={this.state.contraindications}
                         picUri={this.state.picUri}/>;
        }
    };

    onNameChange = (name) =>{
        this.setState({name: name})
    };

    search = (name) =>{
        var found = false
        drugs.forEach((value, index)=>{
            if(value.name === name){
                this.setState(value)
                found = true
            }
        })
        if (found === false){
            throw new Exception("FUCK")
        }
        

    };




    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40,marginTop: 30, borderColor: 'gray', borderWidth: 1, marginHorizontal: 30, borderRadius: 30, padding: 10}}
                    onSubmitEditing={(event)=>{

                        this.onNameChange(event.nativeEvent.text);
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

class Drug extends React.Component {
    constructor(){
        super();
        this.state={
            name: '',
            pharmAct:'',
            indications:'',
            contraindications:'',
            picUri: ''
        }
    }



    render() {

        return (
         <Container>
            <Content>
                <Card>
                    <CardItem cardBody>
                        <Thumbnail square size={300} source={this.props.picUri}/>

                        <Text>{this.props.name}</Text>
                        <Text note>{this.props.pharmAct}</Text>
                    </CardItem>
                </Card>

            </Content>
        </Container>)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    Thumbnail:{

    }
});