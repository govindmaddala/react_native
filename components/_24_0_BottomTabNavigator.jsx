import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native';

const Tab = createBottomTabNavigator();
const _24_0_BottomTabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
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

export default _24_0_BottomTabNavigator