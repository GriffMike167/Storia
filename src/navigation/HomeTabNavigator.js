import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from '../navigation/ExploreNavigator';
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
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
        component={HomeScreen}
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
