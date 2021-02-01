import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/4.jpeg')}
      />
      <Text style={styles.photographer}>Ansel Adams</Text>
      <Text style={styles.description} numberOfLines={3}>
        Traditional: Classic and traditional photography is similar to what many
        couples’ parents have from their weddings. These straightforward
        photographs may not be highly creative—they’re typically shot at eye
        level and posed—but they stand the test of time
      </Text>
      <Text style={styles.price}>
        <Text style={styles.currentPrice}>$125 </Text>
        <Text style={styles.specialPrice}> $105</Text>
        /hr
      </Text>
      <Text style={styles.priceContainer}>
        <Text style={styles.totalPrice}>$420 total</Text>
        <Text style={styles.basedPrice}>  (based on four hours)</Text>
      </Text>
    </View>
  );
};

export default Post;
