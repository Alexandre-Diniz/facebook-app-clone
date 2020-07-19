import React from 'react'
import {
  TouchableOpacity,
  View
} from 'react-native'
import {
  Entypo
} from '@expo/vector-icons'


export default function ({ setTop,focused, setFocused }) {
  return (
    <TouchableOpacity
      onPress={() => {
        setTop(50)
        setFocused('Notifications')
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Entypo name="bell" size={27} color={focused === 'Notifications' ? '#1679F5' : '#65666A'} />
      </View>
      <View style={{ width:'80%' , height: 2, backgroundColor: focused==='Notifications'?'#1679F5':'#FFF' }} />
    </TouchableOpacity>
  )
}