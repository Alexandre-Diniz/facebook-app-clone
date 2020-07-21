import React, { useState } from 'react'
import {
  View,
  ScrollView,
  Animated
} from 'react-native'
import {
  Feather,
  AntDesign
} from '@expo/vector-icons'

import Story from './Story'
import ProfilePicture from '../ProfilePicture'

export default function () {
  const [left, setLeft] = useState(15)
  const [top, setTop] = useState(20)
  const [height, setHeight] = useState(40)
  const [width, setWidth] = useState(40)
  const [borderLeftWidth, setBorderLeftWidth] = useState(40)
  const [heightPlusIcon, setHeightPlusIcon] = useState(40)
  const [iconPosition, setIconPosition] = useState([0, 0])
  const [sizeIcon, setSizeIcon] = useState(20)
  const [sizeViewIcon, setSizeViewIcon] = useState(40)
  const [opacity, setOpacity] = useState(1)
  return (
    <View
      style={{
        width: '100%',
        height: 200,
      }}
    >
      <ScrollView
        onScroll={event => {
          if (event.nativeEvent.contentOffset.x < 30) {
            setLeft(15 - event.nativeEvent.contentOffset.x / 2)
            setTop(20 + 2 * event.nativeEvent.contentOffset.x)
            setBorderLeftWidth(40 - 4 / 3 * event.nativeEvent.contentOffset.x)
            setHeight(40 + 0.5 * event.nativeEvent.contentOffset.x)
            setWidth(40 + 0.8 * event.nativeEvent.contentOffset.x)
            setHeightPlusIcon(40 - 4 / 3 * event.nativeEvent.contentOffset.x)
            setIconPosition([event.nativeEvent.contentOffset.x, 1.2*event.nativeEvent.contentOffset.x])
            setSizeIcon(20 - 1 / 4 * event.nativeEvent.contentOffset.x)
            setSizeViewIcon(40 - 3 / 4 * event.nativeEvent.contentOffset.x)
            setOpacity((20-2/3*event.nativeEvent.contentOffset.x)/20)
          } else {
            setOpacity(0)
            setHeightPlusIcon(0)
            setIconPosition([30, 36])
            setSizeIcon(14.75)
            setSizeViewIcon(17.5)
            setLeft(0)
            setTop(80)
            setBorderLeftWidth(0)
            setHeight(55)
            setWidth(64)
          }
        }}
        style={{ flex: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Story
          own
          name='Adicionar ao'
          lastname='story'
          picture={{ uri: 'https://imagens-revista-pro.vivadecora.com.br/uploads/2019/08/%C3%A1rvore-nativas-Pata-de-Vaca-Bauhinia-variegata.jpg' }} />
        <Story
          name='Alexandre'
          lastname='Diniz'
          picture={{ uri: 'https://imagens-revista-pro.vivadecora.com.br/uploads/2019/08/%C3%A1rvore-nativas-Pata-de-Vaca-Bauhinia-variegata.jpg' }} />
        <Story
          name='Alexandre'
          lastname='Diniz'
          picture={{ uri: 'https://imagens-revista-pro.vivadecora.com.br/uploads/2019/08/%C3%A1rvore-nativas-Pata-de-Vaca-Bauhinia-variegata.jpg' }} />
        <Story
          name='Alexandre'
          lastname='Diniz'
          picture={{ uri: 'https://imagens-revista-pro.vivadecora.com.br/uploads/2019/08/%C3%A1rvore-nativas-Pata-de-Vaca-Bauhinia-variegata.jpg' }} />
        <Story
          name='Alexandre'
          lastname='Diniz'
          picture={{ uri: 'https://imagens-revista-pro.vivadecora.com.br/uploads/2019/08/%C3%A1rvore-nativas-Pata-de-Vaca-Bauhinia-variegata.jpg' }} />
        <Story
          name='Alexandre'
          lastname='Diniz'
          picture={{ uri: 'https://imagens-revista-pro.vivadecora.com.br/uploads/2019/08/%C3%A1rvore-nativas-Pata-de-Vaca-Bauhinia-variegata.jpg' }} />
        <Story
          name='Alexandre'
          lastname='Diniz'
          picture={{ uri: 'https://imagens-revista-pro.vivadecora.com.br/uploads/2019/08/%C3%A1rvore-nativas-Pata-de-Vaca-Bauhinia-variegata.jpg' }} />
      </ScrollView>
      <Animated.View

        style={{
          backgroundColor: '#FFF',
          height: height,
          width: width,
          borderTopLeftRadius: borderLeftWidth,
          borderBottomLeftRadius: borderLeftWidth,
          borderBottomRightRadius: 40,
          borderTopRightRadius: 40,
          left: left,
          top: top,
          position: 'absolute'
        }}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <View style={{
            height:40,
            width:40,
            borderRadius:40,
            overflow:'hidden',
            position:'absolute'
          }} > 
            <ProfilePicture
              type='normal'
              path={require('../../assets/images/mark.jpg')}
            />
          </View>
          <View
            style={{
              height: sizeViewIcon,
              width: sizeViewIcon,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#3274CB',
              position: 'absolute',
              top: iconPosition[0],
              left: iconPosition[1],
            }}
          >
            <AntDesign name="plus" size={sizeIcon} color='#FFF' />
          </View>
          <View
            style={{
              height: heightPlusIcon,
              width: heightPlusIcon, 
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF',
              opacity: opacity
            }}
          >
            <AntDesign name="plus" size={heightPlusIcon / 2} color='#3274CB' />
          </View>
        </View>
      </Animated.View>
    </View>
  )
}