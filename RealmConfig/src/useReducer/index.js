import React,{useReducer,useState, } from "react";
import { Text, Text, View } from "react-native";


const reducer = (state,action) =>{}


const RGB = ()=>{

    const [state, dispatch] = useReducer(reducer,{
        red:0,
        green:0,
        blue:0,
    })
    
    const [red,setRed] = useState(0)
    const [green,setGreen] = useState(0)
    const [blue,setBlue] = useState(0)
    
    return(
        <View>
            <View
                style={[styles.circulo,{backgroundColor:`rgb(${red},${green},${blue})`}]}
            />
            <Text>

            </Text>
        </View>

    )
    
}