import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  AntDesign,
  Octicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'

export default function () {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:2
      }}
    >
      <View style={{ width: '94%', height: 0.4, backgroundColor: '#C8CDD1' }} />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          flex:1,
          padding:10
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <AntDesign name="like2" size={20} color="black" />
          <Text>  Curtir</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <Octicons name="comment" size={20} color="black" />
          <Text>  Comentar</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <MaterialCommunityIcons name="share-outline" size={24} color="black" />
          <Text> Compartilhar</Text>
        </View>
      </View>
      <View style={{ width: '94%', height: 0.6, backgroundColor: '#C8CDD1' }} />
    </View>
  )
}