import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'pink'} />
        <Text style={styles.searchButtonText}>Where is your Wedding</Text>
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
