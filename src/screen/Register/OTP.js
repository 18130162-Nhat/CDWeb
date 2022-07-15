import { useState } from "react"
import { useLocation, Navigate } from "react-router-dom"
import Loading from "../../component/Loading"
import useRegister from "../../Custom/Hook/useRegister"
function OTP() {
    const register = useRegister()
    const location = useLocation()
    const [otp, setOTP] = useState({ value1: "", value2: "", value3: "", value4: "", value5: "", value6: "" })
    const checkValue =(event) =>{
        let regex = /[0-9]{1}/
        let value = event.target.value.trim()
        let testRegex = new RegExp(regex);
        if(testRegex.test(value)) return  false
        return true
    }
    const changeInput = (event, index) => {
        let value = event.target.value.trim()
        switch (index) {
            case 1: {
               if(checkValue(event)){
                setOTP({ ...otp ,value1:""})
               }
               else{
                if(value.length<=1){
                    setOTP({ ...otp, value1: event.target.value })
                }else{
                    setOTP({ ...otp})
                }
               }
                break
            }
            case 2: {
                if(checkValue(event)){
                    setOTP({ ...otp ,value2:""})
                   }
                   else{
                    if(value.length<=1){
                        setOTP({ ...otp, value2: event.target.value })
                    }else{
                        setOTP({ ...otp})
                    }
                   }
                break
            }
            case 3: {
                if(checkValue(event)){
                    setOTP({ ...otp ,value3:""})
                   }
                   else{
                    if(value.length<=1){
                        setOTP({ ...otp, value3: event.target.value })
                    }else{
                        setOTP({ ...otp})
                    }
                   }
                break
            }
            case 4: {
                if(checkValue(event)){
                    setOTP({ ...otp ,value4:""})
                   }
                   else{
                    if(value.length<=1){
                        setOTP({ ...otp, value4: event.target.value })
                    }else{
                        setOTP({ ...otp})
                    }
                   }
                break
            }
            case 5: {
                if(checkValue(event)){
                    setOTP({ ...otp ,value5:""})
                   }
                   else{
                    if(value.length<=1){
                        setOTP({ ...otp, value5: event.target.value })
                    }else{
                        setOTP({ ...otp})
                    }
                   }
                break
            }
            case 6: {
                if(checkValue(event)){
                    setOTP({ ...otp ,value6:""})
                   }
                   else{
                    if(value.length<=1){
                        setOTP({ ...otp, value6: event.target.value })
                    }else{
                        setOTP({ ...otp})
                    }
                   }
                break
            }
        }
    }
    // if(true) return <>
    // <Loading/>
    // </>
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
                <form  >
                    <div className="otp-form">
                        <input onChange={(event) => { changeInput(event, 1) }} type="text"  value={otp.value1}/>
                        <input onChange={(event) => { changeInput(event, 2) }} type="text" value={otp.value2} />
                        <input onChange={(event) => { changeInput(event, 3) }} type="text" value={otp.value3}/>
                        <input onChange={(event) => { changeInput(event, 4) }} type="text" value={otp.value4}/>
                        <input onChange={(event) => { changeInput(event, 5) }} type="text" value={otp.value5}/>
                        <input onChange={(event) => { changeInput(event, 6) }} type="text" value={otp.value6} />
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
