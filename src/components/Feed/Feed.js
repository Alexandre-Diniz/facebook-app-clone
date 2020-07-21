import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Fontisto
} from '@expo/vector-icons'

import ProfileBar from './ProfileBar'

const data = [
  {
    profileURL: '',
    profileName: 'Alexandre Diniz',
    time: 'Agora mesmo',
    _id: `${Math.round(Math.random() * 1000000)}`,
    visibility: '',
    react: {
      icons: [],
      totalReact: '',
      totalComments: ''
    },
    content: {
      type: '',
      value: ''
    },
    comments: [
      {
        profileURL: '',
        profileName: '',
        text: '',
      }
    ]
  }
]

export default function () {

  return data.map(item => {
    return (
      <View key={item._id} >
        <ProfileBar
          time='Agora mesmo'
          profileName='Alexandre Diniz'
          visible='world'
        />
        <View style={{ width: '100%', height: 10, backgroundColor: '#C8CDD1' }} />
      </View>
    )
  })
}