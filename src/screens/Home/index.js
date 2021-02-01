import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
const HomeScreen = () => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search Photgraphers')}>
        <Fontisto name="search" size={25} color={'pink'} />
        <Text style={styles.searchButtonText}>Search Photgraphers</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/10.jpeg')}
        style={styles.image}>
        <Text style={styles.title}>Storia</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Expolore Button Clicked')}>
          <Text style={styles.buttonText}>Explore Photgraphers</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
