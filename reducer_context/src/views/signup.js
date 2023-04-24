import React, { useContext, useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NameeInput from "../components/NameeInput";
import EmailInput from "../components/EmailInput";
import PassworInput from "../components/PassworInput";
import { Context } from "../context/authContext";
import { HelperText } from "react-native-paper";

export default ({ navigation }) => {
    const { state, createUser, setLoginError } = useContext(Context)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Cadastro
            </Text>

            <NameeInput
                value={user}
                setValue={setUser}
            />

            <EmailInput
                value={email}
                setValue={setEmail}
            />

            <PassworInput
                value={password}
                setValue={setPassword}
            />


            <Button
                title="Criar"
                onPress={() => {
                    // if(user||email||password ===''){
                    //     setLoginError(true)
                    //     return;
                    // }
                    createUser(user, email, password, navigation)
                    setEmail('');
                    setPassword('');
                    setUser('');
                }}
            />
            {state.loginError ?
                <HelperText type='error' visible={state.loginError}>
                    Usuario ou senha invalidos
                </HelperText> : null}

            <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={() => {
                    navigation.goBack('signup')
                    setLoginError(false)
                }}
            >
                <Text style={{ fontSize: 30, color: 'black' }}>já possui conta?</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}