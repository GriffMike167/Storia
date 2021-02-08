import React, {useEffect, useState, useRef} from 'react';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import venues from '../../../assets/data/venues';
import {View, Text, Image, FlatList, useWindowDimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { Marker } from 'react-native-maps';
import VenueMarker from '../../components/Venue Marker'
// import PostCarouselItem from '../../components/PostCarouselItem'

const VenueResultsMap = () => {
  const [selectedVenueId, setSelectedVenueId] = useState();
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 30});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedVenue = viewableItems[0].item;
      setSelectedVenueId(selectedVenue.id)
    }
  })


//   useEffect(() => {
//     if (!selectedVenueId || !flatlist){
//       return;
//     }
//     const index = venues.findIndex(venue => venue.id === selectedVenueId)
//     flatlist.current.scrollToIndex({index})
//     const selectedVenue = venues[index]
//     const region = {
//       latitude: selectedVenue.coordinate.latitude,
//       longitude: selectedVenue.coordinate.longitude,
//       latitudeDelta: 0.8,
//       longitudeDelta: 0.8
//     }
//     map.current.animateToRegion(region)
//     // console.warn('Scroll to ' + selectedvenueId)
//   },[selectedVenueId])


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
         {venues.map(venue =>(
            <VenueMarker 
            image={venue.image}
            coordinate={venue.coordinate} 
            venue={venue.venue}
            isSelected={venue.id === selectedVenueId}
            onPress={() => setSelectedVenueId(venue.id)}

            />
        )
      )}

      </MapView>
      <View style={{postion: 'absolute', bottom: 675}}>
        {/* <FlatList ref={flatlist} data={venues} renderItem={({item}) =>
        <PostCarouselItem post={item} />}
        horizontal
        showHorizontalScrollIndicator={false}
        // snapToInterval={ width -30}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={onViewChanged.current}

        
        /> */}

      </View>
    </View>
  );
};

export default VenueResultsMap;