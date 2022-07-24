

import { useRef, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import './style.css'
import {REQUIRE_EMAIL ,FIELD_EMPTY ,PASSWORD} from '../../Constant/ErrorForm'
import Input from '../../component/Input'
import useForgetPass from '../../Custom/Hook/useForgetPass'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function FormTypeEmailOfPass(){
    const alter = withReactContent(Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      }))
    const refFunc = useRef([]) 
    const navigate = useNavigate()
    const useForget = useForgetPass()
    const [valueOfPass, setValue] = useState(" ")
    const [loading,setLoading] = useState(false)
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
                setLoading(true)
                let formData = new FormData(event.currentTarget)
               let email = formData.get('email')
               let pass = formData.get('pass')
              let  formEmail  = true
                fetch(`http://localhost:8080/sendOTP?email=${email.trim()}`)
                .then(res =>{
                    if(!res.ok) throw new Error(res.status)
                    return res.json()
                })
                .then(data =>{
                    setLoading(false)
                    if(data.message==='oke'){
                        useForget.setForm({email,pass,formEmail})
                        navigate("/forgetpass/otp")
                        return
                    } 
                   else{
                        
                        alter.fire({
                            icon: 'error',
                            title: 'Email không tồn tại !'
                          })
                    }
                })
                .catch(err =>{
                    setLoading(false)
                        alter.fire({
                            icon: 'error',
                            title: 'Email không tồn tại !'
                          })
                })

             
               
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
                        <button type='submit' className='next'>
                        {
                            loading? <div class="spinner-border spinner-border-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                            :"Tiếp tục"
                        }
                        </button>
                    </div>
                </div>
                </form>
             </div>
        </div>
    )
}
export default FormTypeEmailOfPass