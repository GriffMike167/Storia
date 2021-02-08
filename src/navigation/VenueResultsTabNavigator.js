import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import VenueResultsScreen from '../screens/VenueResults';

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
      <Tab.Screen name={'map'} component={VenueResultsScreen} />
    </Tab.Navigator>
  );
};

export default VenueResultsTabNavigator;
