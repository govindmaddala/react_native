import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { Text, View } from 'react-native'

const _13_TouchHighlight = () => {
    return (
        <View>
            <Text>_13_TouchHighlight</Text>
            <TouchableHighlight>
                <Text style={[styles.button, styles.primary]}>Primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.seconday]}>Secondary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.success]}>Success</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.danger]}>Danger</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.warning]}>Warning</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.info]}>Info</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.light]}>Light</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.dark]}>Dark</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.link]}>Link</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        margin: 10,
        textAlign: "center",
        padding: 10,
        borderRadius: 10,
        color: "#fff",
    },
    primary: {
        backgroundColor: "#007bff",
        borderColor: "#007bff"
    },
    seconday: {
        backgroundColor: "#6c757d",
        borderColor: "#6c757d"
    },
    success: {
        backgroundColor: "#28a745",
        borderColor: "#28a745"
    },
    danger: {
        backgroundColor: "#dc3545",
        borderColor: "#dc3545"
    },
    warning: {
        backgroundColor: "#ffc107",
        borderColor: "#ffc107"
    },
    info: {
        backgroundColor: "#17a2b8",
        borderColor: "#17a2b8"
    },
    light: {
        color: "#212529",
        backgroundColor: "#f8f9fa",
        borderColor: "#f8f9fa"
    },
    dark: {
        backgroundColor: "#343a40",
        borderColor: "#343a40"
    },
    link: {
        backgroundColor: "transparent",
        fontWeight: "400",
        color: "#007bff",
        textDecorationLine: "underline"
    },
})

export default _13_TouchHighlight