import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native'

import { scaleSize, setSpText } from '../../utils/scale'

const Home = props => {
  useEffect(() => {
    props.dispatch({
      type: 'home/getImg',
    })
  }, [])

  const handleGetImg = () => {
    props.dispatch({
      type: 'home/getImg',
    })
  }

  const handlePress = () => {
    const { navigation } = props
    navigation.navigate('Order')
  }

  return (
    <View style={styles.container}>
      <Text>home</Text>
      <TouchableOpacity onPress={handleGetImg}>
        <Image source={{ uri: props.home.img }} style={styles.logo} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <Text>to order screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'skyblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: scaleSize(500),
    height: scaleSize(500),
    backgroundColor: 'orange',
    marginBottom: scaleSize(50),
    marginTop: scaleSize(50),
  },
})

export default connect(({ home }) => ({
  home,
}))(Home)
