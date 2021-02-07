import React from 'react';
import {View} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import places from '../../../assets/data/feed';

post = places[0];


const PostScreen = () => {
    return(
    <View>
        <DetailedPost post={post}/>
    </View>
    )
}

export default PostScreen