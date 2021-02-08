import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
    borderTopEndRadius: 150 / 2,
    borderColor: 'midnightblue',
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
    top: 50,
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
  promoContanier: {
    
      height: 50,
      padding: 15,
      opacity: 0.9,
  
      // flexDirection:'row',
      // alignItems: 'center',
      // overflow: 'hidden',
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
    height: 50,
    paddingLeft: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    // overflow: 'hidden',
    color: 'midnightblue',
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
  innerTwoContainer: {
    height: 50,
    paddingLeft: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    // overflow: 'hidden',
    color: 'midnightblue',
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

  imageTwo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
    borderRadius: 15,
    borderColor: 'midnightblue',
    paddingTop: 80,
  },
  imageThree: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
    borderRadius: 15,
    borderColor: 'midnightblue',
    paddingTop: 80,
  },
  titleTwo: {
    fontSize: 30,
    fontWeight: '900',
    color: 'midnightblue',
    width: '70%',
    paddingTop: 90,
    paddingRight: 5,
    marginLeft: 5,
    fontFamily: 'Savoye LET',
  },
  titleThree: {
    fontSize: 30,
    fontWeight: '900',
    color: 'midnightblue',
    width: '70%',
    paddingTop: 90,
    paddingRight: 5,
    marginLeft: 5,
    fontFamily: 'Savoye LET',
  },
  promoTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: 'midnightblue',
    width: '70%',
    paddingTop: 10,
    paddingRight: 5,
    marginLeft: 5,
    fontFamily: 'Savoye LET',
  },
  promoTwoTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: 'midnightblue',
    width: '70%',
    paddingTop: 200,
    // paddingRight: 5,
    // marginLeft: 5,
    fontFamily: 'Savoye LET',
  },

});

export default styles;
