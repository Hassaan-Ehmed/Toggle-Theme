import React,{createContext, useReducer} from 'react';;

// Global variables to update UI (assign initial Design ID's)
let tcolor = "dark-text";
let bcolor =  "light-bg";  


// Store Setup
export const ThemeContext = createContext(null);

export function ThemeProvider(props){


// Manage State of Theme 
const [state,dispatch] = useReducer(reducer,"Dark");


function reducer(state,action){

    switch(action){

        case "Dark":

        tcolor="light-text";
        bcolor="dark-bg";
            return state = "Light";

            case "Light":
                
            tcolor = "dark-text";
            bcolor = "light-bg";
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

