import React, { useState } from 'react'
import { Button, StyleSheet, TouchableHighlight } from 'react-native'
import { Text, View } from 'react-native'

const _22_CustomModal = () => {
    const [showModal, setShowModal] = useState(true);
  return (
    <View style={styles.main}>
        <Text>_22_CustomModal</Text>
        {
            showModal && 
            <View style={styles.modal}>
                <View style={styles.body}>
                    <Text>Modal Text Comes here</Text>
                    <TouchableHighlight onPress={()=> setShowModal(false)}>
                        <Text style={styles.button}>Close Modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        }
        {!showModal ? <Button  title='Open Modal' onPress={()=> setShowModal(true)} />: <Button  title='Close Modal' onPress={()=> setShowModal(false)} />}
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        justifyContent: "flex-end"
    },
    modal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    body:{
        width: 300,
        height: 200,
        backgroundColor: "rgba(50,50,50,0.1)",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        
    },
    button: {
        width: 200,
        margin: 10,
        textAlign: "center",
        padding: 10,
        borderRadius: 10,
        color: "#fff",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        flex: 1,
        justifyContent: "flex-end"
    },
})

export default _22_CustomModal