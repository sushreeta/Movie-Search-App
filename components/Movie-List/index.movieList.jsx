import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import {getImagePath} from '../../utils/index.utils';

export const MovieList = ({movies, listHeaderText}) => {
  const RenderItem = ({item, index}) => {
    const {title, release_date, overview, poster_path} = item;
    const _poster = getImagePath({posterPath: poster_path});

    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{
            uri: _poster,
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.font14}>Release Date: {release_date}</Text>
        <Text style={styles.font14}>Overview: {overview}</Text>
      </View>
    );
  };

  const ListHeader = () => {
    return <Text style={styles.headerText}>{listHeaderText}</Text>;
  };

  return (
    <FlatList
      data={movies}
      renderItem={RenderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item?.id?.toString?.()}
      contentContainerStyle={styles.container}
      ListHeaderComponent={ListHeader}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    paddingBottom: 360,
  },
  headerText: {fontSize: 16, fontWeight: 'bold', marginVertical: 12},
  movieItem: {
    marginBottom: 10,
  },
  font14: {fontSize: 14},
  title: {fontSize: 16, fontWeight: 'bold', marginTop: 8},
  image: {width: 150, height: 220},
  itemContainer: {marginBottom: 20},
});
