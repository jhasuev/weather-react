import {
  Snackbar,
  Alert,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { setMessage } from '../store/app'

export default function Message() {
  const dispatch = useDispatch()
  const { message } = useSelector((state) => state.app)
  const onClose = () => {
    dispatch(setMessage({ text: '', type: '' }))
  }
  return (
    <Snackbar open={!!message.text} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={message.type || 'info'} sx={{ width: '100%' }}>
        {message.text}
      </Alert>
    </Snackbar>
  )
}
