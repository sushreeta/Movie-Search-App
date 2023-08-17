export const PrivateKeyManager = (() => {
  let instance;

  function init() {
    // Private variables
    const API_KEYS = '0ed378792310bb901a924241ff6043fe';
    const TOKEN =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQzNzg3OTIzMTBiYjkwMWE5MjQyNDFmZjYwNDNmZSIsInN1YiI6IjY0ZGNiNWRhMzcxMDk3MDExYzUyMzU5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.maUlcyl-XeuiZigkCizN4-ikIoNVf5wLtXpGqEngoxQ';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/';

    // Private methods
    function getApiKey(keyName) {
      return API_KEYS;
    }
    function getToken(tokenName) {
      return TOKEN;
    }
    function getBaseUrl(tokenName) {
      return BASE_URL;
    }
    function getTmdbBaseImageUrl(tokenName) {
      return IMAGE_PATH;
    }

    // Public methods
    return {
      getApiKey,
      getToken,
      getBaseUrl,
      getTmdbBaseImageUrl,
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

// Note: Below is the use case of the above constructor function
// const KeyManager = PrivateKeyManager.getInstance();
