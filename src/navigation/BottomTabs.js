import React, { useEffect } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/home'
import Order from '../pages/order'
import My from '../pages/my'
// 标签导航器
const Tab = createBottomTabNavigator()

const HomeTab = props => {
  const getHeaderTitle = () => {
    const { route } = props
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'Home'

    switch (routeName) {
      case 'Home':
        return '首页'
      case 'Order':
        return '订单'
      case 'My':
        return '我的'
      default:
        break
    }
  }

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: getHeaderTitle(),
    })
  }, [props])

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{ tabBarLabel: '首页' }}
      />
      <Tab.Screen
        name='Order'
        component={Order}
        options={{ tabBarLabel: '订单' }}
      />
      <Tab.Screen name='My' component={My} options={{ tabBarLabel: '我的' }} />
    </Tab.Navigator>
  )
}

export default HomeTab
