
import InputOTP from "./InputOTP"
import { useLocation, Navigate, useNavigate } from "react-router-dom"
import useForgetPass from "../../Custom/Hook/useForgetPass"
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
import { useState } from "react"
function OTP() {
    const toast = withReactContent(Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    }))
    const [loadingReset,setLoadingReset] = useState(false)
    const [err , setErr] = useState('')
    const navigate = useNavigate()
    const forgetpass = useForgetPass()
    const location = useLocation();
    const onSubmit = (event) => {
        event.preventDefault()
        let formData = new FormData(event.currentTarget)
        let form = new FormData()

        let otpStr = ''
        let count = 0
        formData.getAll('otp').forEach(otp => {
            otpStr += otp;
            if(otp.length===0) count++
        })
        if(count>0) {
            setErr('Mã OTP bao gồm 6 chữ số ')
            return
        }else  setErr('')
        form.append('otp', otpStr)
        form.append('email', forgetpass.form.email)
        form.append('pass', forgetpass.form.pass)
        fetch('http://localhost:8080/resetPass', {
            method: 'POST',
            body: form
        })
            .then(res => {
                if (!res.ok) throw new Error(res.status)
                return res.json()
            })
            .then(data => {
                if (data.message === 'CODE_TIME_OUT') {
                    toast.fire({
                        icon: 'error',
                        title: 'Mã OTP đã quá hạn !'
                    })
                    return
                }
                if (data.message === 'INVALID_OTP') {
                    toast.fire({
                        icon: 'error',
                        title: 'Mã OTP không đúng vui lòng nhập lại !'
                    })
                    return
                }
                if (data.message === 'oke') {
                    withReactContent(Swal).fire({
                        icon: 'success',
                        title: 'Đăng kí tài khoản',
                        text: "Bạn đăng kí tài khoản không thành công",
                        allowOutsideClick: false,
                        showConfirmButton: true,
                        confirmButtonText: 'Đănh nhập'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate("/")
                        }
                    })

                    return
                }

            })
            .catch(err => {
                toast.fire({
                    icon: 'error',
                    title: 'Bạn hãy thử lại trong vài phút !'
                })

            })



    }
    const resetOTP = () =>{
        setLoadingReset(true)
        fetch(`http://localhost:8080/resetOTP?email=${forgetpass.form.email}`)
        .then(res =>{
            if(!res.ok) throw new Error(res.status)
            return res.json()
        })
        .then(data =>{
            if(data.message==='NOT_TIME_OUT'){
                toast.fire({
                    icon: 'warning',
                    title: 'Bạn hãy thử lại trong vài phút !'
                })
                return
            }
            if(data.message==='oke'){
                toast.fire({
                    icon: 'success',
                    title: 'Bạn đã gửi lại mã OTP thành công '
                })
                return
            }
        })
        .catch(err =>{
            setLoadingReset(false)
        })
    }
    if (forgetpass.form.formEmail === false) {
        return <Navigate to={"/forgetpass/typePass"} state={{ from: location }} replace />
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
                        <InputOTP />
                        <InputOTP />
                        <InputOTP />
                        <InputOTP />
                        <InputOTP />
                        <InputOTP />
                    </div>
                    <div style={{display:'block',fontSize:'20px'}} className="invalid-feedback mb-5">
                       {err}
                    </div>
                    <span className="reset-otp">
                        {setLoadingReset?
                        <div class="spinner-border spinner-border-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>:'Gửi lại mã OTP'}
                    </span>
                    <div className='back-next'>
                        <button onClick={() => navigate(-1)} className='back'>Quay lại</button>
                        <button type='submit' className='next'>Hoàn tất</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default OTP
