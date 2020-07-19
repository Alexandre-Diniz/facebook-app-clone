import React from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native'
import {
  MaterialIcons
} from '@expo/vector-icons'


export default function ({ setTop, focused, setFocused }) {
  return (
    <TouchableOpacity
      onPress={() => {
        setTop(50)
        setFocused('Live')
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }} >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 24,
            height: 20,
            borderRadius: 4,
            borderWidth: 1.5,
            borderColor: focused === 'Live' ? '#1679F5' : '#65666A',
            backgroundColor: focused === 'Live' ? '#1679F5' : '#FFF',
          }} >
          <MaterialIcons name="play-arrow" size={16} color={focused === 'Live' ? '#FFF' : '#65666A'} />
        </View>
        <View style={{ height: 2 }} />
        <View style={{ width: 15, height: 1.5, borderRadius: 2, backgroundColor: focused === 'Live' ? '#1679F5' : '#65666A' }} />
      </View>
      <View style={{ width:'80%' , height: 2, backgroundColor: focused==='Live'?'#1679F5':'#FFF' }} />
    </TouchableOpacity>
  )
}