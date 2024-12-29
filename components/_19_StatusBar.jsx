import React from 'react'
import { StatusBar, Text, View } from 'react-native'

const _19_StatusBar = () => {
  return (
    <View>
        <Text>_19_StatusBar</Text>
        <StatusBar 
            backgroundColor="red"
            barStyle="dark-content"
            hidden={false}
            animated={true}
            networkActivityIndicatorVisible={true}
        />
    </View>
  )
}

export default _19_StatusBar