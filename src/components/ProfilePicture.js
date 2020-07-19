import React from 'react'
import {
  View,
  Image
} from 'react-native'

export default function ({ uri, type }) {
  if(type=='normal'){
    return (
      <View style={{width:40,height:40,borderRadius:40,overflow:'hidden'}} >
        <Image source={{uri}} style={{width:40,height:40,resizeMode:'contain'}} />
      </View>
    )
  }
}