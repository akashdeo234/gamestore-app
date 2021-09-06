import { createContext, useState } from "react";

export const userContext = createContext();

//provider

function GlobelContext({ children }) {
 const [data, setData] = useState([]);
  return(
      <userContext.Provider value={{data,setData}}>
          {children}
      </userContext.Provider>
  )
}

export default GlobelContext;
