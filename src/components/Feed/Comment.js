import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import {

} from '@expo/vector-icons'
import ProfilePicture from '../ProfilePicture'

export default function ({ comment }) {
  return comment.map(item => {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 5
        }}
        key={`${Math.round(Math.random() * 1000000)}`}
      >
        <ProfilePicture
          path={item.profileURL}
        />
        <View style={{width:10}} />
        <View
        style={{
          flex:1,
          borderRadius:20,
          backgroundColor:'#EEE',
          padding:10
        }}
        >
          <Text style={{fontWeight:'bold'}} >{item.profileName}</Text>
          <Text style={{fontSize:16}} >{item.text}</Text>
        </View>
      </View>
    )
  })
}