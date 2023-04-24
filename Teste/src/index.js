import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput,Button} from 'react-native'
import api from './config/api'
export default app=>{
  const [usuario,setUsuario] = useState('')
  const [senha,setSenha] = useState('')

  const cadastrar = async()=>{
    try {
      await api.post('/cadastro',{usuario,senha})
      console.log('Usuario e senha cadastrados')
    } catch (e) {
      console.log('Erro: ',e)
    }
  }
  
  const mostrarUsuario = async()=>{
    try {
      await api.get('/login')
      .then(res=>{
        console.log(res.data)
      })
    } catch (error) {
      console.log('erro ao mostrar usuario')
    }
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Usuario"
        onChangeText={setUsuario}
        style={{ borderWidth: 1, width: 200 }}
      />

      <TextInput
        placeholder="senha"
        onChangeText={setSenha}
        style={{ borderWidth: 1, width: 200 }}
      />
      <Button title="Cadastrar" onPress={cadastrar} />
      <Button
      title="mostrar usuario"
      onPress={mostrarUsuario}
      />
    </View>
  )
}