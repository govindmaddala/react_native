import React, { useRef, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const _5_Forms = () => {
    const [details, setDetails] = useState({
        name: "",
        password: "",
        mail: ""
    })

    const userRef = useRef(null);

    const [valid, setValid] = useState(false)

    const validateUser = ()=>{
        for(let key in details){
            if(!details[key]){
                setValid(false)
                return;
            }
        }
        setValid(true);
        return;
    }

    const handleChange = (key, val)=>{
        setDetails((prev)=>{
            return {
                ...prev,
                [key]: val
            }
        })

        validateUser();
    }

    const [users, setUsers] = useState([])
    const addUser = ()=>{
        setUsers((prev)=>{
            return [...prev, details]
        })

        setDetails({
            name: "",
            password: "",
            mail: ""
        })

        userRef.current.focus()
    }

  return (
    <View>

        <Text>_5_Forms:  User count: {users.length}</Text>
        <TextInput 
            ref={userRef}
            style={internalstyles.inputStyle}
            placeholder='Enter Name'
            value={details.name}
            onChangeText={(e)=>{handleChange("name", e)}}
        />
        <TextInput 
            style={internalstyles.inputStyle}
            placeholder='Enter Password'
            secureTextEntry={true}
            value={details.password}
            onChangeText={(e)=>{handleChange("password", e)}}
        />
        <TextInput 
            style={internalstyles.inputStyle}
            placeholder='Enter Email'
            value={details.mail}
            onChangeText={(e)=>{handleChange("mail", e)}}
        />

        { valid && <Button title='Add User' onPress={addUser} />}
    </View>
  )
}

const internalstyles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        margin: 10,
    }
})

export default _5_Forms