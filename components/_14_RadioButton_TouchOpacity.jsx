import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const _14_RadioButton_TouchOpacity = () => {
  const [selected, setSelected] = useState(1)
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>_14_RadioButton_TouchOpacity</Text>
      <TouchableOpacity onPress={()=>setSelected(1)}>
        <View style={styles.mainRadio}>
          <View style={styles.radio}>
            {
              selected === 1 && <View style={styles.selectedRadio}>
            </View>
            }
          </View>
          <Text style={styles.radioText}>Male</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelected(2)}>
        <View style={styles.mainRadio}>
          <View style={styles.radio}>
            {
              selected === 2 && 
              <View style={styles.selectedRadio}>
            </View>}
          </View>
          <Text style={styles.radioText}>Female</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelected(3)}>
        <View style={styles.mainRadio}>
          <View style={styles.radio}>
            {
              selected === 3 && 
              <View style={styles.selectedRadio}>
            </View>}
          </View>
          <Text style={styles.radioText}>Others</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

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
    // justifyContent: 'center',
    // alignItems: "center"
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
  selectedRadio:{
    width: 14,
    height: 14,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "black"
  },
  radioText: {
    // marginLeft: 10
  }
})

export default _14_RadioButton_TouchOpacity