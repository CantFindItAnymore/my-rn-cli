import axios from 'axios'

// axios.defaults.baseURL = 'http://10.0.0.225:9900/'
axios.defaults.headers.Authorization = 'Basic Y2xpZW50UEM6ZmZlYTMyYzJiNDY5N2I2Mzk2Yzc4MWE5ZGFkZGM1YzQ='

axios.interceptors.request.use(
  config => {
    console.log('config', config)
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

axios.interceptors.response.use(
  res => {
    console.log('res', res)
    return res.data
  },
  err => {
    return Promise.reject(err)
  },
)
