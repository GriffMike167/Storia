import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import {useRoute} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  const route = useRoute();
  const {hours} = route.params;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'midnightblue',
        indicatorStyle: {backgroundColor: 'pink'},
        fontStyle: 'bold',
        fontSize: 30,
      }}>
      <Tab.Screen name={'list'}>
        {() => <SearchResultsScreen hours={hours} />}
      </Tab.Screen>
      <Tab.Screen name={'map'}>
        {() => <SearchResultsMap hours={hours} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
