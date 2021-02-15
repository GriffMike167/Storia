import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post';
// import {API, graphqlOperation} from 'aws-amplify';
// import {listPosts} from '../../graphql/queries';

const SearchResultsScreen = (props) => {
  const {posts} = props;
  // const [post, setPosts] = useState([]);
  console.log(props);
  console.log(posts);
  // console.log(viewport);

  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
