import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 320,
    },
    text:{
        color: '#000'
    },
    inactiveDot:{
        width: 40,
        height: 40,
        color: '#000',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const slides = [
    {
        title: 'Title 1',
        text: 'sample text',
        image: require('../assets/images/WelcomeScreen1.jpg'),
        imageStyle: styles.image,
        textStyle: styles.text,
        titleStyle: styles.text,
        dotStyle: styles.inactiveDot,
        activeDotStyle: styles.inactiveDot,
        paginationStyle: styles.inactiveDot,
        buttonStyle:styles.inactiveDot,

        backgroundColor: '#FFF',
    },
    {
        title: 'Title 2',
        text: 'sample text',
        image: require('../assets/images/WelcomeScreen1.jpg'),
        imageStyle: styles.image,
        textStyle: styles.text,
        titleStyle: styles.text,
        dotStyle: styles.text,
        backgroundColor: '#FFF',
    },
    {
        title: 'Title 3',
        text: 'sample text ',
        image: require('../assets/images/WelcomeScreen1.jpg'),
        imageStyle: styles.image,
        textStyle: styles.text,
        titleStyle: styles.text,
        dotStyle: styles.text,
        backgroundColor: '#FFF',
    }
];

export class SlideShow extends React.Component {

    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.props.navigation.navigate('Auth')
    }


    render() {
        return (
            <AppIntroSlider
                slides={slides}
                onDone={this._onDone}
                bottomButton
            />
        );
    }
}

export default SlideShow