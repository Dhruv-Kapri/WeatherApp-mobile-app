import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Tabs from './src/components/Tabs';
import useGetWeather from './src/hooks/useGetWeather';

function App(): React.JSX.Element {
  const {container} = styles;
  const [loading, error, weather] = useGetWeather();
  console.log(loading, error, weather);

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={container}>
      {/* <ActivityIndicator size={'large'} color={'blue'} /> */}
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
