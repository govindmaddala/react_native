import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import externalStyling from './_3_ExternalStyles'

const _3_Styling = () => {
  return (
    <View>
        <Text>_3_Styling</Text>
        <Text style={{color: "red", fontSize: 50}}>Inline Styling</Text>
        <Text style={internalStyling.textStyling}>Internal Styling</Text>
        <Text style={externalStyling.externalTextStyle}>External Styling</Text>
        <Text style={[externalStyling.externalTextStyle, internalStyling.textStyling]}>Mix of Internal and External Styling</Text>
        <Text style={[externalStyling.externalTextStyle, internalStyling.textStyling,{color: "red"}]}>Mix of Internal and External, inline Styling</Text>
    </View>
  )
}

const internalStyling = StyleSheet.create({
    textStyling: {
        color: "white",
        backgroundColor: "black",
        borderWidth: 2,
        borderColor: "yellow",
        margin: 20
    }
})

export default _3_Styling