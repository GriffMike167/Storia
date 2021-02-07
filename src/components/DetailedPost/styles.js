import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    opacity: 0.8,
    // justifyContent: 'center',
    paddingTop: 35,
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
    fontSize: 22,
    color: 'midnightblue',
  },
  description: {
    fontSize: 18,
    lineHeight: 22,
    color: 'midnightblue',
  },
  price: {
    fontSize: 16,
    lineHeight: 22,
    color: 'midnightblue',
    marginVertical: 10,
  },
  currentPrice: {
    fontSize: 16,
    lineHeight: 22,
    color: 'midnightblue',
    textDecorationLine: 'line-through',
  },
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
  equipmentContainer: {
    fontSize: 18,
    lineHeight: 22,
    color: 'midnightblue',
    marginVertical: 10,
  },
  equipment: {
    // fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: 'midnightblue',
  },
  props: {
    // fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    color: 'midnightblue',
  },
  workExperince: {
    // fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: 'midnightblue',
  },
  venuesWorked: {
    // fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: 'midnightblue',
  },
});

export default styles;