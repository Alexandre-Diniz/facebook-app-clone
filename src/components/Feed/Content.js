import React from 'react'
import {
  View,
  Text,
  Image,
  Dimensions
} from 'react-native'

export default function ({ type, value, image }) {
  if (type === 'text') {
    return (
      <View style={{
        width: '100%',
        marginVertical: 10,
      }} >
        <View style={{
          width: '100%',
          paddingHorizontal: 10,
          marginBottom:20,
        }} >
          <Text style={{ fontSize: 16 }} >{value}</Text>
        </View>
        {
          image.exist ?
              <Image
                source={image.source}
                style={{
                  width: Dimensions.get('window').width,
                  height: image.dimensions[1] * Dimensions.get('window').width / image.dimensions[0],
                  resizeMode: 'contain'
                }} /> : null
        }
      </View>
    )
  }
}