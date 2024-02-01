import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import RowText from '../RowText';

const CurrentWeather = (): React.JSX.Element => {
  const {
    wrapper,
    container,
    temp,
    feel,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Icon name="day-sunny" size={100} color="black" />
        <Text style={temp}> 6</Text>
        <Text style={feel}>Feels Like - 5</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageOne={'High: 8'}
          messageTwoStyles={highLow}
          messageTwo={'Low: 6'}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageOne={'Its Sunny'}
        messageTwoStyles={message}
        messageTwo={'Its perfect T-shirt weather'}
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
  temp: {
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
