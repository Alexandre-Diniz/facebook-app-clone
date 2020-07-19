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
        setFocused('Games')
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <View
        style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <View
          style={{
            width: 23,
            height: 22,
            borderRadius: 1,
            borderWidth: 1.4,
            borderColor: focused === 'Games' ? '#1679F5' : '#65666A',
            backgroundColor:focused === 'Games' ? '#1679F5' : '#FFF'
          }} >

          <View style={{ flex: 28.5 }} />
          <View style={{ flex: 7.25, flexDirection: 'row', }}>
            <View style={{ flex: 3, }} />
            <View style={{ flex: 7, backgroundColor: focused === 'Games' ? '#FFF' : '#65666A' }} />
          </View>

          <View style={{ flex: 28.5, flexDirection: 'row', }}>
            <View style={{ flex: 30 }} />
            <View style={{ flex: 8, backgroundColor: focused === 'Games' ? '#FFF' : '#65666A' }} />
            <View style={{ flex: 62 }} />
          </View>

          <View style={{ flex: 7.25, flexDirection: 'row' }}>
            <View style={{ flex: 32 }} />
            <View style={{ flex: 39, backgroundColor: focused === 'Games' ? '#FFF' : '#65666A' }} />
            <View style={{ flex: 32 }} />
          </View>

          <View style={{ flex: 28.5, flexDirection: 'row', }}>
            <View style={{ flex: 61 }} />
            <View style={{ flex: 8, backgroundColor: focused === 'Games' ? '#FFF' : '#65666A' }} />
            <View style={{ flex: 31 }} />
          </View>

        </View>
      </View>
      <View style={{ width:'80%' , height: 2, backgroundColor: focused==='Games'?'#1679F5':'#FFF' }} />
    </TouchableOpacity>
  )
}