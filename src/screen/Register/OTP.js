import { useLocation  ,Navigate} from "react-router-dom"
import useRegister from "../../Custom/Hook/useRegister"


function OTP(){
    const register = useRegister()
    const location = useLocation()
if(!register.formRegister.formEmail && !register.formRegister.formInFor){
        return <Navigate to={"/register/formInfor"} state={{ from: location }} replace/>
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
             </div>
        </div>
    )
}
export default OTP
