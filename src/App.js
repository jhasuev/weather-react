import {
  Box,
  Container,
} from '@mui/material'
import WeatherCard from './components/WeatherCard'
import Preloader from './components/Preloader'
import Message from './components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage, setLoading } from './store/app'
import { requestWeather } from './store/weather'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const { weather, lastUpdate } = useSelector(state => state.weather)
  const oneDay = (60 * 1000) * 60 * 3

  useEffect(() => {
    if(lastUpdate + oneDay < Date.now() || !weather) {
      dispatch(setLoading({ state: true, text: 'Detecting your position' }))

      const success = async ({ coords }) => {
        dispatch(setLoading({ state: true, text: 'Getting weather data' }))
        await dispatch(requestWeather(coords))
        dispatch(setLoading(null))
      }

      const error = err => {
        dispatch(setLoading(null))
        dispatch(setMessage({text: err.message, type: 'error'}))
      }
      navigator.geolocation.getCurrentPosition(success, error)
    }
  // eslint-disable-next-line
  }, [])

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
