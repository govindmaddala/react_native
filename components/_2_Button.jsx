import React, { useRef, useState } from 'react'
import { Button, Text, View } from 'react-native'

const _2_Button = () => {

    const [name,  setName] = useState("No Name")
    const onPressFun = ()=>{
        setName("govind")
    }
    const btnRef = useRef(null)

  return (
    <View>
        <Text>From _2_Button: {name}</Text>
        <Button
            ref={btnRef}
            title='Button Title'
            color={"red"}
            onPress={onPressFun}
        /> 
    </View>
  )
}

export default _2_Button