import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    // aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 15,
    overlayColor: 'hidden',
    justifyContent: 'center',
  },
  photographer: {
    marginVertical: 10,
    fontSize: 22,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 22,
    color: '#5b5b5b',
  },
  price: {
    fontSize: 16,
    lineHeight: 22,
    color: '#5b5b5b',
    marginVertical: 10,
  },
  currentPrice: {
    fontSize: 16,
    lineHeight: 22,
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  specialPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    color: '#5b5b5b',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default styles;
