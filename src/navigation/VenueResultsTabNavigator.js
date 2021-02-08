import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import VenueResultsScreen from '../screens/VenueResults';
import VenueResultsMap from '../screens/VenueResultsMap';

const Tab = createMaterialTopTabNavigator();

const VenueResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'midnightblue',
        indicatorStyle: {backgroundColor: 'pink'},
        fontStyle: 'bold',
        fontSize: 30,
        padddingTop: 35,
      }}>
      <Tab.Screen name={'list'} component={VenueResultsScreen} />
      <Tab.Screen name={'map'} component={VenueResultsMap} />
    </Tab.Navigator>
  );
};

export default VenueResultsTabNavigator;
