interface WeatherData {
  dt: number;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      description: string;
    },
  ];
}

export default WeatherData;
