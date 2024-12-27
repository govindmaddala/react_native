import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const _7_List_Map_ScrollView = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Abhay"
        },
        {
            id: 2,
            name: "Bhanu"
        },
        {
            id: 3,
            name: "Chandra"
        },
        {
            id: 4,
            name: "Dinesh"
        },
        {
            id: 5,
            name: "Eshwar"
        },
        {
            id: 6,
            name: "Firoz"
        },
        {
            id: 7,
            name: "Govind"
        },
        {
            id: 8,
            name: "Harish"
        },
        {
            id: 9,
            name: "Abhay"
        },
        {
            id: 10,
            name: "Bhanu"
        },
        {
            id: 11,
            name: "Abhay"
        },
        {
            id: 12,
            name: "Bhanu"
        },
        {
            id: 13,
            name: "Chandra"
        },
        {
            id: 14,
            name: "Dinesh"
        },
        {
            id: 15,
            name: "Eshwar"
        },
        {
            id: 16,
            name: "Firoz"
        },
        {
            id: 17,
            name: "Govind"
        },
        {
            id: 18,
            name: "Harish"
        },{
            id: 19,
            name: "Abhay"
        },
        {
            id: 20,
            name: "Bhanu"
        },
        {
            id: 21,
            name: "Abhay"
        },
        {
            id: 22,
            name: "Bhanu"
        },
        {
            id: 23,
            name: "Chandra"
        },
        {
            id: 24,
            name: "Dinesh"
        },
        {
            id: 25,
            name: "Eshwar"
        },
        {
            id: 26,
            name: "Firoz"
        },
        {
            id: 27,
            name: "Govind"
        },
        {
            id: 28,
            name: "Harish"
        }
    
    ])
    return (
        <View style={{ flex: 1 }}> 
            <Text>_7_List_Map_ScrollView</Text>
            <ScrollView style={{marginBottom: 60}}>
                {
                    users.map((each)=>
                        <Text key={each.id} style={[styles.textStyle, { backgroundColor: each.id % 2 === 0 ? 'gray' : 'black' }]}>{each.name}</Text>
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        backgroundColor: "black",
        color: "white",
        margin: 10,
        padding: 5,
        textAlign: "center",
        borderRadius: 10
    }
})

export default _7_List_Map_ScrollView