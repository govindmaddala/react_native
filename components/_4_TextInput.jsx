import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const _4_TextInput = () => {
    const [names, setNames] = useState([]);
    const [name, setName] = useState("");

    return (
        <View style={{ padding: 20 }}>
            <Text>_4_TextInput</Text>
            <Text>User Count: {names.length}</Text>
            <TextInput
                placeholder="Enter User name"
                onChangeText={(e) => setName(e)}
                value={name} // Ensure the input value is reset
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 10,
                    marginBottom: 10,
                }}
            />
            {
                name.length > 0 && (
                    <Button
                        title="Add User"
                        onPress={() => {
                            setNames((prev) => [...prev, name]);
                            setName("");
                        }}
                    />
                )
            }

            {
                names.length > 0
                    ? names.map((each, i) => <View key={i}>
                        <Text>{i}. {each}</Text>
                        <Button title='Delete' onPress={()=>{
                            setNames((prev) => prev.filter((_, index) => index !== i));
                        }} />
                    </View>)
                    : <Text>No Users</Text> // Corrected this line
            }
        </View>
    );
};

export default _4_TextInput;
