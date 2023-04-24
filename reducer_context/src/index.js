import React, { useContext, useReducer } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./views/Home"
import Signin from './views/signin'
import Signup from './views/signup'
import SigninToken from "./views/SigninToken";

import { Context, Provider } from "./context/authContext";
const Stack = createNativeStackNavigator()

const App=()=>{
    const { state } = useContext(Context)
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {state.isLogged&&state.isLoggedToken?
                    (<Stack.Screen name="home" component={Home} />)
                    :
                    state.isLoggedToken?
                        <Stack.Screen name="signinToken" component={SigninToken} />
                    :
                    <>
                        <Stack.Screen name="signin" component={Signin} />
                        <Stack.Screen name="signup" component={Signup} />
                    </>
                }
                    
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ()=>{
    return(
        <Provider>
            <SafeAreaProvider>
                <App/>
            </SafeAreaProvider>
        </Provider>
    )

    
}

//provider = fornecedor
// {state.isLoggegToken?(
//     <Stack.Screen name="signinToken" component={SigninToken} />
// ):(<>
//     <Stack.Screen name="signin" component={Signin} />
//     <Stack.Screen name="signup" component={Signup} />
// </>
// )}