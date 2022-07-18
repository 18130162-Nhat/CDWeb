import { createContext , useState } from "react";
export const ForgetPassContext = createContext()
function ForgetPassProvider({children}){
    const formForget = {
        email : "",
        OTP : "",
        formEmail : false
    }
    const [form , setFormForget] = useState(formForget)
    const setForm= (object) =>{
        setFormForget({...formForget , ...object})
    }
    let value = {formForget , setForm}

    return <ForgetPassContext.Provider value={value}>
        {children}
    </ForgetPassContext.Provider>
}
export default ForgetPassProvider