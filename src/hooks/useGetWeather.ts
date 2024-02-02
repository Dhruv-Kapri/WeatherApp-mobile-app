// import {WEATHER_API_KEY} from '@env';
import Config from 'react-native-config';
import * as Location from 'expo-location';
import {useEffect, useState} from 'react';

const WEATHER_API_KEY = Config.WEATHER_API_KEY;

const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState<number[] | number>([]);
  const [lon, setLon] = useState<number[] | number>([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      setError('Could not load weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLat(loc.coords.latitude);
      setLon(loc.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};

export default useGetWeather;
