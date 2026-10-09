# Weather App (React)

A responsive weather app built with React. Search any city to see the current conditions and a daily forecast, with animated weather icons.

**Live demo:** https://noenoeloveweather.netlify.app

## Features

- Current temperature, description, humidity and wind speed for any city (default: Mawlamyine)
- Daily forecast based on the city's coordinates
- Animated weather icons (`react-animated-weather`)
- Responsive layout with Bootstrap and custom mobile styles

## Tech stack

React 18 (Create React App) · Axios · Bootstrap / React-Bootstrap · OpenWeather API

## Project structure

```
src/
├── App.js               # Layout and footer
├── search_engine.js     # Search form and current weather
├── WeatherForecast.js   # Daily forecast
├── WeatherIcon.js       # Maps weather codes to animated icons
├── img/                 # Background illustrations
└── *.css                # Styles, including mobile_responsive.css
```

## Run locally

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in build/
```

## Notes

- Built as a SheCodes React course project. The OpenWeather API keys in the source are the course-provided demo keys.
- The forecast uses OpenWeather's One Call 2.5 endpoint, which OpenWeather has retired, so the forecast may no longer load.
- Background images in `src/img` include Vecteezy illustrations, which are subject to Vecteezy's license terms.

## Author

**Hsu Myat Noe** · [GitHub](https://github.com/NoeNoe25) · [LinkedIn](https://www.linkedin.com/in/hsu-myat-noe569aa729a/)
