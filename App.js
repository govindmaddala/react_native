import React from 'react'
import { View } from 'react-native'
import _1_ViewText from './components/_1_ViewText'
import _2_Button from './components/_2_Button'
import _3_Styling from './components/_3_Styling'
import _4_TextInput from './components/_4_TextInput'

const App = () => {
  return (
    <View style= { {flex: 1, marginTop: 100}}>
        <_1_ViewText />
        <_2_Button />
        <_3_Styling />
        <_4_TextInput />
    </View>
  )
}

export default App