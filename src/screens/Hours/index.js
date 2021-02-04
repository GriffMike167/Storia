/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HoursScreen = () => {
  const [hours, setHours] = useState(2);
  const [guests, setGuests] = useState(10);
  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Hours Needed</Text>
            <Text style={{color: '#8d8d8d'}}>Minimum 2 Hours</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setHours(Math.max(2, hours - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 22, fontSize: 16}}>{hours}</Text>
            <Pressable
              onPress={() => setHours(hours + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Number of Guest</Text>
            <Text style={{color: '#8d8d8d'}}>
              The number is not to exceed total
            </Text>
            <Text style={{color: '#8d8d8d'}}>Allows for need of assitant</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setGuests(Math.max(10, guests - 10))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 19, fontSize: 16}}>{guests}</Text>
            <Pressable
              onPress={() => setGuests(guests + 10)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => 'Explore'}
        style={{
          marginBottom: 40,
          backgroundColor: 'pink',
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          marginHorizontal: 20,
          borderRadius: 25,
        }}>
        <Text style={{fontSize: 20, color: 'midnightblue', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default HoursScreen;
