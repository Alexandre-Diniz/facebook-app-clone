import React from 'react'
import {
  View,
  ImageBackground,
  Text
} from 'react-native'

import ProfilePicture from '../ProfilePicture'

export default function ({ path, picture, name, lastname, own }) {
  if (own) {
    return (
      <View style={{
        width: 100,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
      }} >
        <View style={{
          width: '100%',
          height: '90%',
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: '#DDD'
        }} >
          <ImageBackground source={picture} style={{ width: '100%', height: '100%' }} >
            <View
              style={{ left: 10 }}
            >
            </View>
            <Text style={{ bottom: 22, left: 10, fontSize: 12, fontWeight: 'bold', position: 'absolute', color: '#FFF' }} > {name} </Text>
            <Text style={{ bottom: 8, left: 10, fontSize: 12, fontWeight: 'bold', position: 'absolute', color: '#FFF' }} > {lastname} </Text>
          </ImageBackground>
        </View>
      </View>
    )
  }
  return (
    <View style={{
      width: 100,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5
    }} >
      <View style={{
        width: '100%',
        height: '90%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#DDD'
      }} >
        <ImageBackground source={picture} style={{ width: '100%', height: '100%' }} >
          <View
            style={{ left: 10 }}
          >
            <ProfilePicture
              path={require('../../assets/images/mark.jpg')}
              type='status'
            />
          </View>
          <Text style={{ bottom: 22, left: 10, fontSize: 12, fontWeight: 'bold', position: 'absolute', color: '#FFF' }} > {name} </Text>
          <Text style={{ bottom: 8, left: 10, fontSize: 12, fontWeight: 'bold', position: 'absolute', color: '#FFF' }} > {lastname} </Text>
        </ImageBackground>
      </View>
    </View>
  )
}