import React from 'react';
import {View, FlatList} from 'react-native';
import VenuePost from '../../components/VenuePost';
import venue from '../../../assets/data/venues';

const VenueResultsScreen = (props) => {
    // const venue = props;

  return (
    <View>
      <FlatList data={venue} renderItem={({item}) => <VenuePost post={item} />} />
    </View>
  );
};

export default VenueResultsScreen;