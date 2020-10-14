import Navigation from './navigation'

import React from 'react'
import { Provider } from 'react-redux'
import store from './config/dva'
import './config/http'

const Router = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default Router
