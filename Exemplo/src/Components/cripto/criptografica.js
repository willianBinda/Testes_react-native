import React,{useState} from "react";
import { View,Text, Button,StyleSheet } from "react-native";
// import bcrypt from "react-native-bcrypt";


export default props=>{
    // const [senha,setSenha] = useState('')
    // const [hash,setHash] = useState('')
    // const encrypt = async()=>{
    //     try{
    //         const pass = '123123'
    //         setHash(bcrypt.hashSync(pass,10))
    //         setSenha(pass)

    //     }catch(e){
    //         console.log('erro')
    //     }
    // }
    // const decript = ()=>{
    //     try{
    //         console.log( bcrypt.compareSync('123123', '$2a$12$PGtv1PV3TRujIQkGg3p34u79TBBCxJ3jxeY6DRPd/JWDP94oDUKSW'))
    //     }catch(e){
    //         console.log('erro')
    //     }
    // }

        return( 
            <View>
                <Text>
                    index
                </Text>
            </View>
            // <View style={styles.container}>
            //     <Button title={'encrypt'} onPress={encrypt} />
            //     <Button title="comp" onPress={decript}/>
            // </View>    
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});