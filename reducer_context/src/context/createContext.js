import React,{useReducer} from "react";


export default (reducer,actions,initialValue)=>{
    const Context = React.createContext()

    const Provider = ({children})=>{
        const [state,dispatch] = useReducer(
            reducer,
            initialValue
        )
        const custonFunctions = {}
        Object.keys(actions).forEach(
            (key)=>
                (custonFunctions[key] = actions[key](dispatch))
        )
        return(
            <Context.Provider 
            value={{state,...custonFunctions}}>
                {children}
            </Context.Provider>
        )
    }
    return {Context,Provider}
}








// import React, { useReducer } from "react";

// export default (reducer, actions, initialState) => {
//     const Context = React.createContext()
//     const Provider = ({ children }) => {
//         const [state, dispatch] = useReducer(reducer, initialState)
//         const funcoesProcessadas = {}
//         //extrair funcoes de funcoes
//         Object.keys(actions).forEach(key => (funcoesProcessadas[key] = actions[key](dispatch)))


//         return <Context.Provider value={{ state, ...funcoesProcessadas }}>{children}</Context.Provider>
//     }
//     return { Context, Provider }
// }


