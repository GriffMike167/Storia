import React from 'react';
import {View, Image, Text, useWindowDimensions} from 'react-native';
import styles from './styles';
import feed from '../../../assets/data/feed';

const Post = (props) => {
  console.log(props);
  const post = props.post;
  const width = useWindowDimensions().width;

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
      <Image style={styles.image} source={{uri: post.image}} />
      <View style={{marginHorizontal: 10, flex:1}}></View>
      </View>
    </View>

    )
}
export default Post