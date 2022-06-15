import {
  Backdrop,
  CircularProgress,
} from '@mui/material'
import { useSelector } from 'react-redux'

export default function Preloader() {
  const { loading, loadingText } = useSelector((state) => state.app)
  return (
    <Backdrop
      sx={{ backgroundColor: '#333', color: '#999' }}
      open={loading}
    >
      <div style={{textAlign: 'center'}}>
        {
          loadingText
          ? <h2 style={{marginBottom: '20px'}}>
              {loadingText}
            </h2>
          : ''
        }
        <CircularProgress color="inherit" />
      </div>
    </Backdrop>
  )
}
