import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const _18_Pressable_Button = () => {
    const timeInMs = 500;
    const [pressText, setPressText] = useState("Press is not clicked")
    const [longPressText, setLongPressText] = useState("Long Press is not clicked")
    const [onPressInText, setOnPressInText] = useState("On Press In is not clicked")
    const [onPressOutText, setOnPressOutText] = useState("On Press Out is not clicked")
    const [delayLongPressText, setDelayLongPressText] = useState(`${longPressText} is called after ${timeInMs}`)
    return (
        <View style={styles.main}>
            <Text>_18_Pressable_Button</Text>
            <Text>{pressText}</Text>
            <Text>{longPressText}</Text>
            <Text>{onPressInText}</Text>
            <Text>{onPressOutText}</Text>
            <Text>{delayLongPressText}</Text>
            <Pressable
                onPress={() => setPressText("Press is clicked")}
            >
                <Text style={styles.button}>Simple Press</Text>
            </Pressable>

            <Pressable
                onLongPress={() => setLongPressText("Long press is clicked")}
            >
                <Text style={styles.button} >Long Press</Text>
            </Pressable>


            <Pressable
                onPressIn={() => setOnPressInText("On Press In is clicked")}
            >
                <Text style={styles.button}>On Press In</Text>
            </Pressable>

            <Pressable
                onPressOut={() => setOnPressOutText("On Press Out is clicked")}
            >
                <Text style={styles.button}>On Press Out</Text>
            </Pressable>

            <Pressable
                onPressIn={() => setOnPressInText("On Press In is clicked")}
                delayLongPress={timeInMs}
            >
                <Text style={styles.button}>Delay Long Press</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "blue",
        color: "#fff",
        margin: 10,
        padding: 10,
        fontSize: 24,
        textAlign: "center",
        shadowColor: "#000",
        elevation: 5,
        borderRadius: 10,
    },
})

export default _18_Pressable_Button