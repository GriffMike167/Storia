import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import navigation from '@react-navigation/native';

const SuggestionRow = ({item}) => (
  <View onPress={() => navigation.navigate('Hours')} style={styles.row}>
    <View style={styles.iconContainer}>
      <Entypo name={'location-pin'} size={30} color="grey" />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </View>
);
export default SuggestionRow;
