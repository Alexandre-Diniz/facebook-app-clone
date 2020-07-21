import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Modal
} from 'react-native'

import TabMenu from './src/components/TabMenu/TabMenu'
import FacebookBar from './src/components/FacebookBar/FacebookBar'
import Home from './src/views/Home'
import Games from './src/views/Games'
import Group from './src/views/Group'
import Live from './src/views/Live'
import Notifications from './src/views/Notifications'
import Menu from './src/views/Menu'

export default function App() {
  const [visible, setVisible] = useState('Home')
  const render = visible => {
    if(visible==='Home'){
      return <Home/>
    } else if(visible==='Games'){
      return <Games/>
    } else if(visible==='Group'){
      return <Group/>
    } else if(visible==='Live'){
      return <Live/>
    } else if(visible==='Notifications'){
      return <Notifications/>
    } else if(visible==='Menu'){
      return <Menu/>
    }
  }
  return (
    <View style={{ flex: 1 }} >
      <FacebookBar />
      <TabMenu  showModal={visible=>setVisible(visible)} />
      <View style={{
        position: 'relative',
        flex: 1
      }} >
        {render(visible)}
      </View>

    </View>
  )
}
