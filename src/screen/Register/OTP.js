import { useState } from "react"
import { useLocation, Navigate } from "react-router-dom"
import useRegister from "../../Custom/Hook/useRegister"
import InputOTP from "./InputOTP"
function OTP() {
    const register = useRegister()
    const location = useLocation()
    const onSubmit = (event) =>{
        event.preventDefault()
        let formData = new FormData(event.currentTarget)
        console.log(formData.getAll('otp'))
    
    }
    if (!register.formRegister.formEmail && !register.formRegister.formInFor) {
        return <Navigate to={"/register/formInfor"} state={{ from: location }} replace />
    }
    return (
        <div className="container-form">
            <div className="form-register-infor">
                <div className="form-header">
                    <h1>Đăng kí tài khoản</h1>
                    <div class="display-step">
                        <span className="step"><i className="fa-solid fa-check"></i></span>
                        <span className="text">Thông tin cá nhân</span>
                        <span className="line"></span>
                        <span className="step"><i className="fa-solid fa-check"></i></span>
                        <span className="text">Nhập email</span>
                        <span className="line"></span>
                        <span className="step">3</span>
                        <span className="text">Nhập mã OPT</span>
                    </div>
                </div>
                <span className="note-otp" >Mã OTP của bạn đã được gửi về email <br /> vuibuonqua@123gmail.com</span>
                <form onSubmit={onSubmit} >
                    <div className="otp-form">
                        <InputOTP/>
                        <InputOTP/>
                        <InputOTP/>
                        <InputOTP/>
                        <InputOTP/>
                        <InputOTP/>
                    </div>
                    <span className="reset-otp">Gửi lại mã OTP</span>
                    <div className='back-next'>
                        <button className='back'>Quay lại</button>
                        <button type='submit' className='next'>Hoàn tất</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default OTP
