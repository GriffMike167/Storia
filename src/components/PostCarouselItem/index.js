/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styles from './styles';
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
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{uri: post.image}} />
        <View style={{marginHorizontal: 10, flex: 1}}>
          <Text style={styles.photographer}>{post.photographer}</Text>
          <Text style={styles.price}>
            <Text style={styles.currentPrice}>${post.currentPrice} </Text>
            <Text style={styles.specialPrice}> ${post.specialPrice}</Text>
            /hr
          </Text>
          <Text style={styles.priceContainer}>
            <Text style={styles.totalPrice}>${post.specialPrice * hours}</Text>
            <Text style={styles.basedPrice}> (based on four hours)</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
