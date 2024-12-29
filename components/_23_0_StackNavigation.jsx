import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
const Stack = createNativeStackNavigator();

const _23_StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Profile' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Login = (props) => (
    <View style={styles.main}>
        <Text>Login Page</Text>
        <TouchableHighlight onPress={() => props.navigation.navigate("Home")}>
            <Text style={styles.button}>Get Started</Text>
        </TouchableHighlight>
    </View>
)

const Home = (props) => (
    <View style={styles.main}>
        <Text>Home Page</Text>
        <TouchableHighlight onPress={() => props.navigation.navigate("Profile")}>
            <Text style={styles.button}>Profile Page</Text>
        </TouchableHighlight>
    </View>
)

const Profile = (props) => (
    <View style={styles.main}>
        <Text>Profile Page</Text>
        <TouchableHighlight onPress={() => props.navigation.navigate("Home")}>
            <Text style={styles.button}>Go To Home</Text>
        </TouchableHighlight>
    </View>
)



const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: 200,
        margin: 10,
        textAlign: "center",
        padding: 10,
        borderRadius: 10,
        color: "#fff",
        backgroundColor: "#007bff",
        borderColor: "#007bff"
    },
})

export default _23_StackNavigation