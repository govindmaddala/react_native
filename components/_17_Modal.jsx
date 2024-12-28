import React, { useState } from 'react'
import { Button, Modal, StyleSheet } from 'react-native'
import { Text, View } from 'react-native'

const _17_Modal = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <View style={styles.main}>
            <View style={[styles.main, { alignItems: "center" }]}><Text>_17_Modal</Text></View>

            <Modal
                transparent={true}
                visible={showModal}
                animationType="fade"
            >
                <View style={styles.centerView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Modal Text comes here</Text>
                        <Button title='Close Modal' onPress={()=>setShowModal(false)} />
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonView}>
                {!showModal && <Button title='Open Modal' onPress={()=>setShowModal(true)} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    buttonView: {
        flex: 1,
        justifyContent: "flex-end"
    },
    centerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalText: {
        fontSize: 20,
        marginBottom: 20
    },
    modalView: {
        backgroundColor: "white",
        padding: 35,
        borderRadius: 20,
        shadowColor: "#000",
        elevation: 5
    }

})

export default _17_Modal