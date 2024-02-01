import React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import WeatherData from '../../interface/weatherData.interface';
import ListItem from '../ListItem';

const DATA: WeatherData[] = [
  {
    dt: 1661875200,
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        description: 'light rain',
      },
    ],
  },
  {
    dt: 1662008000,
    main: {
      temp_min: 295.12,
      temp_max: 297.89,
    },
    weather: [
      {
        description: 'clear sky',
      },
    ],
  },
  {
    dt: 1662140800,
    main: {
      temp_min: 293.45,
      temp_max: 296.78,
    },
    weather: [
      {
        description: 'scattered clouds',
      },
    ],
  },
];

const UpcomingWeather = (): React.JSX.Element => {
  const renderItem = ({item}: {item: WeatherData}) => (
    <ListItem
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].description}
    />
  );

  const {container, image} = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}>
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt.toString()}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lightblue',
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
