import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useReducer } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import api from '../api/index.js'
import { Context } from "../context/authContext.js";


export default props=>{
    const {setIsLogged,setIsLoggedToken} = useContext(Context)
    const navigation = useNavigation()
    
useEffect(()=>{
    const signinToken = async()=>{
        const token = await AsyncStorage.getItem('token')
        
        if(token){
            try {
                const data = await api.get('/',{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                setIsLogged(true)
                // setIsLoggedToken(true)
            } catch (error) {
                console.log('erro',error)
                navigation.navigate('signin')
            }
        }else{
            console.log('sen token')
            setIsLoggedToken(false)
            navigation.navigate('signin')
        }
    }
    signinToken()

},[])

    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>
                <ActivityIndicator color={'black'} size={40}/>
            </Text>
        </View>
    )
}