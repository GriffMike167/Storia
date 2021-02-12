import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from '../navigation/ExploreNavigator';
// import SearchResultsMap from '../screens/SearchResultsMap';
// import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/Profile';
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'midnightblue',
        indicatorStyle: {backgroundColor: 'pink'},
        fontStyle: 'bold',
        fontSize: 30,
      }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({}) => (
            <EvilIcons name="search" size={32} color="pink" fontWeight="bold" />
          ),
        }}
      />
      <Tab.Screen
        name={'Saved'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({}) => (
            <EvilIcons name="heart" size={32} color="pink" fontWeight="bold" />
          ),
        }}
      />
      <Tab.Screen
        name={'Messages'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({}) => (
            <EvilIcons
              name="comment"
              size={32}
              color="pink"
              fontWeight="bold"
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({}) => (
            <EvilIcons name="user" size={32} color="pink" fontWeight="bold" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
