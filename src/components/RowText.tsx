import React from 'react';
import {Text, View} from 'react-native';
import rowTextProps from '../types/rowTextProps.type';

const RowText = (props: rowTextProps): React.JSX.Element => {
  const {
    containerStyles,
    messageOneStyles,
    messageOne,
    messageTwoStyles,
    messageTwo,
  } = props;

  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne} </Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
