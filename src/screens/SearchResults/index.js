import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const SearchResultsScreen = (props) => {
  const {hours, viewport} = props;
  const [posts, setPosts] = useState([]);
  console.log(props);
  console.log(hours);
  console.log(viewport);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResults = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              and: {
                latitude: {
                  between: [
                    viewport.southwest.latitude,
                    viewport.northeast.latitude,
                  ],
                },
                longitude: {
                  between: [
                    viewport.southwest.longitude,
                    viewport.northeast.longitude,
                  ],
                },
              },

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
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
