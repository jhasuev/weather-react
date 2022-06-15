import * as React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'

import { getStrDateTime, getTime } from '../helpers'

export default function WeatherCard({ weather }) {
  const weatherItem = weather?.list?.[0]

  const weatherDataList = React.useMemo(() => {
    if (!weather) return null

    return [
      {
        label: 'City',
        content: weather.city.country,
      },
      {
        label: 'Name',
        content: weather.city.name,
      },
      {
        label: 'Sunrise',
        content: getTime(weather.city.sunrise * 1000),
      },
      {
        label: 'Sunset',
        content: getTime(weather.city.sunset * 1000),
      },
    ]
  }, [weather])

  if (!weatherItem) {
    return ''
  }

  return (
    <Card sx={{ width: 290, textAlign: 'center' }} elevation={10}>
      <CardHeader
        title={weatherItem.main.temp + '°C'}
        subheader={getStrDateTime(weatherItem.dt_txt)}
      />
      <CardMedia
        component="img"
        image={`http://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`}
      />
      <CardContent>
         <TableContainer>
          <Table>
            <TableBody>
              {
                weatherDataList.map(item => (
                  <TableRow key={item.label}>
                    <TableCell component="th">
                      { item.label }:
                    </TableCell>
                    <TableCell align="right">
                      { item.content }
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}
