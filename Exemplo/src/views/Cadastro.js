import React, { useContext, useState } from "react";
import { Button,View,Text, TextInput } from "react-native";
import {Context as AuthContext} from '../Components/context/AuthContext'

export default props=>{
    const {state,signup} = useContext(AuthContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    console.log(state)



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder="Email"
                onChangeText={setEmail}
                style={{ borderWidth: 1, width: 200 }}
            />

            <TextInput
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={setPassword}
                style={{ borderWidth: 1, width: 200 }}
            />
            <Text style={{ fontSize: 30, color: 'black' }}>
                {email} - {password}
            </Text>
            {state.errorMessage?<Text>{state.errorMessage}</Text>:null}
            <Button title="Go to logado" onPress={()=>signup({email,password})}/>
        </View>
    )
}
