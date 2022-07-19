import { useContext } from "react";
import { ForgetPassContext } from "../../context/ForgetPassProvider";

function useForgetPass(){
    return useContext(ForgetPassContext)
}
export default useForgetPass