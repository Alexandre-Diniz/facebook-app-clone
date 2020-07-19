import React from 'react'
import {
  View
} from 'react-native'

import ProfilePicture from './ProfilePicture'

export default function () {
  return (
    <View>
      <View>
        <ProfilePicture
          type='normal' 
          uri='https://pt.wikipedia.org/wiki/Mark_Zuckerberg#/media/Ficheiro:Mark_Zuckerberg_F8_2018_Keynote_(cropped_2).jpg' />
      </View>
      <View>

      </View>
    </View>
  )
}