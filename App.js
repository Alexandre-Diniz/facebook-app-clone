import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Entypo
} from '@expo/vector-icons'

import TabMenu from './src/components/TabMenu/TabMenu'
import FacebookBar from './src/components/FacebookBar/FacebookBar'

export default function App() {
  return (
    <View style={{flex:1}} >
      <FacebookBar/>
      <TabMenu/>
    </View>
  )
}
