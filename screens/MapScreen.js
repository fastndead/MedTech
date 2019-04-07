import React from 'react';
import {
    StyleSheet,Text, View 
} from 'react-native';
import { Constants, MapView, Location, Permissions,  } from 'expo';



export default class MapScreen extends React.Component {
    static navigationOptions = {
        title:'Ближайшие аптеки',
        headerTitleStyle: {
            fontWeight: 'normal',
        },
    };

    state = {
        mapRegion: null,
        hasLocationPermissions: false,
        locationResult: null,
        location: {coords: { latitude: 51.5188328, longitude: 46.02015273}, coords2:{latitude: 51.522759, longitude: 46.0198429}},
        location2: { coords:{latitude: 51.522759, longitude: 46.0198429}},
        
      };
    
      componentDidMount() {
        this._getLocationAsync();
      }
    
      _handleMapRegionChange = mapRegion => {
        console.log(mapRegion);
        this.setState({ mapRegion });
      };
    
      _getLocationAsync = async () => {
       let { status } = await Permissions.askAsync(Permissions.LOCATION);
       if (status !== 'granted') {
         this.setState({
           locationResult: 'Permission to access location was denied',
         });
       } else {
         this.setState({ hasLocationPermissions: true });
       }
    
       let location = await Location.getCurrentPositionAsync({});
       this.setState({ locationResult: JSON.stringify(location) });
       
       // Center the map on the location we just fetched.
        this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
      };
    
      render() {
        return (
          <View style={styles.container}>

            
            {
              this.state.locationResult === null ?
              <Text>Поиск вашей локации...</Text> :
              this.state.hasLocationPermissions === false ?
                <Text>Нет доступа к геолокации</Text> :
                this.state.mapRegion === null ?
                <Text>Данный регион не доступен.</Text> :
                <MapView
                  style={{flex: 1, alignSelf: 'stretch', marginTop:-30}}
                  region={{ latitude:
                     this.state.location.coords.latitude, 
                     longitude: this.state.location.coords.longitude,
                     latitudeDelta: 0.0150, longitudeDelta: 0.0150 }}
                  onRegionChange={this._handleMapRegionChange}
                >
                <MapView.Marker
                coordinate={this.state.location.coords}
                title="Вы здесь"
                
                />
                <MapView.Marker
                coordinate={this.state.location2.coords}
                title="Домашняя аптека"
                description="Ближайшая доступная аптека"
               
                />
                </MapView>  
            }
          </View>
            
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ffffff',
      },
      paragraph: {
        flex: 1,
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
      },
    });
    