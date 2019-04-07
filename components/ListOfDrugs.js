import React from 'react';
import { Text, View, SectionList } from 'react-native';
import {Container, Content, Card,CardItem, ListItem, Thumbnail} from 'native-base';


class SectionListItem extends React.Component{
   render() {

       return (
           <View style={styles.drugView}>
               <Card style={styles.drugCard}>
                   <Thumbnail square source={this.props.item.picUri}/>
                   <Text note>Название </Text>
                   <Text style={styles.listItemText}> {this.props.item.name} </Text>
                   <Text note>Фармакалогическое действие </Text>
                   <Text style={styles.listItemText}> {this.props.item.pharmAct} </Text>
                   <Text note>Показания </Text>
                   <Text style={styles.listItemText}> {this.props.item.indications} </Text>
               </Card>
           </View>
       )
   }
}



export default class ListOfDrugs extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={({item, index}) => {
                        return (
                            <SectionListItem item={item} index={index}>

                            </SectionListItem>)
                    }
                    }
                    sections={this.props.drugs}
                    keyExtractor={(item, index) => item.name}
                >
                </SectionList>
            </View>
        );
    }
}


const styles= {
    container:{
        flex:1,
    },
    drugView:{
        marginHorizontal: 10,
    },
    drugCard:{
        padding: 10,
        flexWrap: 'wrap'
    },
    listItemView:{
        flex: 1,
        flexDirection: 'column',
    },
    listItemText:{
        fontSize: 20,
        marginHorizontal: 20,

    }
};