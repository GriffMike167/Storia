import React, {useEffect, useState, useRef} from 'react';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import posts from '../../../assets/data/feed';
import {View, FlatList, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import {Marker} from 'react-native-maps';
import CustomMarker from '../../components/Custom Marker';
import PostCarouselItem from '../../components/PostCarouselItem';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState();
  const [posts, setPosts] = useState([]);

  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 30});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResults = await API.graphql(graphqlOperation(listPosts));

        setPosts(postsResults.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = posts.findIndex((place) => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});
    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
    // console.warn('Scroll to ' + selectedPlaceId)
  }, [selectedPlaceId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 32.64491,
          longitude: -96.927881,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {posts.map((place) => (
          <CustomMarker
            image={place.image}
            coordinate={{latitude: place.latitude, longitude: place.longitude}}
            price={place.currentPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{postion: 'absolute', bottom: 675}}>
        <FlatList
          ref={flatlist}
          data={posts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
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
