import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearch';
import HoursScreen from '../screens/Hours';
import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen';
import VenueResultsScreen from '../screens/VenueResults';
import VenueResultsTabNavigator from './VenueResultsTabNavigator';

const Stack = createStackNavigator();



const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearch}
          options={{title: 'Search by City'}}
        />
        <Stack.Screen
          name={'Venue Search'}
          component={VenueResultsTabNavigator}
          options={{title: 'Venues by City'}}
        />
        <Stack.Screen
          name={'Hours'}
          component={HoursScreen}
          options={{title: 'Photographer Needed Info'}}
        />
         <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={{title: 'Photographer'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
