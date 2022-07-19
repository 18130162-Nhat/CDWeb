

import { useRef, useState } from 'react'
import { useNavigate , Navigate, useLocation } from 'react-router-dom'
import './style.css'
import {REQUIRE_EMAIL ,FIELD_EMPTY ,PASSWORD} from '../../Constant/ErrorForm'
import Input from '../../component/Input'
import useRegister from '../../Custom/Hook/useRegister'
function FormTypeEmail(){
    const location = useLocation();
    const refFunc = useRef([]) 
    const navigate = useNavigate()
    const [valueOfPass, setValue] = useState(" ")
    const register = useRegister()
    const configEmail = {
        name : 'email' ,
        label : 'Email*',
        listError : [REQUIRE_EMAIL],
        index : 0 ,
        repeat : false,
        type : false,
        url: {url :"http://localhost:8080/isExistEmail?email=", type : "email"}
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
                let pass = formData.get("pass")
                let email = formData.get("email")
                let formEmail = true
                register.setForm({pass , email , formEmail})
               
            }
    }

    const setValueOf = ( callback) =>{
        let value = callback()
        setValue(value)
    }
   
    if(register.formRegister.formInFor===false){
        return <Navigate to={"/register/formInfor"} state={{ from: location }} replace/>
    }
   
    return (
        <div className="container-form">
             <div className="form-register-infor">
             <div className="form-header">
                    <h1>Đăng kí tài khoản</h1>
                    <div className="display-step">
                        <span className="step"><i className="fa-solid fa-check"></i></span>
                        <span className="text">Thông tin cá nhân</span>
                        <span className="line"></span>
                        <span className="step-none">2</span>
                        <span className="text">Nhập email</span>
            
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
                        <button onClick={() =>navigate(-1)} className='back'>Quay lại</button>
                        <button type='submit'  className='next'>Tiếp tục</button>
                    </div>
                </div>
                </form>
             </div>
        </div>
    )
}
export default FormTypeEmail