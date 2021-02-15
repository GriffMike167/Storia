import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  const route = useRoute();
  const {hours, viewport} = route.params;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResults = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              // and: {
              latitude: {
                between: [
                  viewport.northeast.latitude,
                  viewport.southwest.latitude,
                ],
              },
              longitude: {
                between: [
                  viewport.northeast.longitude,
                  viewport.southwest.longitude,
                ],
              },
              // },

              //     hours: {
              //       ge: hours,
              //     },
              //   },
              // }),
            },
          }),
        );

        setPosts(postsResults.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  });
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'midnightblue',
        indicatorStyle: {backgroundColor: 'pink'},
        fontStyle: 'bold',
        fontSize: 30,
      }}>
      <Tab.Screen name={'list'}>
        {() => <SearchResultsScreen posts={posts} />}
      </Tab.Screen>
      <Tab.Screen name={'map'}>
        {() => <SearchResultsMap posts={posts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
