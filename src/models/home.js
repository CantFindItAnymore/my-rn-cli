import { getImg } from '../service/home'
export default {
  namespace: 'home',
  state: {
    img: '',
  },

  // 异步
  effects: {
    *getImg(_, { call, put }) {
      const {message} = yield call(getImg)
      console.log('message', message)
      if (message) {
        yield put({
          type: 'getImgSuc',
          payload: message,
        })
      }
    },
  },
  // 同步
  reducers: {
    getImgSuc(state, action) {
      return { ...state, img: action.payload }
    },
  },
}
