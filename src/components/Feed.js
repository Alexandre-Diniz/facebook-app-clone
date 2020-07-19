import React from 'react'
import {
  ScrollView
} from 'react-native'

import NewPublish from './NewPublish'

export default function () {
  return (
    <ScrollView style={{flex:1}} >
      <NewPublish />
    </ScrollView>
  )
}