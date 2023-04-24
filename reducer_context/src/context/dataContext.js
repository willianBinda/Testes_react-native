// import React,{useReducer} from "react";
// import createContext from './createContext'

// let initialState = {
//     value: 0,
//     showMessage:false
// }
//             //estado inicial - acoes
//             //o dispatch vai ser acessado na action
// const reducer = (state,action) =>{
//     switch (action.type){
//         case 'aumentar':
//             return{...state,value:state.value + action.payload}
//         case 'diminuir':
//             return {...state,value:state.value - action.payload}
//         case 'zerar':
//             return {...state,value:0}
//         case 'toggle':
//             return {...state,showMessage:action.payload}
//         default:
//             return state
//     }
// }

// const aumentar = (dispatch)=>{
//     return (value)=>{
//         dispatch({type:'aumentar',payload:value})
//     }
// }

// const toggle = (dispatch)=>{
//     return (boolean)=>{
//         dispatch({type:'toggle',payload:boolean})
//     }
// }
// const zerar = (dispatch)=>(value)=>{
//     return dispatch({type:'zerar'})
// }

// const api = (dispatch)=>()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }


// export const {Context,Provider} = createContext(
//     reducer,
//     {aumentar,toggle,zerar,api},
//     initialState
// )
// export const Context = React.createContext()

// export const Provider  = ({children})=>{
//     //estado e funcao que define o estado--a funcao e valor inicial 
//     const [state,dispatch] = useReducer(reducer,initialState)
//     return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>
// }