
function FormLogin(){

    return(
        <div className="container-form">
        <h2>Chào mừng bạn đến với cửa hàng</h2>
        <form>
            <div className="field-email">
                <input className="input-email" placeholder=" " type="text" name="email" id="email"/>
                <label className="label-email" for="email">Email</label>
                <i className="fa-solid fa-envelope-open"></i>
                <span className="message-error">Vui lòng nhập email !</span>
            </div>
            <div className="field-pass">
                <input className="input-pass" type="text" name="pass" id="pass" placeholder=" "/>
                <label className="label-pass" for="pass">Mật khẩu</label>
                <i className="fa-solid fa-user-secret"></i>
                <span className="message-error">Trường này không được để trống !</span>
            </div>

            <div className="register-forgetpass">
               <a href="#">Quên mật khẩu </a>
               <a href="#">Bạn chưa có tài khoản?</a>
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