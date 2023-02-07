import { createContext, useContext, useEffect, useState } from "react";


const BlueModeContext = createContext();

export function BlueModeProvider({children}) {
    const [blueMode, setBlueMode] = useState(false);
    const toggleBlueMode = () => {
        setBlueMode(!blueMode);
        updateBlueMode(!blueMode);
    };

    useEffect(()=> {
        const isBlue = 
        localStorage.theme === 'blue' || 
        (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: blue)').matches);
        setBlueMode(isBlue);
        updateBlueMode(isBlue);
    }, []);

    return <BlueModeContext.Provider
    value = {{ blueMode, toggleBlueMode }}
    
    >{children}</BlueModeContext.Provider>
}


export const useBlueMode = () => useContext(BlueModeContext);

function updateBlueMode(blueMode){
    if (blueMode) {
        document.documentElement.classList.add('blue');
        localStorage.theme = 'blue'
    } else{
        document.documentElement.classList.remove('blue');
        localStorage.theme = 'red'
    }

}