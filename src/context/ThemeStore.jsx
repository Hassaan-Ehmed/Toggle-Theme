import React,{createContext, useReducer} from 'react';;

// Global variables to update UI (assign initial Design ID's)
let tcolor = "gray-900";
let bcolor =  "white";  


// Store Setup
export const ThemeContext = createContext(null);

export function ThemeProvider(props){


// Manage State of Theme 
const [state,dispatch] = useReducer(reducer,"Dark");


function reducer(state,action){

    switch(action){

        case "Dark":

        tcolor="white";
        bcolor="gray-900";
            return state = "Light";

            case "Light":
                
            tcolor = "gray-900";
            bcolor = "white";
                    return state = "Dark";


             default:
                return state;       


    }

}


return (<ThemeContext.Provider value={{state,dispatch,tcolor,bcolor}} >
    
    {props.children}
    
    </ThemeContext.Provider>
)
}

