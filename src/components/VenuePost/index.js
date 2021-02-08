import React from 'react';
import {Pressable, View, Image, Text} from 'react-native';
import styles from './styles';
import venues from '../../../assets/data/venues';
import {useNavigation} from '@react-navigation/native';

// post = venues[0];


const VenuePost = (props) => {
  console.log(props);
  const post = props.post

//   const navigation = useNavigation();

//   const goTovenuesPage = () => {
//     navigation.navigate('venues', {venuesId: venues.id})
// onPress={goTovenuesPage} 

//   }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: post.image}} />
       <Text style={styles.photographer}>{post.venue}</Text>
      <Text style={styles.description} numberOfLines={3}>
        {post.description}
      </Text>
      <Text style={styles.price}>
        {/* <Text style={styles.currentPrice}>${post.currentPrice} </Text> */}
        <Text style={styles.specialPrice}> ${post.specialPrice} </Text>
          for 1/2 day
      </Text>
      <Text style={styles.priceContainer}>
        <Text style={styles.totalPrice}>${post.totalPrice}</Text>
        <Text style={styles.basedPrice}> (based on full day)</Text>
      </Text> 
     </View>
  );
};

export default VenuePost;
