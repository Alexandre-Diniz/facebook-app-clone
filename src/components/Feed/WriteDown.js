import React from 'react'
import {
  View,
  Text
} from 'react-native'
import ProfilePicture from '../ProfilePicture'
import {
  SimpleLineIcons
} from '@expo/vector-icons'

export default function ({ source }) {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom:10,
      }}
    >
      <ProfilePicture
        path={source}
      />
      <View style={{ width: 10 }} />
      <View style={{
        height: '100%',
        flex: 1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#EEE',
        justifyContent:'space-between'
      }} >
        <Text style={{color:'#666',fontSize:16}} >Escreva um commentário...</Text>
        <SimpleLineIcons name="camera" size={20} color="#666" />
        <SimpleLineIcons name="emotsmile" size={20} color="#666" />
      </View>
    </View>
  )
}