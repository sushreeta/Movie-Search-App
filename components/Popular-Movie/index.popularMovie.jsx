import React, {useEffect, useState} from 'react';
import {isObjectEmpty, useHttp} from '../../utils/index.utils';
import {CustomWrapper} from '../Wrapper/index.wrapper';
import {MovieList} from '../index.components';

export const PopularMovie = () => {
  const [movies, setmovies] = useState([]);
  const {data, error, loading, refetch} = useHttp({
    endPoint: 'movie/popular',
    queryParams: {
      language: 'en-US',
      page: 1,
    },
  });
  useEffect(() => {
    if (!isObjectEmpty(data) && !error) {
      setmovies(data.results);
    }
  }, [data, error]);

  return (
    <CustomWrapper
      isLoading={loading}
      isError={error?.length > 0}
      isEmpty={movies?.length < 1}
      onRefresh={refetch}>
      <MovieList movies={movies} listHeaderText={'POPULAR MOVIES'} />
    </CustomWrapper>
  );
};
