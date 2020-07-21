import React from 'react'
import {
  Text,
  View
} from 'react-native'
import {
  Fontisto
} from '@expo/vector-icons'

import ProfilePicture from '../ProfilePicture'

export default function ({ time, profileName, visible, profileURI=null }) {
  const visibleIcon = (type) => {
    if (type === 'world') {
      return <Fontisto name="earth" size={12} color="#666" />
    }
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          alignItems: 'center',
          paddingLeft: 10
        }}
      >
        <ProfilePicture
          path={profileURI}
        />
        <View style={{
          left: 10,
          height: '60%',
          justifyContent: 'space-between',
        }} >
          <Text style={{ fontWeight: 'bold', fontSize: 15 }} > {profileName} </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 16 }} >
            <Text style={{ fontSize: 13, color: '#666' }} >{time}</Text>
            <View style={{ width: 3, height: 3, borderRadius: 2, backgroundColor: '#666', marginHorizontal: 4 }} />
            {visibleIcon(visible)}
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', top: 10, right: 10 }} >
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#666', marginHorizontal: 1.0 }} />
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#666', marginHorizontal: 1.0 }} />
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#666', marginHorizontal: 1.0 }} />
      </View>
    </View>
  )
}