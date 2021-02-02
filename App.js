/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
// import HomeScreen from './src/screens/Home';
// import Post from './src/components/Post';
// import feed from './assets/data/feed';
// import SearchResultsScreen from './src/screens/SearchResults';

// const post1 = feed[2];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultsScreen /> */}
        <DestinationSearch />
      </SafeAreaView>
    </>
  );
};

export default App;