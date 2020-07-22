import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import {
  AntDesign
} from '@expo/vector-icons'

import ProfileBar from './ProfileBar'
import Content from './Content'
import FeedBack from './FeedBack'

const data = [
  {
    profileURL: '',
    profileName: 'Alexandre Diniz',
    time: 'Agora mesmo',
    _id: `${Math.round(Math.random() * 1000000)}`,
    visibility: '',
    react: {
      icons: [],
      totalReact: 0,
      totalComments: 0
    },
    content: {
      type: 'text',
      value: 'Esse é um exemplo de publicação apenas com conteúdo textual',
      image:{
        source:null,
        exist:false,
        dimensions:[1000,667]
      }
    },
    comments: [
      {
        profileURL: '',
        profileName: '',
        text: '',
      }
    ]
  },
  {
    profileURL: '',
    profileName: 'Alexandre Diniz',
    time: 'Agora mesmo',
    _id: `${Math.round(Math.random() * 1000000)}`,
    visibility: '',
    react: {
      icons: ['heart','haha'],
      totalReact: 100,
      totalComments: 9
    },
    content: {
      type: 'text',
      value: 'Esse é um exemplo de publicação com conteúdo textual e imagem ',
      image:{
        source:{uri:'https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/40307/show/santo-amaro-do-maranhao.jpg'},
        exist:true,
        dimensions:[1000,667]
      }
    },
    comments: [
      {
        profileURL: '',
        profileName: '',
        text: '',
      }
    ]
  },
  {
    profileURL: '',
    profileName: 'Alexandre Diniz',
    time: 'Agora mesmo',
    _id: `${Math.round(Math.random() * 1000000)}`,
    visibility: '',
    react: {
      icons: ['like','heart','haha'],
      totalReact: 4,
      totalComments: 10
    },
    content: {
      type: 'text',
      value: 'Esse é um exemplo de publicação compartilhada',
      image:{
        source:null,
        exist:false,
        dimensions:[1000,667]
      }
    },
    comments: [
      {
        profileURL: '',
        profileName: '',
        text: '',
      }
    ]
  },
  {
    profileURL: '',
    profileName: 'Alexandre Diniz',
    time: 'Agora mesmo',
    _id: `${Math.round(Math.random() * 1000000)}`,
    visibility: '',
    react: {
      icons: ['like','heart'],
      totalReact: 99,
      totalComments: 10
    },
    content: {
      type: 'text',
      value: 'Esse é um exemplo de publicação compartilhada',
      image:{
        source:null,
        exist:false,
        dimensions:[1000,667]
      }
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

  return <ScrollView style={{ flex: 1 }} >
    {data.map(item => {
      return (
        <View key={item._id} >
          <ProfileBar
            time='Agora mesmo'
            profileName='Alexandre Diniz'
            visible='world'
            profileURI={require('../../assets/images/mark.jpg')}
          />
          <Content type={item.content.type} value={item.content.value} image={item.content.image} />
          <FeedBack react={item.react} />
          <View style={{ width: '100%', height: 10, backgroundColor: '#C8CDD1' }} />
        </View>
      )
    })}
  </ScrollView>
}