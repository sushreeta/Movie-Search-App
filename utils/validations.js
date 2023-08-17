import {PrivateKeyManager} from './privateVariables';

export const isObjectEmpty = obj => {
  return Object.keys(obj).length === 0;
};

export const getImagePath = ({posterPath}) => {
  const KeyManager = PrivateKeyManager.getInstance();
  const tmdbBaseImageUrl = KeyManager.getTmdbBaseImageUrl();

  // Available image sizes: "w92", "w154", "w185", "w342", "w500", "w780", "original"
  const imageSize = 'w500';

  return tmdbBaseImageUrl + imageSize + posterPath;
};
