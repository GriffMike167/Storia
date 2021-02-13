import React from 'react';
import {Pressable, Image, Text} from 'react-native';
import styles from './styles';
// import feed from '../../../assets/data/feed';
import {useNavigation} from '@react-navigation/native';
const hours = 4;

const Post = (props) => {
  console.log(props);
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
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
        <Text style={styles.totalPrice}>${post.specialPrice * hours}</Text>
        <Text style={styles.basedPrice}> (based on four hours)</Text>
      </Text>
    </Pressable>
  );
};

export default Post;
