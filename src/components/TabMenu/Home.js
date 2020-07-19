import React from 'react'
import {
  View,
  TouchableOpacity,
} from 'react-native'
import {
  Entypo
} from '@expo/vector-icons'


export default function ({ setTop, focused, setFocused }) {
  return (
    <TouchableOpacity
      onPress={() => {
        setTop(100)
        setFocused('Home')
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <Entypo name="home" size={25} color={focused === 'Home' ? '#1679F5' : '#65666A'} />
      </View>
      <View style={{ width: '80%', height: 2, backgroundColor: focused === 'Home' ? '#1679F5' : '#FFF' }} />
    </TouchableOpacity>
  )
}