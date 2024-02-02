import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import {weatherType} from '../utilities/weatherType';

const CurrentWeather = ({weatherData}): React.JSX.Element => {
  const {
    wrapper,
    container,
    tempStyle,
    feel,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: {temp, feels_like, temp_max, temp_min},
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        {backgroundColor: weatherType[weatherCondition].backgroundColor},
      ]}>
      <View style={container}>
        <Icon
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyle}>{temp}</Text>
        <Text style={feel}>{`Feels Like - ${feels_like}`}</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageOne={`High: ${temp_max}`}
          messageTwoStyles={highLow}
          messageTwo={`Low: ${temp_min}`}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageOne={weather[0].description}
        messageTwoStyles={message}
        messageTwo={weatherType[weatherCondition].message}
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
  tempStyle: {
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
