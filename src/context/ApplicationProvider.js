 import { createContext, useContext , useState } from "react";
 import localStorageApp from "../service/LocalStorage";
 export const ApplicationContext = createContext()

 function ApplicationProvider({children}){
    let  init = localStorageApp.getItemStorage("user")
     const [user , setUser] = useState(init)
        const logged = (object) =>{
                setUser(object)
        }
        let value = { user , logged}
     return  <ApplicationContext.Provider value={value}>
        {children}
     </ApplicationContext.Provider>

 }
 export default ApplicationProvider

