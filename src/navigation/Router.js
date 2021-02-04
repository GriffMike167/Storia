import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearch';
import HoursScreen from '../screens/Hours';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearch}
        />
        <Stack.Screen name={'Hours'} component={HoursScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
