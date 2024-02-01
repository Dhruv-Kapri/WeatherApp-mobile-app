import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import ItemProps from '../types/itemProps.type';

const ListItem = (props: ItemProps): React.JSX.Element => {
  const {dt, min, max, condition} = props;

  console.log(condition);

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.icon}>
        <Icon name="day-sunny" size={50} color="black" />
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.date}>{dt}</Text>
        <Text style={styles.temp}>{max}</Text>
        <Text style={styles.temp}>{min}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 5,
  },
  icon: {
    // flex: 1,
  },
  itemContent: {
    // flex: 2,
    paddingLeft: 20,
    color: 'white',
  },
  temp: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
});

export default ListItem;
