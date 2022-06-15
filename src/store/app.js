import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: false,
    loadingText: '',
    message: {
      text: '',
      type: '',
    },
  },
  reducers: {
    setLoading(state, { payload: loading }) {
      state.loading = loading?.state ?? false
      state.loadingText = loading?.text ?? ''
    },

    setMessage(state, { payload: message }) {
      state.message.text = message.text || ''
      state.message.type = message.type || ''
    },
  },
})

export const {
  setLoading,
  setMessage,
} = appSlice.actions

export default appSlice.reducer