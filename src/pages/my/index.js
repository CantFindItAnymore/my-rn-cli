import React, { useState } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

const My = props => {
  const handlePress = () => {
    const {navigation} = props
    navigation.navigate('Register')
  }
  return (
    <View>
      <Text>My</Text>
      <TouchableOpacity onPress={handlePress}><Text>to login</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default My
