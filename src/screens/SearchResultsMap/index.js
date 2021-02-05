import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import places from '../../../assets/data/feed';
import {View, Text, Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import CustomMarker from '../../components/Custom Marker'

const SearchResultsMap = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 32.64491,
          longitude: -96.927881,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
         {places.map(place =>(
            <CustomMarker 
            image={place.image}
            coordinate={place.coordinate} 
            price={place.currentPrice}
            />
        )
      )}

      </MapView>
    </View>
  );
};

export default SearchResultsMap;


