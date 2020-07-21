import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import TabMenu from './src/components/TabMenu/TabMenu'
import FacebookBar from './src/components/FacebookBar/FacebookBar'
import Home from './src/views/Home'

export default function App() {
  return (
    <View style={{ flex: 1 }} >
      <FacebookBar />
      <TabMenu />
      <View style={{
        position: 'relative',
        flex:1
      }} >
        <Home />
      </View>

    </View>
  )
}
