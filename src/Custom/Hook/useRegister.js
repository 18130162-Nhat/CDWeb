import { useContext } from "react";

import  {RegisterContext} from "../../context/ResgisterProvider"
function useRegister(){
    return useContext(RegisterContext)
}
export default useRegister