import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: JSON.parse(localStorage.weather || 'null'),
    lastUpdate: JSON.parse(localStorage.lastUpdate || '0'),
  },
  reducers: {
    setWeather(state, { payload: weather }) {
      state.weather = weather
      state.lastUpdate = Date.now()

      localStorage.weather = JSON.stringify(state.weather)
      localStorage.lastUpdate = JSON.stringify(state.lastUpdate)
    },
  },
})

export const {
  setWeather,
} = weatherSlice.actions

export default weatherSlice.reducer