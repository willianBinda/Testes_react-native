import createContext from "./createContext";
// import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/index.js";

console.log(1+2)

const initialState = {
    loginError:false,
    isLogged:false,
    isLoggedToken:true
}

const reducer = (state,action)=>{
    switch (action.type){
        case "loginError":
            //ira sobreescrever o estado atual copiado do spread
            return { ...state, loginError:action.payload }
        case "isLogged":
            return { ...state, isLogged: action.payload }
        case "isLoggedToken":
            return { ...state, isLoggedToken: action.payload }
        default:
            return state
        }
    }
    // const navigation = useNavigation()
    
    const setLoginError = (dispatch)=>(boolen)=>{
        //quando usar o dispatch os dados serão passados para a funcao reducer como action
        dispatch({type:'loginError',payload:boolen})  
    }

    const setIsLogged = (dispatch)=>(boolen)=>{
        //quando usar o dispatch os dados serão passados para a funcao reducer como action
        dispatch({type:'isLogged',payload:boolen})  
    }

    const setIsLoggedToken = (dispatch)=>(boolen)=>{
        //quando usar o dispatch os dados serão passados para a funcao reducer como action
        dispatch({type:'isLoggedToken',payload:boolen})  
    }

   
    const createUser = (dispatch)=> async(nome,email,senha,navigation)=>{
      
        try {
            await api.post("/criar",{
                nome,
                email,
                senha
            })
            console.log('usuario cadastrado')
            navigation.navigate('signin')
        } catch (error) {
            dispatch({type:'loginError',payload:true})
        }
    }
    
    const loginUser = (dispatch)=> async(email,senha,navigation)=>{

        try {
            const data = await api.post("/login",{
                email,
                senha
            }
        )
        await AsyncStorage.setItem('token',data.data.token)
        console.log('usuario logado')
    } catch (error) {
        dispatch({type:'loginError',payload:true})
    }
}





export const {Context,Provider} = createContext(
    reducer,
    {setLoginError,createUser,loginUser,setIsLogged,setIsLoggedToken},
    initialState
)