import React from "react";
import { Alert, Button, Text, View } from "react-native";
import api from "./src/api/conection";

export default () => {
    return (
        <View>
            <Button
                title="get"
                onPress={async() => {
                    await api.get("/").then(res=>{
                      Alert.alert(res.data)

                        console.log(res.data)
                    }).catch(e=>{
                        console.log("erro:",e)
                    })
                }}
            />

            <Button
                title="post"
                onPress={async() => {
                    await api.post('/post',{
                        a:1,
                        b:2
                    }).then(res=>{
                      Alert.alert(`${res.data.result}`)
                      console.log(res.data.result)
                    }).catch(e=>{console.log("erro:",e)})
                }}
            />
        </View>
    )
}