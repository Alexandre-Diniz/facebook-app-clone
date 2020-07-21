import React from 'react'
import {
  View,
  ScrollView,
  Text
} from 'react-native'
import {
  MaterialIcons
} from '@expo/vector-icons'

import ProfilePicture from './ProfilePicture'

export default function () {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <View style={{
          height: '100%',
          width: 120,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <View style={{
            borderWidth: 2,
            borderRadius: 100,
            borderColor: '#D2E4F7',
            width: '80%',
            height: '75%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
          }} >
            <MaterialIcons name="video-call" size={30} color="#9966F6" />
            <View>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#3274CB' }} > Criar </Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#3274CB' }} > sala </Text>
            </View>
          </View>
        </View>
        <View style={{
          height: '100%',
          width: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <ProfilePicture
            type='online'
            path={require('../assets/images/mark.jpg')}
          />
        </View>
        <View style={{
          height: '100%',
          width: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <ProfilePicture
            type='online'
            path={require('../assets/images/mark.jpg')}
          />
        </View>
        <View style={{
          height: '100%',
          width: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <ProfilePicture
            type='online'
            path={require('../assets/images/mark.jpg')}
          />
        </View>
        <View style={{
          height: '100%',
          width: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <ProfilePicture
            type='online'
            path={require('../assets/images/mark.jpg')}
          />
        </View>
        <View style={{
          height: '100%',
          width: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <ProfilePicture
            type='online'
            path={require('../assets/images/mark.jpg')}
          />
        </View>
        <View style={{
          height: '100%',
          width: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <ProfilePicture
            type='online'
            path={require('../assets/images/mark.jpg')}
          />
        </View>
        <View style={{
          height: '100%',
          width: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <ProfilePicture
            type='online'
            path={require('../assets/images/mark.jpg')}
          />
        </View>
        <View style={{
          height: '100%',
          width: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <ProfilePicture
            type='online'
            path={require('../assets/images/mark.jpg')}
          />
        </View>
        <View style={{
          height: '100%',
          width: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <ProfilePicture
            type='online'
            path={require('../assets/images/mark.jpg')}
          />
        </View>
      </ScrollView>
    </View>
  )
}