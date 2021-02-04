import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import navigation from '@react-navigation/native';

const SuggestionRow = ({item}) => (
  <Pressable onPress={() => navigation.navigate('Hours')} style={styles.row}>
    <View style={styles.iconContainer}>
      <Entypo name={'location-pin'} size={30} color="grey" />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </Pressable>
);
export default SuggestionRow;
