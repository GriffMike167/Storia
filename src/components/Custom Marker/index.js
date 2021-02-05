import React from 'react';
import { View, Text, Image } from 'react-native';
import {Marker} from 'react-native-maps'
import styles from './styles'
const CustomMarker = (props) => {
        const { coordinate, price, image } = props;
    return (
        <Marker
        coordinate={ coordinate }
        // title={marker.title}
        // description={marker.description}
      >
        <View style={{backgroundColor:'white', padding: 5, borderRadius: 20, borderColor: 'pink', borderWidth: 3, }}>
          <Image style={styles.imaage} source={ { uri: image }}/>
          <Text style={{color: 'midnightblue', fontWeight: 'bold'}}>${price} /hr</Text>
        </View>
  
      </Marker>
      

    )
}
export default CustomMarker