import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    // opacity: 0.8,
    // justifyContent: 'center',
    // paddingTop: 35,
    // flex: 1,



   
  },
  imageContainer: {
    margin: 20,
    opacity: 0.8,
    // justifyContent: 'center',
    // paddingTop: 35,
    // flex: 1,



    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7.27,

    elevation: 70,
  },
  image: {
    width: '100%',
    // height: '50%',
    // aspectRatio: 3 / 2,
    // resizeMode: 'cover',
    borderRadius: 15,
    // overlayColor: 'hidden',
    // justifyContent: 'center',
  }
})

export default styles