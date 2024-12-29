import React from 'react'
import { Platform, Text, View } from 'react-native'

const _20_Platform = () => {
  return (
    <View>
        <Text>_20_Platform</Text>
        <Text>Platform: {Platform.OS} </Text>
        <Text>{JSON.stringify(Platform)}</Text>
    </View>
  )
}

export default _20_Platform