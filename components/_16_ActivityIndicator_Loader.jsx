import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const _16_ActivityIndicator_Loader = () => {

    return (
        <View>
            <Text>_16_ActivityIndicator_Loader</Text>
            <View style={{flex: 1, flexDirection: "column", gap: 10}}>
                <Text>Size: small</Text><ActivityIndicator size="small" />
                <Text>Size: 300 || color: red</Text><ActivityIndicator size={300} color="red" />
                <Text>Size: large</Text><ActivityIndicator size="large" />
                <Text>Size: large || animating: true</Text><ActivityIndicator size="large" animating={true} />
                <Text>Size: large || animating false</Text><ActivityIndicator size="large" animating={false} />
            </View>
        </View>
    )
}

export default _16_ActivityIndicator_Loader