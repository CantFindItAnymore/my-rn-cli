import request from '../utils/axios'

export function getImg() {
  return request({
    url: 'https://dog.ceo/api/breeds/image/random',
  })
}
