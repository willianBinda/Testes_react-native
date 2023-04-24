import React from "react";
import Navi from './views/navi'
import {Provider as AuthProvider} from './Components/context/AuthContext'
import { setNavigator } from "./views/navigationRef";

export default props=>{

    return (
        <AuthProvider>
            <Navi/>
        </AuthProvider>
    )
}