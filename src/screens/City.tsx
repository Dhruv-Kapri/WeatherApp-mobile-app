import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IconText from '../components/IconText';

const City = (): React.JSX.Element => {
  const {
    container,
    imageLayout,
    cityName,
    country,
    cityText,
    populationText,
    populationWrapper,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../assets/city-background.jpg')}
        style={imageLayout}>
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[country, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={8000}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'07:05:20 AM'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'17:05:20 PM'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  country: {
    fontSize: 30,
  },
  cityText: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  populationWrapper: {
    marginTop: 30,
    justifyContent: 'center',
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold',
  },
  riseSetWrapper: {
    marginTop: 30,
    justifyContent: 'center',
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
