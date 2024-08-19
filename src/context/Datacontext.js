import { createContext, useReducer } from "react";
const ThemeContext = createContext();

const initialData = {
  theme: localStorage.getItem("mytheme") === null ? "Light" : localStorage.getItem("mytheme") === "Light" ? "Light" : "Dark"
};
const reducer = (state,action) => { 
  switch (action.type) {
    case "TOGGLE_THEME":
      return {...state, theme: action.newValue};
    default:
      return state;
  }
 }

 export function DataProvider({children}) {
  const [firstState, dispatch] = useReducer(reducer, initialData );
  const changeTheme = (theme) => { 
    localStorage.setItem("mytheme", theme);
    dispatch({ type: "TOGGLE_THEME", newValue : theme });
   }
  return (
    <ThemeContext.Provider value={{...firstState, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;