import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as WeatherService from '../services/WeatherService'

export const requestWeather = createAsyncThunk(
  'weather/requestWeather',
  async (coors) => {
    const response = await WeatherService.requestWeather(coors)
    return response
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: JSON.parse(localStorage.weather || 'null'),
    lastUpdate: JSON.parse(localStorage.lastUpdate || '0'),
  },
  extraReducers: (builder) => {
    builder.addCase(requestWeather.fulfilled, (state, action) => {
      if (+action?.payload?.cod === 200) {
        state.weather = action.payload
        state.lastUpdate = Date.now()

        localStorage.weather = JSON.stringify(state.weather ?? '')
        localStorage.lastUpdate = JSON.stringify(state.lastUpdate ?? '')
      }
    })
  },
})

// export const {
//   setWeather,
// } = weatherSlice.actions

export default weatherSlice.reducer
