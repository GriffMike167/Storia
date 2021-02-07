import React from 'react';
import {View, Image, Text, ImagePropTypes} from 'react-native';
import styles from './styles';
import feed from '../../../assets/data/feed';

const Post = (props) => {
  console.log(props);
  const post = props.post;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: post.image}} />
      <Text style={styles.photographer}>{post.photographer}</Text>
      <Text style={styles.description} numberOfLines={3}>
        {post.description}
      </Text>
      <Text style={styles.price}>
        <Text style={styles.currentPrice}>${post.currentPrice} </Text>
        <Text style={styles.specialPrice}> ${post.specialPrice}</Text>
        /hr
      </Text>
      <Text style={styles.priceContainer}>
        <Text style={styles.totalPrice}>${post.totalPrice}</Text>
        <Text style={styles.basedPrice}> (based on four hours)</Text>
      </Text>
      <Text style={styles.equipmentContainer}>
          Equipment: 
          <Text style={styles.equipment}>  {post.equipment}</Text>
      </Text>
      <Text style={styles.equipmentContainer}>
          Props:
      <Text style={styles.props}> {post.props}</Text>
      </Text>
      <Text style={styles.equipmentContainer}>
          Work Experince: 
      <Text style={styles.workExperince}>  {post.workExperince}</Text>
      </Text>
      <Text style={styles.equipmentContainer}>
          Venues Worked:
      <Text  style={styles.venuesWorked}>  {post.venuesWorked}</Text>
      </Text>
    </View>
  );
};

export default Post;
