

import { useRef, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import './style.css'
import {REQUIRE_EMAIL ,FIELD_EMPTY ,PASSWORD} from '../../Constant/ErrorForm'
import Input from '../../component/Input'
import useForgetPass from '../../Custom/Hook/useForgetPass'
function FormTypeEmailOfPass(){
    const refFunc = useRef([]) 
    const navigate = useNavigate()
    const useForget = useForgetPass()
    const [valueOfPass, setValue] = useState(" ")
    const configEmail = {
        name : 'email' ,
        label : 'Email*',
        listError : [REQUIRE_EMAIL],
        index : 0 ,
        repeat : false,
        type : false,
        url:false
    }
    const configPass = {
        name : 'pass' ,
        label : 'Mật khẩu*',
        listError : [PASSWORD],
        index : 1 ,
        repeat : false,
        type : true,
        url : false
    }
    const configRepeatPass = {
        name : 'repeat' ,
        label : 'Nhập lại mật khẩu*',
        listError : [FIELD_EMPTY],
        index : 2 ,
        repeat : {value : valueOfPass},
        type : true,
        url : false
    }
    const submitForm = (event) =>{
            event.preventDefault() ;
            let check = true 

            refFunc.current.forEach(func =>{
                    check = check &func()
            })
            if(check){
                let formData = new FormData(event.currentTarget)
               let email = formData.get('email')
               let pass = formData.get('pass')
              let  formEmail  = true
              useForget.setForm({email,pass,formEmail})
            navigate("/forgetpass/otp")
               
            }
    }

    const setValueOf = ( callback) =>{
        let value = callback()
        setValue(value)
    }
   
  
    return (
        <div className="container-form">
             <div className="form-register-infor">
             <div className="form-header">
                    <h1>Quên mật khẩu</h1>
                    <div className="display-step">
                        <span className="step">1</span>
                        <span className="text">Nhập mật khẩu mới</span>
                        <span className="line"></span>
                        <span className="step-none">2</span>
                        <span className="text">Nhập mã OTP</span>
                    </div>
                </div>
                <p> (*Bắt buộc)</p>
                <form onSubmit={submitForm}>
                <div className="form-body">
                    <Input config={configEmail} refFunc={refFunc} >
                    <i className="fa-solid fa-envelope"></i>
                    </Input>
                    <Input config={configPass} refFunc={refFunc} funcParent = {setValueOf} >
                    <i className="fa-solid fa-key"></i>
                    </Input>
                    <Input config={configRepeatPass} refFunc={refFunc} >
                    <i className="fa-brands fa-react"></i>
                    </Input>
                    <div className='back-next'>
                        <button onClick={() =>{navigate("/")}} className='back'>Đăng nhập</button>
                        <button type='submit' className='next'>Tiếp tục</button>
                    </div>
                </div>
                </form>
             </div>
        </div>
    )
}
export default FormTypeEmailOfPass