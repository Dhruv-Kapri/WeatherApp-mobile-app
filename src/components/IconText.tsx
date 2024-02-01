import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconTextProps from '../types/iconTextProps.type';

const IconText = (props: IconTextProps) => {
  const {iconName, iconColor, bodyText, bodyTextStyles} = props;
  const {container} = styles;

  return (
    <View style={container}>
      <Icon name={iconName} size={50} color={iconColor} />
      <Text style={bodyTextStyles}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default IconText;
