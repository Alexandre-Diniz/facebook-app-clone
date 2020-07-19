import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  FontAwesome,
  MaterialCommunityIcons
} from '@expo/vector-icons'

export default function () {
  return (
    <View style={{
      width: '100%',
      height: 50,
      top: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    }} >
      <Text style={{ color: '#1679F5', fontSize: 28, fontWeight: 'bold' }} > facebook </Text>
      <View style={{
        flexDirection: 'row',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
      }} >
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 40,
          height: 40,
          backgroundColor:'#F3F4F8',
          borderRadius:40
        }} >
          <FontAwesome name="search" size={24} color="black" />
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 40,
          height: 40,
          backgroundColor:'#F3F4F8',
          borderRadius:40,
          marginLeft:10,
        }} >
          <MaterialCommunityIcons name="facebook-messenger" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}