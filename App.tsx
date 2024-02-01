import React from 'react';
import {StyleSheet, View} from 'react-native';
import CurrentWeather from './src/pages/CurrentWeather';
import UpcomingWeather from './src/pages/UpcomingWeather';
import City from './src/pages/City';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      {/* <UpcomingWeather /> */}
      {/* <City /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
