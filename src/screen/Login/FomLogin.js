import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FIELD_EMPTY, REQUIRE_EMAIL, getListError } from "../../Constant/ErrorForm"
import APIAuthen from "../../service/Authen"
function FormLogin() {
    const navigate = useNavigate()
    const [loading , setLoading] = useState(false)
    const [inputEmail, setInputEmail] = useState({
        value: "", listError: getListError([FIELD_EMPTY, REQUIRE_EMAIL])
        , messageError: " " , isError : false
    })

    const [inputPass, setInputPass] = useState({
        value: "", listError: getListError([FIELD_EMPTY])
        , messageError: " " , isError : false
    })
    const focusEmail = () =>{
        setInputEmail({...inputEmail, messageError :" " , isError : false})
        
    }
    const focusPass = () =>{
        setInputPass({...inputPass , messageError : " " , isError : false})
    }

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
                setInputEmail({ ...inputEmail, messageError: func(inputEmail.value) , isError : true})
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
                setInputPass({...inputPass , messageError : func(inputPass.value) , isError : true})
               check = false 
               return
            }
        })
        // return true
        return check
    }
    const submit = (event) =>{
            event.preventDefault()
            if(validateEmail() & validatePass()){
              let formData = new FormData(event.currentTarget)
              let email = formData.get("email")

              let pass = formData.get("pass")
             login()
            }
    }

    // action login
    const login = () =>{
      
        setLoading(true)
        APIAuthen.signIn(() =>{
            setLoading(false)
            setInputPass({...inputPass , messageError : "Mật khẩu không chính xác !"})
        } )
    }
    return (
        <div className="container-form">
            <h2>Chào mừng bạn đến với cửa hàng</h2>
            <form onSubmit={submit}>
                <div className={inputEmail.isError?"field-email text-err" : "field-email"}>
                    <input onFocus={focusEmail} onBlur={blurEmail} onChange={changEmail} className={!inputEmail.isError?"input-email":" input-email border-err"} placeholder=" " type="text" name="email" id="email" value={inputEmail.value} />
                    <label className={inputEmail.isError?"label-email text-err" : "label-email"} htmlFor="email">Email*</label>
                    <i className="fa-solid fa-envelope-open"></i>
                    <span className="message-error">{inputEmail.messageError}</span>
                </div>
                <div className={inputPass.isError?"field-pass text-err" : "field-pass"}>
                    <input onFocus={focusPass} onBlur={blurPass} onChange={changePass} className={!inputPass.isError?"input-pass" : " input-pass border-err"} type="password" name="pass" id="pass" placeholder=" " value={inputPass.value} />
                    <label className={inputPass.isError?"label-pass text-err" : "label-pass"} htmlFor="pass">Mật khẩu*</label>
                    <i className="fa-solid fa-user-secret"></i>
                    <span className="message-error">{inputPass.messageError}</span>
                </div>

                <div className="register-forgetpass">
                    <Link to={''}>Quên mật khẩu </Link>
                    <Link to={'/register/formInFor'}>Bạn chưa có tài khoản?</Link>
                </div>
                <div className="btn-login">
                    <button type="submit">
                        {
                            loading? <i className="fa-solid fa-spinner"></i> 
                            :"Đăng nhập"
                        }
                        
                        
                    </button>
                </div>
            </form>

        </div>
    )
}
export default FormLogin