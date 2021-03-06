import React from 'react'
import {
  View,
  ScrollView
} from 'react-native'

import NewPublish from '../components/NewPublish'
import ContatosOnline from '../components/ContatosOnline'
import Stories from '../components/Stories/Stories'
import Feed from '../components/Feed/Feed'
import dataFeed from '../data/dataFeed'

export default function () {
  return (
    <View style={{ flex: 1, top: 100 }} >
      <ScrollView style={{ width: '100%', height: '100%' }} >
        <NewPublish />
        <View style={{ width: '100%', height: 10, backgroundColor: '#C8CDD1' }} />
        <ContatosOnline />
        <View style={{ width: '100%', height: 10, backgroundColor: '#C8CDD1' }} />
        <Stories />
        <View style={{ width: '100%', height: 10, backgroundColor: '#C8CDD1' }} />
        <Feed data={dataFeed()} />
        <View style={{ width: '100%', height: 100, backgroundColor: '#FFF' }} />
      </ScrollView>
    </View>
  )
}