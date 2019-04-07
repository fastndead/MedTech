import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Platform } from 'react-native';


export default class CalendarScreen extends React.Component {
    static navigationOptions = {
        title:'Календарь',
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
        return (
            <Calendar markedDates={{
                '2019-04-16': {selected: true, marked: true, selectedColor: 'blue'},
                '2019-04-06': {selected: true, marked: true, selectedColor: 'blue'},
                '2019-04-25': {selected: true, marked: true, selectedColor: 'blue'},
            }}
                      onDayPress={(day) => {
                          if(day.dateString === '2019-04-25' || day.dateString === '2019-04-16' || day.dateString === '2019-04-06' ){
                              this.props.navigation.navigate('Main')

                          }
                      }
                      }/>
        )
    }
}

class DayPillsCard extends React.Component{
        render() {

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