/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {SearchMovie} from './components/index.components';

function App(): JSX.Element {
  // const [data, setData] = useState([]);

  const backgroundStyle = {
    backgroundColor: Colors.light,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.title}>MOVIES</Text>
      {/* search bar */}
      <SearchMovie />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 24, fontWeight: 'bold', margin: 10, textAlign: 'center'},
});

export default App;
