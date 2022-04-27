import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../../component/Input"
import {FIELD_EMPTY } from "../../Constant/ErrorForm"

function FormInformation() {
    const refFunc = useRef([]) 
    const navigate = useNavigate()
    const  configFirstName  = {
        name : 'firstname' ,
        label : 'FirstName*',
        listError : [FIELD_EMPTY],
          index : 0 
    }
    const configLastName = {
        name : 'lastname' ,
        label : 'LastName*',
        listError : [FIELD_EMPTY],
          index : 1
    }
    const configPhone = {
        name : 'phone' ,
        label : 'Phone*',
        listError : [ FIELD_EMPTY],
          index : 2 
    }

    const sunmitForm = (event) =>{
        event.preventDefault()
        let check = true
       
        refFunc.current.forEach(func =>{
            check = func() && check 
        })
        check && navigate("/register/formEmail")
    }
   
    return (
        <div className="container-form">
            <div className="form-register-infor">
                <div className="form-header">
                    <h1>Đăng kí tài khoản</h1>
                    <div class="display-step">
                        <span className="step">1</span>
                        <span className="text">Thông tin cá nhân</span>
                        <span className="line"></span>
                        <span className="step-none">2</span>
                        <span className="text">Nhập email</span>
                        <span className="line"></span>
                        <span className="step-none">3</span>
                        <span className="text">Nhập mã OPT</span>
                    </div>
                </div>
                <p> (*Bắt buộc)</p>
               <form onSubmit={sunmitForm}>
               <div className="form-body">
                <Input refFunc={refFunc}  config={configFirstName}>
                <i class="fa-solid fa-file-signature"></i>
                </Input>
                <Input refFunc={refFunc} config={configLastName}>
                <i class="fa-solid fa-users"></i>
                </Input>
                <Input refFunc={refFunc} config={configPhone}>
                <i class="fa-solid fa-phone"></i>
                </Input>
                </div>
                <div className="form-btn">
                    <button type="submit">Tiếp tục</button>
                </div>
               </form>
            </div>
        </div>
    )
}
export default FormInformation