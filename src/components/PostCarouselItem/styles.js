import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 10,
    // flexDirection:'row',
    // alignItems: 'center',
    overflow: 'hidden',
    flex: 1,



    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 2.44,
    shadowRadius: 9.27,

    elevation: 70,
  },

  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    color: 'midnightblue',


  },

  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  photographer: {
    marginVertical: 10,
    color: 'midnightblue',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,

  },
  description: {
    fontSize: 15,
    color: 'midnightblue',
    fontWeight: 'bold'

  },
  priceContainer: {
    fontSize: 15,
    marginVertical: 10,
    alignItems: 'center',
    color: 'midnightblue',
    fontWeight: 'bold'

  },
  currentPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
    color: 'midnightblue',

  },
  price: {
    fontWeight: 'bold',
    color: 'midnightblue',

  },
  totalPrice: {
    color: 'midnightblue',
    textDecorationLine: 'underline',
    
  }
});

export default styles;