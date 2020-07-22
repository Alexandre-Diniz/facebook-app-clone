import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  AntDesign,
  FontAwesome5
} from '@expo/vector-icons'

export default function ({ react }) {
  const icons = react.icons.map((item, index) => {
    if (item === 'like') {
      return <View key={`${Math.random() * 1000000}`}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          height: 22,
          width: 22,
          borderWidth: 2,
          borderColor: '#FFF',
          backgroundColor: 'blue',
          position: 'absolute',
          left: (react.icons.length - index - 1) * 17
        }}
      >
        <AntDesign key={`${Math.random() * 1000000}`} name="like1" size={10} color="#FFF" />
      </View>
    } else if (item === 'heart') {
      return <View key={`${Math.random() * 1000000}`}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          height: 22,
          width: 22,
          borderWidth: 2,
          borderColor: '#FFF',
          backgroundColor: 'red',
          left: (react.icons.length - index - 1) * 17,
          position: 'absolute'
        }}
      >
        <AntDesign key={`${Math.random() * 1000000}`} name="heart" size={10} color="#FFF" />
      </View>
    } else if (item === 'haha') {
      return <View key={`${Math.random() * 1000000}`}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          height: 22,
          width: 22,
          borderWidth: 1,
          borderColor: '#FFF',
          backgroundColor: 'orange',
          left: (react.icons.length - index - 1) * 17,
          position: 'absolute'
        }}
      >
        <FontAwesome5 key={`${Math.random() * 1000000}`} name="laugh-squint" size={22} color="#FFF" />
      </View>
    }
  })
  return (
    react.icons.length === 0 ?
      <View />
      :
      <View style={{
        width: '100%',
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
      }} >
        {
          react.totalReact !== 0 ?
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              width: 100
            }} >
              {icons}
              <Text style={{ left: (react.icons.length) * 17 + 4, position: 'absolute', color: '#666', fontSize: 14 }} > {react.totalReact} </Text>
            </View>
            :
            <View />
        }
        {
          react.totalComments !== 0 ?
            <Text style={{ color: '#666', fontSize: 13 }} > {react.totalComments} comentários </Text>
            :
            <View />
        }
      </View>
  )
}