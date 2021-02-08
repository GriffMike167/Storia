import React, {useEffect, useState, useRef} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import places from '../../../assets/data/feed';
import {View, Text, Image, FlatList, useWindowDimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import CustomMarker from '../../components/Custom Marker'
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState();
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 30});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
  })


  useEffect(() => {
    if (!selectedPlaceId || !flatlist){
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId)
    flatlist.current.scrollToIndex({index})
    const selectedPlace = places[index]
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8
    }
    map.current.animateToRegion(region)
    // console.warn('Scroll to ' + selectedPlaceId)
  },[selectedPlaceId])


  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView ref={map} style={{width: '100%', height: '100%'}}
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
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}

            />
        )
      )}

      </MapView>
      <View style={{postion: 'absolute', bottom: 675}}>
        <FlatList ref={flatlist} data={places} renderItem={({item}) =>
        <PostCarouselItem post={item} />}
        horizontal
        showHorizontalScrollIndicator={false}
        // snapToInterval={ width -30}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={onViewChanged.current}

        
        />

      </View>
    </View>
  );
};

export default SearchResultsMap;


