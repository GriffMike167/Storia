import React from 'react';
import {View} from 'react-native';
import VenuePost from '../../components/VenuePost';
import {useRoute} from '@react-navigation/native';
// import places from '../../../assets/data/venues';
import venue from '../../../assets/data/venues';

post = venue[0];

const VenuePostScreen = () => {

    // const route = useRoute();
    // const post = venue.find(venue => venue.id === route.params.venueId);

    return(
    <View>
        <VenuePost post={post}/>
    </View>
    )
}

export default VenuePostScreen