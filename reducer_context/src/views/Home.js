// import React,{useContext} from "react";
// import { Button, Text, View } from "react-native";
// import Teste from "../components/Teste";
// import { Context } from "../context/dataContext";



// export default home=>{
//     const {state,aumentar,toggle,zerar,api} = useContext(Context)
//     // console.log(reducer)
//     return(
//         <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//             {state.showMessage?<Text>Mensagem mostrada</Text>:null}


//             <Text>HOME</Text>
//             <Button title="diminuir"
//             onPress={()=>{
//                 aumentar(-1)
//             }}
//             />
//             <Text style={{fontSize:50,color:'black'}}>
//                 {state.value}
//             </Text>
//             <Button title="aumentar"
//             onPress={()=>{
//                 api()
//                 aumentar(1)
//             }}
//             />
//             <Button title="zerar"
//             onPress={()=>{
//                zerar(0)
//             }}
//             />

//             <Button title="mostrar message"
//             onPress={()=>{
//                 toggle(true)
//             }}
//             />
//             <Button title="ocultar message"
//             onPress={()=>{
//                 toggle(false)
//             }}
//             />
//         </View>

//     )
// }

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import { Button, Text, View,TextInput  } from "react-native";
import { Context } from "../context/authContext";

export default props=>{
    const {setIsLogged,setIsLoggedToken} = useContext(Context)
    const navigation = useNavigation()
    const [text,setText]= useState('')
    let a = text;
    return(
        <View>
            <Text>
                logado home dd
            </Text>
            <TextInput
                placeholder="digite"
                style={{borderWidth:1,width:"100%",height:50}}
                onChangeText={(text)=>setText(text)}
            
            
            />
            <Button title="LogOut" onPress={async()=>{
                await AsyncStorage.removeItem('token')
                setIsLogged(false)
                setIsLoggedToken(false)
            }}/>
        </View>
    )
}