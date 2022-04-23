import { useState } from "react"
import { Link } from "react-router-dom"
import { FIELD_EMPTY, REQUIRE_EMAIL, getListError } from "../../Constant/ErrorForm"

function FormLogin() {

    const [inputEmail, setInputEmail] = useState({
        value: "", listError: getListError([FIELD_EMPTY, REQUIRE_EMAIL])
        , messageError: " "
    })

    const [inputPass, setInputPass] = useState({
        value: "", listError: getListError([FIELD_EMPTY])
        , messageError: " "
    })

    const changEmail = (event) => {
        setInputEmail({ ...inputEmail, value: event.target.value })
    }
    const changePass = (event) => {
        setInputPass({ ...inputPass, value: event.target.value })
    }
    const blurEmail = () => {
            validateEmail()
    }
    const blurPass = () => {
        validatePass()

    }
    const validateEmail = () => {
        let check = false
        inputEmail.listError.forEach(func => {
            if (func(inputEmail.value) === undefined) {
                setInputEmail({ ...inputEmail, messageError: " " })
                    check = true
            }else {
                setInputEmail({ ...inputEmail, messageError: func(inputEmail.value) })
                check =false
                return
            }
        })
        return check
    }

    const validatePass = () =>{
        let check = false
        inputPass.listError.forEach(func =>{
            if(func(inputPass.value)===undefined){
                 setInputPass({...inputPass, messageError : " "})
                 check = true
            }
            else {
                setInputPass({...inputPass , messageError : func(inputPass.value)})
               check = false 
               return
            }
        })
        return true
    }
    const submit = (event) =>{
            event.preventDefault()
            if(validateEmail() & validatePass()){
              let formData = new FormData(event.currentTarget)
              let email = formData.get("email")

              let pass = formData.get("pass")
             // API 
            }
    }
    return (
        <div className="container-form">
            <h2>Chào mừng bạn đến với cửa hàng</h2>
            <form onSubmit={submit}>
                <div className="field-email">
                    <input onBlur={blurEmail} onChange={changEmail} className="input-email" placeholder=" " type="text" name="email" id="email" value={inputEmail.value} />
                    <label className="label-email" for="email">Email*</label>
                    <i className="fa-solid fa-envelope-open"></i>
                    <span className="message-error">{inputEmail.messageError}</span>
                </div>
                <div className="field-pass">
                    <input onBlur={blurPass} onChange={changePass} className="input-pass" type="password" name="pass" id="pass" placeholder=" " value={inputPass.value} />
                    <label className="label-pass" for="pass">Mật khẩu*</label>
                    <i className="fa-solid fa-user-secret"></i>
                    <span className="message-error">{inputPass.messageError}</span>
                </div>

                <div className="register-forgetpass">
                    <Link to={''}>Quên mật khẩu </Link>
                    <Link to={''}>Bạn chưa có tài khoản?</Link>
                </div>
                <div className="btn-login">
                    <button type="submit">
                        {/* <i className="fa-solid fa-spinner fa-2x"></i>  */}
                        Đăng nhập
                    </button>
                </div>
            </form>

        </div>
    )
}
export default FormLogin