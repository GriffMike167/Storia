import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 28,
    height: 28,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingTop: 30,
  },
});

export default styles;
