import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const _12_Grid_flex = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text>_12_Grid_flex</Text>
            <View style={{ flex: 1 }}>
                <View style={[styles.mainBox, {flexDirection: "row"}]}>
                    <View style={styles.topBox}></View>
                    <View style={styles.midBox}></View>
                    <View style={styles.bottomBox}></View>
                </View>
                <View style={styles.mainBox}>
                    <View style={styles.topBox}></View>
                    <View style={styles.midBox}></View>
                    <View style={styles.bottomBox}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topMainBox: {
        flex: 1,
        borderWidth: 2,
        borderColor: "yellow",
    },
    mainBox: {
        flex: 1,
        borderWidth: 2,
        borderColor: "black",
    },
    topBox: {
        flex: 1,
        backgroundColor: "orange"
    },
    midBox: {
        flex: 2,
        backgroundColor: "white"
    },
    bottomBox: {
        flex: 1,
        backgroundColor: "green"
    }
})

export default _12_Grid_flex