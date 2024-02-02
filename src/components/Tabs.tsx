/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';

const Tab = createBottomTabNavigator();

const Tabs = (): React.JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Current Weather"
        component={CurrentWeather}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon
              name="droplet"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming Weather"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon name="clock" size={25} color={focused ? 'tomato' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon name="home" size={25} color={focused ? 'tomato' : 'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
