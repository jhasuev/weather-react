import { configureStore } from '@reduxjs/toolkit'
import app from './app'
import weather from './weather'

export default configureStore({
  reducer: {
    app,
    weather,
  },
})