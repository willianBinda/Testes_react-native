import React, { useContext } from 'react'
import { HelperText, TextInput } from 'react-native-paper'
import { Context } from '../context/authContext'
// import { TextInput } from 'react-native'

export default ({value,setValue})=>{
    const {state} = useContext(Context)
    return(
        <>
            <TextInput
                style={{ width: "80%", height: 50, borderWidth: 1, margin: 10,backgroundColor:'grey' }}
                // placeholder='Email'
                label={'Nome'}
                value={value}
                onChangeText={(text) => setValue(text)}
                error={state.loginError}
            />
            {state.loginError?
            <HelperText type='error' visible={state.loginError}>
                Name must exist
            </HelperText>:null}
        </>
    )

}

