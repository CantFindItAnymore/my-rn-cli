// 其实就是路由配置

import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack'

import { Platform, StyleSheet, StatusBar, Animated } from 'react-native'
import BottomTabs from './BottomTabs'

import SplashScreen from 'react-native-splash-screen'

// 堆栈式导航器
let Stack = createStackNavigator()

// 标签导航器
const Tab = createBottomTabNavigator()

const OrderStack = () => {
  useEffect(() => {
    // SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='float' //每个页面共用一个导航栏
        screenOptions={{
          headerTitleAlign: 'center', //导航栏文字居中
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit, //跳转时导航栏动画效果
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, //跳转时页面动画效果
          gestureEnabled: true, //手势系统
          gestureDirection: 'horizontal', //手势方向
          headerStyle: {
            //导航栏样式
            ...Platform.select({
              android: {
                //安卓的样式
                elevation: 0,
                borderBottomWidth: StyleSheet.hairLineWidth,
              },
              // ios: { //ios的样式
              // }
            }),
          },
        }}
      >
        <Stack.Screen name='Order' component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default OrderStack
