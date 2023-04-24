import React, { useState } from 'react'
import { View, Text, TextInput, Button,Alert } from 'react-native'
import getRealm from '../../services/realm'
import writeTask from '../../services/writeTasks'



export default ({navigation}) =>{
    const [user,setUser] = useState()
    const [password, setPassword] = useState()
    let firstTask
    const writeTask = async ()=>{
        const realm = await getRealm();

        try{
            realm.write(()=>{
                firstTask = realm.create("Usuarios",{
                    _id:1,
                    nome:"willian",
                    senha:'123',
                })

                realm.create("Usuarios",{
                    _id:2,
                    name:"binda",
                    senha:"12345"
                })
                
            })
        }catch(e){
            console.log("erro")
        }
    }


    const getAll = async ()=>{
        const realm = await getRealm()
        try{
            const data = realm.objects("Usuarios")
            console.log(data)
        }catch(e){
            console.log("erro")
        }
    }




    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

            <Button
                title='cadastrar'
                onPress={writeTask}
            />
            <Button
            title='get'
            onPress={getAll}
            />

            <TextInput
                style={{borderWidth:1,width:200,height:50}}
                onChangeText={(text)=>{setUser(text)}}
            />
            <TextInput
                style={{borderWidth:1,width:200,height:50,margin:10}}
                secureTextEntry={true}
                onChangeText={(text)=>{setPassword(text)}}
            />


            <Button
                title='go'
                onPress={
                    ()=>{
                        navigation.push('Logado')  
                    }
                }
            /> 
        </View>
    )
}