import React from 'react';
import {View, Text, ImageBackground, Pressable, ScrollView, Image} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView scrollEnabled = {true} vertical>
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
    <Text style={styles.promoTitle} scrollEnabled = {true}>Venues</Text>
    <View style={styles.promoContanier} scrollEnabled = {true}>
      <View style={styles.innerContanier}>
      <ImageBackground style={styles.imageTwo} source={require('../../../assets/images/21.jpg')} >
      <Text style={styles.titleTwo}>Ma Mansion</Text>
      </ImageBackground>
      </View>
    </View>
      <Text  style={styles.promoTwoTitle}>Catering</Text>
    <View style={styles.promoContanier} scrollEnabled = {true}>
      <View style={styles.innerContanier} scrollEnabled = {true}>
      <ImageBackground style={styles.imageTwo} source={require('../../../assets/images/31.jpeg')} >
      <Text style={styles.titleTwo}>CN Catering</Text>
      </ImageBackground>
      </View>
    </View>
    </ScrollView>


  );
};

export default HomeScreen;
