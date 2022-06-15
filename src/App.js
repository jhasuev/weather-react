import {
  Box,
  Container,
} from '@mui/material'
import WeatherCard from './components/WeatherCard'
import Preloader from './components/Preloader'
import Message from './components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage, setLoading } from './store/app'
import { setWeather } from './store/weather'

import { requestWeather } from './services/WeatherService'

function App() {
  const dispatch = useDispatch()
  const { weather, lastUpdate } = useSelector(state => state.weather)
  const oneDay = (60 * 1000) * 60 * 3

  if(lastUpdate + oneDay < Date.now() || !weather) {
    dispatch(setLoading({ state: true, text: 'Detecting your position' }))

    const success = async ({ coords }) => {
      dispatch(setLoading({ state: true, text: 'Getting weather data' }))
      const weather = await requestWeather(coords)
      dispatch(setLoading(null))
      dispatch(setWeather(weather))
    }

    const error = err => {
      dispatch(setLoading(null))
      dispatch(setMessage({text: err.message, type: 'error'}))
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }

  return (
    <div>
      <Container>
        <Box sx={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Preloader />
          <WeatherCard weather={weather} />
          <Message />
        </Box>
      </Container>
    </div>
  )
}

export default App
