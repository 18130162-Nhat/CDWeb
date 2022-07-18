import { useState } from "react";

function InputOTP(){
    const [otp , setOTP] = useState('')
    
    const changOTP = (event) =>{
        let value = event.target.value.trim()
        if(checkValue(event)){
            setOTP('')
           }
           else{
            if(value.length<=1){
                setOTP( event.target.value )
            }else{
                setOTP(otp)
            }
           }
    }

    const checkValue =(event) =>{
        let regex = /[0-9]{1}/
        let value = event.target.value.trim()
        let testRegex = new RegExp(regex);
        if(testRegex.test(value)) return  false
        return true
    }
    return (
<input onChange={(event) => { changOTP(event) }} type="text" name="otp" value={otp}/>

    )
}

export default InputOTP

