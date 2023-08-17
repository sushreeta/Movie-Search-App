import React, {useRef, useState} from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {isObjectEmpty, makeApiCall} from '../../utils/index.utils';
import {MovieList, PopularMovie} from '../index.components';

export const SearchMovie = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const isEmpty =
    searchResults.length === 0 && searchQuery.length > 0 && isSearchActive;
  const scrollRef = useRef(null);

  const handleSearch = async () => {
    const {data} = await makeApiCall({
      endPoint: 'search/movie',
      queryParams: {query: searchQuery},
    });
    Keyboard.dismiss();
    scrollRef?.current?.scrollToOffset?.({animated: true, offset: 0});
    setIsSearchActive(true);
    if (!isObjectEmpty(data?.results)) {
      setSearchResults(data?.results);
    } else {
      setSearchResults([]);
    }
  };

  const ListEmpty = () => {
    return <Text style={styles.textSearchResultEmpty}>No Search Result</Text>;
  };

  const onTextChange = text => {
    if (text.length === 0) {
      setIsSearchActive(false);
    }
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Enter movie title..."
        value={searchQuery}
        onChangeText={onTextChange}
      />
      <View style={styles.button}>
        <Button title="Search" onPress={handleSearch} />
      </View>

      {/* Search Result Movies  or no result found state*/}
      {isEmpty ? (
        <ListEmpty />
      ) : (
        searchResults.length > 0 && (
          <MovieList movies={searchResults} listHeaderText={'SEARCH RESULTS'} />
        )
      )}
      {/* Popular Movies */}
      {(isEmpty || searchResults.length === 0) && <PopularMovie />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  searchBar: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  movieItem: {
    marginBottom: 10,
  },
  button: {paddingBottom: 12},
  textSearchResultEmpty: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 12,
    color: 'Black',
  },
});
