import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
    borderRadius: 150,

  },

  title: {
    fontSize: 100,
    fontWeight: '900',
    color: 'pink',
    width: '70%',
    paddingTop: 10,
    paddingRight: 5,
    marginLeft: 5,
    fontFamily: 'Savoye LET',
  },
  searchButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 18,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 90,
    width: '90%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'midnightblue',
    marginLeft: 25,
    marginTop: -30,
  },
  searchButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'midnightblue',
    marginLeft: 5,
    marginTop: 0,
  },
});

export default styles;
