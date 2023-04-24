import React from "react";
import { Alert, Button, Text, View } from "react-native";
import api from './api/conection'
export default ()=>{
  return(
    <View>
      <Text>
        fbksdkfb
      </Text>
      <Button
        title="get"
        onPress={async()=>{
          try {
            const dados = await api.get('/')
            Alert.alert(`${dados.data}`)
          } catch (error) {
            Alert.alert(`Erro com o servidor`)
            
          }
        }}
      />
      <Button
        title="post"
        onPress={async()=>{
          try {
            const dados = await api.post('/post',{
              obj:"ola"
            })
            console.log(dados.data)
            Alert.alert(`${dados.data.obj}`)
          } catch (error) {
            Alert.alert(`Erro com o servidor`)
            
          }
        }}
      />
    </View>
  )
}