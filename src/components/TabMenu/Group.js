import React from 'react'
import {
  TouchableOpacity,
  View
} from 'react-native'
import {
  MaterialCommunityIcons
} from '@expo/vector-icons'


export default function ({ setTop, focused, setFocused }) {
  return (
    <TouchableOpacity
      onPress={() => {
        setTop(50)
        setFocused('Group')
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
            width: 25,
            height: 25,
            borderRadius: 30,
            borderWidth: 1.5,
            borderColor: focused === 'Group' ? '#1679F5' : '#65666A',
            backgroundColor: focused === 'Group' ? '#1679F5' : '#FFF',
          }} >
          <MaterialCommunityIcons name="account-group" size={18} color={focused === 'Group' ? '#FFF' : '#65666A'} />
        </View>
      </View>
      <View style={{ width: '80%', height: 2, backgroundColor: focused === 'Group' ? '#1679F5' : '#FFF' }} />
    </TouchableOpacity>
  )
}