import { createContext, useEffect, useState } from "react";

const themes = {
    light: {
        backgroundColor: "bg-light",
        color: "text-dark",
        button: "btn-warning",
        navbar: "navbar-light bg-light",
        footer: "bg-light text-dark"
    },
    
    dark: {
        backgroundColor: "bg-dark",
        color: "text-light",
        button: "btn-danger",
        navbar: "navbar-dark bg-dark",
        footer: "bg-dark text-light"
    },
}

const ThemeContext = createContext()
function ThemeContextProvider(props) {
    const [themeName, setThemeName] = useState("light")


    useEffect(() => {
        const LocalThemeName = localStorage.getItem('themeName')
            ? localStorage.getItem('themeName') :
            localStorage.setItem("themeName", themeName)
        setThemeName(LocalThemeName);
        
    }, []) //sayfa ilk açıldığında
    
    useEffect(() => {
        localStorage.setItem("themeName", themeName)
        const theme = themeName === "light" ? themes.light : themes.dark;
        document.body.className = "";
        document.body.classList.add(theme.backgroundColor, theme.color)
    },[themeName]) //themeName degistiginde

    return(
        <ThemeContext.Provider value={
            { 
                theme: themeName === "light" ? themes.light : themes.dark,
                themeName, setThemeName
            }
    }>
        {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeContextProvider}