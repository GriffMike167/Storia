import React from 'react';
import { View, Text, Image } from 'react-native';
import {Marker} from 'react-native-maps'
import styles from './styles'
const CustomMarker = (props) => {
        const { coordinate, price, image, onPress, isSelected } = props;
    return (
        <Marker
        coordinate={ coordinate } onPress={onPress}
        // title={marker.title}
        // description={marker.description}
      >
        <View style={{backgroundColor: isSelected ? 'pink' : 'white', padding: 5, borderRadius: 20, borderColor: 'pink', borderWidth: 3, }}>
          <Image style={styles.imaage} source={ { uri: image }}/>
          <Text style={{color: 'midnightblue', fontWeight: 'bold'}}>${price} /hr</Text>
        </View>
  
      </Marker>
      

    )
}
export default CustomMarker