import { createContext , useState } from "react";
export const ForgetPassContext = createContext()
function ForgetPassProvider({children}){
    const formForget = {
        email : "",
        OTP : "",
        pass:"",
        formEmail : false
    }
    const [form , setFormForget] = useState(formForget)
    const setForm= (object) =>{
        setFormForget({...form , ...object})
    }
    let value = {form , setForm}

    return <ForgetPassContext.Provider value={value}>
        {children}
    </ForgetPassContext.Provider>
}
export default ForgetPassProvider