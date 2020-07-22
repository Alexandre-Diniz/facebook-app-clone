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
import Interact from './Interact'
import Comment from './Comment'

export default function ({ data }) {

  return <ScrollView style={{ flex: 1 }} >
    {data.map(item => {
      return (
        <View key={item._id} >
          <ProfileBar
            time='Agora mesmo'
            profileName='Alexandre Diniz'
            visible='world'
            profileURI={item.profileURL}
          />
          <Content type={item.content.type} value={item.content.value} image={item.content.image} />
          <FeedBack react={item.react} />
          <Interact/>
          <Comment comment={item.comments} source={item.profileURL} />
          <View style={{ width: '100%', height: 10, backgroundColor: '#C8CDD1' }} />
        </View>
      )
    })}
  </ScrollView>
}