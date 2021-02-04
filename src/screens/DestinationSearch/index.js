import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where would you like to look?"
        onPress={(data, details = null) => {
          console.log(data, details);
          navigation.navigate('Hours');
        }}
        fetchDetails
        styles={{textInput: styles.textInput}}
        query={{
          key: 'AIzaSyC13MxIDC5L4R-GsoNVS30aAdu4XhctdH8',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;
