
import InputOTP from "./InputOTP"
import { useLocation,Navigate, useNavigate } from "react-router-dom"
import useForgetPass from "../../Custom/Hook/useForgetPass"
function OTP() {
    const navigate = useNavigate()
    const forgetpass = useForgetPass()
    const location = useLocation();
    const onSubmit = (event) =>{
        event.preventDefault()
        let formData = new FormData(event.currentTarget)
        console.log(formData.getAll('otp'))

       
    
    }
    if(forgetpass.form.formEmail===false){
        return <Navigate to={"/forgetpass/typePass"} state={{ from: location }} replace/>
    }
    return (
        <div className="container-form">
            <div className="form-register-infor">
                <div className="form-header">
                    <h1>Quên mật khẩu</h1>
                    <div class="display-step">
                        <span className="step"><i className="fa-solid fa-check"></i></span>
                        <span className="text">Nhập mật khẩu mới</span>
                        <span className="line"></span>
                        <span className="step-none">2</span>
                        <span className="text">Nhập mã OTP</span>
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
                        <button onClick={() =>navigate(-1)} className='back'>Quay lại</button>
                        <button type='submit' className='next'>Hoàn tất</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default OTP
