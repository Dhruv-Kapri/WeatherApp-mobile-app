import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import useGetWeather from '../hooks/useGetWeather';

// const CurrentWeather = ({weatherData}): React.JSX.Element => {
const CurrentWeather = (): React.JSX.Element => {
  const {
    wrapper,
    container,
    tempStyles,
    feel,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {loading, error, weather, lat, lon} = useGetWeather();
  console.log(loading, error, weather, lat, lon);

  // const {
  //   main: {temp, feels_like, temp_max, temp_min},
  //   weather,
  // } = weatherData;

  // const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        // {backgroundColor: weatherType[weatherCondition].backgroundColor},
      ]}>
      <View style={container}>
        {/* delete later */}
        <Icon name="sun" size={100} color="black" />
        <Text style={tempStyles}> 6</Text>
        <Text style={feel}>Feels Like - 5</Text>
        {/* <Icon
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyle}>{temp}</Text>
        <Text style={feel}>{`Feels Like - ${feels_like}`}</Text> */}
        <RowText
          messageOne={'High: 8'} // delete later
          messageTwo={'Low: 6'} // delete later
          // messageOne={`High: ${temp_max}`}
          // messageTwo={`Low: ${temp_min}`}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
          containerStyles={highLowWrapper}
        />
        <Text>
          {loading}, {error}, {weather}, {lat}, {lon}
        </Text>
      </View>
      <RowText
        messageOne={'Its Sunny'} // delete later
        messageTwo={'Its perfect T-shirt weather'} // delete later
        // messageOne={weather[0].description}
        // messageTwo={weatherType[weatherCondition].message}
        messageOneStyles={description}
        messageTwoStyles={message}
        containerStyles={bodyWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    fontSize: 48,
  },
  feel: {
    fontSize: 24,
  },
  highLow: {
    fontSize: 24,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    textAlign: 'left',
  },
  message: {
    textAlign: 'left',
    fontSize: 30,
  },
});

export default CurrentWeather;
