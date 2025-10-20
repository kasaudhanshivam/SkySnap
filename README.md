# 🌤️ SkyLite — Minimal Weather App

SkyLite is a **minimal, modern React weather app** that provides real-time weather updates and forecasts using the **OpenWeather API**.  
Built with **Vite** and **Material UI**, it features a clean interface and responsive design to keep you informed about the weather anywhere, anytime.

---

## Features

- Search weather by city name  
- Displays temperature, humidity, and feels-like conditions  
- Real-time weather description and forecasts  
- Minimal, responsive UI using Material UI components  
- Environment variables for secure API key storage  

---

## Tech Stack

- **React (Vite)** — Fast and modern frontend framework  
- **Material UI (MUI)** — For stylish and accessible UI components  
- **OpenWeatherMap API** — Provides live weather data  
- **JavaScript (ES6+)**  
- **CSS3**  

---

## Folder Structure

```bash
WEATHERAPP/
│
├── public/
├── src/
│ ├── assets/
│ ├── App.jsx
│ ├── App.css
│ ├── InfoBox.jsx
│ ├── SearchBox.jsx
│ ├── WeatherApp.jsx
│ ├── main.jsx
│ └── index.css
│
├── .env
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
## Setup & Installation

1. Clone the repository  
   https://github.com/kasaudhanshivam/SkySnap.git  
   cd SkySnap 

2. Install dependencies  
   npm install  

3. Create an .env file in the root directory  
   VITE_API_KEY=your_openweather_api_key_here  

4. Start the development server  
   npm run dev  

5. Open your browser at http://localhost:5173

## Environment Variables

Create a `.env` file in your project root with:
```bash
VITE_API_KEY=your_openweather_api_key
```

## Future Improvements

- Add 7-day weather forecast  
- Detect user’s current location  
- Dynamic background based on weather condition  
- Add temperature unit toggle (°C / °F)  
- Include sunrise and sunset times  

---

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to **fork this repo** and submit a **pull request**.

---

## 💙 Developed by 

**Shivam Kasaudhan**