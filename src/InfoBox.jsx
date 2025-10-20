import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({result}){
    const init_url = "https://plus.unsplash.com/premium_photo-1661934660615-4918f28476f9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2luZG1pbGx8ZW58MHx8MHx8fDA%3D";

    const hot_url = "https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_url = "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_url = "https://images.unsplash.com/photo-1534314896047-f27062494411?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div>
            <h4>Weather Today: {result.weather}</h4>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {result.humidity > 80 ? rain_url : (result.temp > 15 ? hot_url : cold_url)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.city} {result.humidity > 80 ? <ThunderstormIcon /> : (result.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />)}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
          <p>Temperature : {result.temp}&deg;C</p>
          <p>Humidity : {result.humidity}</p>
          <p>Min Temperature : {result.minTemp}&deg;C</p>
          <p>Max Temperature : {result.maxTemp}&deg;C</p>
          <p>Weather is <i>{result.weather}</i> and feels like : {result.feelsLike}&deg;C</p>
          
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}