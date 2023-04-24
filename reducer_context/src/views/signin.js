import React,{useContext,useState} from "react";
import { View,Text, Button,TextInput, TouchableOpacity } from "react-native";
import { HelperText } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import EmailInput from "../components/EmailInput";
import PassworInput from "../components/PassworInput";
import { Context } from "../context/authContext";


export default ({navigation})=>{
    const {state,loginUser,setLoginError,setIsLogged,setIsLoggedToken} = useContext(Context)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    return(
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>
                Login
            </Text>
            <EmailInput
            value={email}
            setValue={setEmail}
            />
            
            <PassworInput
            value={password}
            setValue={setPassword}
            />

            <Button title="Login" onPress={()=>{
                // if(email||password ===''){
                //     setLoginError(true)
                //     return
                // }
                loginUser(email,password)
                setIsLogged(true)
                setIsLoggedToken(true)
                setEmail('')
                setPassword('')
            }}/>

            {state.loginError?
            <HelperText type='error' visible={state.loginError}>
                Usuario ou senha invalidos
            </HelperText>:null}
            
            <TouchableOpacity
            style={{marginTop:10}}
            onPress={()=>{
                setLoginError(false)
                navigation.navigate('signup')
            }}
            >
                <Text style={{fontSize:30,color:'black'}}>Crie uma conta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}