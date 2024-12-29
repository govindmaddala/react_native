import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
const Stack = createNativeStackNavigator();

const _23_3_StackNavigation_DataPass = () => {

    const [userDetails, setUserDetails] = useState({
        name: "",
        age: ""
    })

    const handleChange = (key, text) => {
        setUserDetails((prev) => {
            return {
                ...prev,
                [key]: text
            }
        })
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name='Login' component={(props)=> Login(props, userDetails, handleChange)} userDetails={userDetails} /> */}
                <Stack.Screen name="Login">
                    {(props) => (
                        <Login {...props} userDetails={userDetails} handleChange={handleChange} />
                    )}
                </Stack.Screen>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Profile' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Login = ({navigation, userDetails, handleChange}) => (
    <View style={styles.main}>
        <Text>Login Page</Text>
        <Button title='Get Props' onPress={() => console.log(userDetails)} />
        <TextInput style={styles.input} placeholder='Enter name' value={userDetails.name} onChangeText={(text)=>handleChange("name", text)} />
        <TextInput style={styles.input} placeholder='Enter age' value={userDetails.age} onChangeText={(text)=>handleChange("age", text)}/>
        <TouchableHighlight onPress={() => navigation.navigate("Home", userDetails)}>
            <Text style={styles.button}>Get Started</Text>

        </TouchableHighlight>
    </View>
)

const Home = (props) => (
    <View style={styles.main}>
        <Text>Hello {props.route.params.name}</Text>
        <Button title='Get Props' onPress={() => console.log(props.route.params)} />
        <TouchableHighlight onPress={() => props.navigation.navigate("Profile", props.route.params)}>
            <Text style={styles.button}>Profile Page</Text>
        </TouchableHighlight>
    </View>
)

const Profile = (props) => (
    <View style={styles.main}>
        <Text>Profile {props.route.params.name}</Text>
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
    input:{
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
    }
})

export default _23_3_StackNavigation_DataPass