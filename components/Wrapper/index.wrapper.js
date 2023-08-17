import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

export const CustomWrapper = ({
  isLoading = false,
  isError = false,
  isEmpty = false,
  onRefresh = () => {},
  children,
}) => {
  if (isLoading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Something went wrong please try again</Text>
      </View>
    );
  }

  if (isEmpty) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>There is nothing to show</Text>
      </View>
    );
  }

  return <>{children}</>;
};
