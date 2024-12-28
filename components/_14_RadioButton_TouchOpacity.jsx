import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const _14_RadioButton_TouchOpacity = () => {
  const [selected, setSelected] = useState(1)
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>_14_RadioButton_TouchOpacity</Text>
      {
        radioButton(selected, setSelected, 1, "Radio 1")
      }
      {
        radioButton(selected, setSelected, 2, "Radio 2")
      }
      {
        radioButton(selected, setSelected, 3, "Radio 3")
      }
    </View>
  )
}

const radioButton = (state, setState, num, text) => (
  <TouchableOpacity onPress={() => setState(num)}>
    <View style={styles.mainRadio}>
      <View style={styles.radio}>
        {
          state === num &&
          <View style={styles.selectedRadio}>
          </View>}
      </View>
      <Text style={styles.radioText}>{text}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    marginBottom: 10
  },
  mainRadio: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  selectedRadio: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "black"
  },
  radioText: {
    marginLeft: 5
  }
})

export default _14_RadioButton_TouchOpacity