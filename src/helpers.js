export const getStrDateTime = str => {
  let [date, time] = str.split(' ')
  date = date.split('-').reverse().join('.')
  time = time.split(':').splice(0, 2).join(':')
  
  return `${date} ${time}`
}

export const getTime = (ms) => {
  const dt = new Date(ms)

  return dt.getHours() + ':' + dt.getMinutes()
}