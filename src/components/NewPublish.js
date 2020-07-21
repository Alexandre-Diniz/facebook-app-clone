import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Entypo,
  Ionicons,
  MaterialIcons
} from '@expo/vector-icons'

import ProfilePicture from './ProfilePicture'

export default function () {
  return (
    <View style={{
      height: 110,
      width: '100%',
    }} >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 70,
        borderBottomWidth: 0.2,
        borderBottomColor: '#65666A',
      }} >
        <ProfilePicture
          path={require('../assets/images/mark.jpg')}
        />
        <View
          style={{
            height: 40,
            justifyContent: 'center',
            borderColor: '#BBB',
            borderRadius: 40,
            borderWidth: 1,
            paddingLeft: 16,
            width: 280
          }}
        >
          <Text style={{ fontSize: 16 }} > No que você está pensando? </Text>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
      }} >
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          flexDirection:'row'
        }} >
          <Entypo name="video-camera" size={20} color="#EE3A3C" />
          <Text style={{fontSize:12, fontWeight:'bold', color:'#7D7D7F'}} > Ao vivo </Text>
        </View>
        <View style={{ width: 0.5, height: '60%', backgroundColor: '#65666A' }} />
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          flexDirection:'row'
        }} >
          <Ionicons name="md-images" size={22} color="#86BB52" />
          <Text style={{fontSize:12, fontWeight:'bold', color:'#7D7D7F'}} > Foto </Text>
        </View>
        <View style={{ width: 0.5, height: '60%', backgroundColor: '#65666A' }} />
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          flexDirection:'row'
        }} >
          <MaterialIcons name="video-call" size={25} color="#9966F6" />
          <Text style={{fontSize:12, fontWeight:'bold', color:'#7D7D7F'}} > Sala </Text>
        </View>
      </View>
    </View>
  )
}