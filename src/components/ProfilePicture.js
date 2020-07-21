import React from 'react'
import {
  View,
  Image
} from 'react-native'

export default function ({ path, type = 'normal' }) {
  if (type == 'normal') {
    return (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 40,
          overflow: 'hidden',
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
        <Image source={path} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
      </View>
    )
  } else if (type == 'online') {
    return (
      <View>
        <View style={{ height: 10 }} />
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            overflow: 'hidden',
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
          <Image source={path} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
        </View>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 14,
            backgroundColor: '#FFF',
            position: 'relative',
            bottom: 15,
            left: 30,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              backgroundColor: 'green'
            }}
          />
        </View>
      </View>
    )
  } else if (type == 'status') {
    return (
      <View>
        <View style={{ height: 10 }} />
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#3274CB'
          }} >
          <View
            style={{
              width: 34,
              height: 34,
              borderRadius: 40,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
            }} >
            <Image source={path} style={{ width: 34, height: 34, resizeMode: 'contain' }} />
          </View>
        </View>
      </View>
    )
  }
}