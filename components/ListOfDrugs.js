import React from 'react';
import { Text, View, SectionList } from 'react-native';
import {Container, Content, Card,CardItem, ListItem, Thumbnail, Body} from 'native-base';


class SectionListItem extends React.Component{
   render() {

       return (
           <View style={styles.drugView}>
               <Card style={styles.drugCard}>
                   <CardItem header>
                       <Thumbnail square size={300} source={this.props.item.picUri}/>
                       <Text style={styles.listItemText}> {this.props.item.name} </Text>
                   </CardItem>

                   <CardItem bordered>
                       <Body>
                           <Text style={styles.listItemText}>Фармакалогическое действие </Text>
                           <Text  note> {this.props.item.pharmAct} </Text>
                           <Text style={styles.listItemText}>Показания </Text>
                           <Text note > {this.props.item.indications} </Text>
                       </Body>
                   </CardItem>
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
        fontSize: 16,
    }
};