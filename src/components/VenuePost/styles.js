import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      margin: 20,
      // justifyContent: 'center',
      paddingTop: 5,
      opacity: 0.8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.44,
      shadowRadius: 9.27,
  
      elevation: 70,
  
    },
    image: {
      width: '100%',
      // height: '50%',
      aspectRatio: 3 / 2,
      // resizeMode: 'cover',
      borderRadius: 15,
      // overlayColor: 'hidden',
      // justifyContent: 'center',
    },
    photographer: {
      marginVertical: 10,
      fontSize: 20,
      color: 'midnightblue',
    },
    description: {
      fontSize: 17,
      lineHeight: 22,
      color: 'midnightblue',
    },
    price: {
      fontSize: 16,
      lineHeight: 22,
      color: 'midnightblue',
      marginVertical: 10,
    },
    // currentPrice: {
    //   fontSize: 16,
    //   lineHeight: 22,
    //   color: 'midnightblue',
    //   textDecorationLine: 'line-through',
    // },
    specialPrice: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 22,
      color: 'midnightblue',
    },
    totalPrice: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 22,
      color: 'midnightblue',
      textDecorationLine: 'underline',
    },
    basedPrice: {
      
      color: 'midnightblue',
    },
  });
  
  export default styles;
  