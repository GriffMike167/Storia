import React from 'react';
import {View, Image, Text, ImagePropTypes, useWindowDimensions} from 'react-native';
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
      <View style={{marginHorizontal: 10, flex:1}}>
      <Text style={styles.photographer}>{post.photographer}</Text>
      {/* <Text style={styles.description} numberOfLines={2}> */}
        {/* {post.description} */}
      {/* </Text> */}
      <Text style={styles.price}>
        <Text style={styles.currentPrice}>${post.currentPrice} </Text>
        <Text style={styles.specialPrice}> ${post.specialPrice}</Text>
        /hr
      </Text>
      <Text style={styles.priceContainer}>
        <Text style={styles.totalPrice}>${post.totalPrice}</Text>
        <Text style={styles.basedPrice}> (based on four hours)</Text>
      </Text>
      </View>
      </View>
    </View>
  );
};

export default Post;