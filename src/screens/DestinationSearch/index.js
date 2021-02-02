import React, {useState} from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';



const DestinationSearch = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where would you like to look?"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} color="grey" />
            </View>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearch;
