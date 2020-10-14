import axios from 'axios'
// toast提示框
import toast from './toast'

const _showErr = err => {
  if (!err) {
    err = '未知错误'
    toast.show(err)
  }
}

export default ({ url, method = 'GET', data, type = 'formData' }) => {
  if (method === 'GET') {
    return axios.get(url, data)
      .then(response => {
        return response
        if (response && parseInt(response.resp_code) === 0) {
          console.log('resolve')
          return response.datas
        } else {
          console.log('reject')
          _showErr(res.resp_msg)
        }
      })
      .catch(err => {
        Promise.reject(err)
      })
  } else if (method === 'POST') {
    return axios.post(url, data).then(
      response => {
        const data = response.data
        console.log('post', data)
        if (data && parseInt(data.resp_code) == 0) {
          resolve(data.data)
        } else {
          _showErr(res.resp_msg)
        }
      },
      err => {
        Promise.reject(err)
      },
    )
  }
}
