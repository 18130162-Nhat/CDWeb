

import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import {REQUIRE_EMAIL} from '../../Constant/ErrorForm'
import Input from '../../component/Input'
function FormTypeEmail(){
    const refFunc = useRef([]) 
    const navigate = useNavigate()

    const configEmail = {
        name : 'email' ,
        label : 'Email*',
        listError : [REQUIRE_EMAIL],
        index : 0 
    }

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
                </div>
                </form>
             </div>
        </div>
    )
}
export default FormTypeEmail