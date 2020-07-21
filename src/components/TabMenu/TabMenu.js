import React, { useState, useEffect } from 'react'
import {
  View,
  Animated
} from 'react-native'

import Home from './Home'
import Group from './Group'
import Live from './Live'
import Games from './Games'
import Notificatins from './Notifications'
import Menu from './Menu'

export default function ({ showModal }) {
  const [top, setTop] = useState(100)
  const [focused, setFocused] = useState('Home')
  useEffect(() => {
    showModal(focused)
  }, [focused])
  return (
    <Animated.View style={{
      width: '100%',
      height: 50,
      top: top,
      position: 'absolute',
      backgroundColor: '#FFF'
    }} >
      <View
        style={{
          width: '100%',
          height: '100%',
          flexDirection:'row'
        }}
      >
        <Home
          setFocused={focused => setFocused(focused)}
          focused={focused}
          setTop={top => {
            console.log(top)
            setTop(top)
          }} />
        <Group
          setFocused={focused => setFocused(focused)}
          focused={focused}
          setTop={top => {
            console.log(top)
            setTop(top)
          }} />
        <Live
          setFocused={focused => setFocused(focused)}
          focused={focused}
          setTop={top => {
            console.log(top)
            setTop(top)
          }} />
        <Games
          setFocused={focused => setFocused(focused)}
          focused={focused}
          setTop={top => {
            console.log(top)
            setTop(top)
          }} />
        <Notificatins
          setFocused={focused => setFocused(focused)}
          focused={focused}
          setTop={top => {
            console.log(top)
            setTop(top)
          }} />
        <Menu
          setFocused={focused => setFocused(focused)}
          focused={focused}
          setTop={top => {
            console.log(top)
            setTop(top)
          }} />
      </View>

      <View style={{ width: '100%', height: 0.2, backgroundColor: '#65666A' }} />

    </Animated.View>
  )
}