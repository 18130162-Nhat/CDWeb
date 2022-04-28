

import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import {REQUIRE_EMAIL ,FIELD_EMPTY ,PASSWORD} from '../../Constant/ErrorForm'
import Input from '../../component/Input'
function FormTypeEmail(){
    const refFunc = useRef([]) 
    const navigate = useNavigate()
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

    const setValueOf = ( callback) =>{
        let value = callback()
        setValue(value)
    }
    console.log(valueOfPass)

    return (
        <div className="container-form">
             <div className="form-register-infor">
             <div className="form-header">
                    <h1>Đăng kí tài khoản</h1>
                    <div class="display-step">
                        <span className="step"><i class="fa-solid fa-check"></i></span>
                        <span className="text">Thông tin cá nhân</span>
                        <span className="line"></span>
                        <span className="step">2</span>
                        <span className="text">Nhập email</span>
                        <span className="line-none"></span>
                        <span className="step-none">3</span>
                        <span className="text">Nhập mã OPT</span>
                    </div>
                </div>
                <p> (*Bắt buộc)</p>
                <form>
                <div className="form-body">
                    <Input config={configEmail} refFunc={refFunc} >
                    <i class="fa-solid fa-envelope"></i>
                    </Input>
                    <Input config={configPass} refFunc={refFunc} funcParent = {setValueOf} >
                    <i class="fa-solid fa-key"></i>
                    </Input>
                    <Input config={configRepeatPass} refFunc={refFunc} >
                    <i class="fa-brands fa-react"></i>
                    </Input>
                    <div className='back-next'>
                        <button onClick={() =>navigate("/register/formInFor")} className='back'>Quay lại</button>
                        <button  className='next'>Tiếp tục</button>
                    </div>
                </div>
                </form>
             </div>
        </div>
    )
}
export default FormTypeEmail