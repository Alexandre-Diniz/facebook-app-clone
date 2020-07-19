import React from 'react'
import {
  TouchableOpacity,
  View
} from 'react-native'
import {
  SimpleLineIcons
} from '@expo/vector-icons'


export default function ({ setTop, focused, setFocused }) {
  return (
    <TouchableOpacity
      onPress={() => {
        setTop(50)
        setFocused('Menu')
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <SimpleLineIcons name="menu" size={24} color={focused === 'Menu' ? '#1679F5' : '#65666A'} />
        {focused === true ? <View style={{ width: '80%', height: 2, backgroundColor: '#1679F5' }} /> : null}
      </View>
      <View style={{ width:'80%' , height: 2, backgroundColor: focused==='Menu'?'#1679F5':'#FFF' }} />
    </TouchableOpacity>
  )
}