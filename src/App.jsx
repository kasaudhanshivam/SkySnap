import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import WeatherApp from './WeatherApp';

function App() {
    return (
    <>
      {/* <h1>Material UI Demo</h1>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" color="success">
  Success
</Button>
<Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Alert severity="error">Dont delete.</Alert> */}

    <WeatherApp />
      

    </>
  )
}

export default App