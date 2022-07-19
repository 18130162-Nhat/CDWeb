import '../../fontawesome-free-6.0.0-web/css/all.css'
import { useRef, useState } from 'react'
import avatar from "../../Image/user-img.png"
import { Link, useNavigate } from "react-router-dom"
// import { FIELD_EMPTY, getListError } from "../../Constant/ErrorForm"
import { FIELD_EMPTY, PASSWORD } from '../../Constant/ErrorForm'
import Input from '../../component/Input'
import React from 'react'

import "../Profile/profile.css"

function ChangePass() {

    // const location = useLocation();
    const refFunc = useRef([])
    // const navigate = useNavigate()
    const [valueOfPass, setValue] = useState(" ")
    // const register = useRegister()
    const configPass = {
        name: 'pass',
        label: 'Nhập mật khẩu hiện tại*',
        listError: [PASSWORD, FIELD_EMPTY],
        index: 0,
        repeat: false,
        type: true,
        url: false
    }
    const configNewPass = {
        name: 'newpass',
        label: 'Mật khẩu mới*',
        listError: [PASSWORD, FIELD_EMPTY],
        index: 1,
        repeat: false,
        type: true,
        url: false
    }
    const configRepeatPass = {
        name: 'repeat',
        label: 'Nhập lại mật khẩu mới*',
        listError: [FIELD_EMPTY],
        index: 2,
        repeat: { value: valueOfPass },
        type: true,
        url: false
    }
    const submitForm = (event) => {
        event.preventDefault();
        let check = true

        refFunc.current.forEach(func => {
            check = check & func()
        })
        if (check) {
            let formData = new FormData(event.currentTarget)
            let pass = formData.get("pass")
            let newpass = formData.get("newpass")
            let repeatpass = formData.get("repeat")
        }
    }

    const setValueOf = (callback) => {
        let value = callback()
        setValue(value)
    }

    return (
        <div class="profile-container">
            <div class="part-left">
                <div class="profile-header-left">
                    <Link to={"/pageprofile"} class="avatar-user-link">
                        <div class="user-avatar">
                            <img class="user-avatar-placeholder" src={avatar} alt="" />
                        </div>
                    </Link>
                    <div class="username-head">
                        <div class="username">Nguyen Van A</div>
                        <div class="div-edit">
                            <Link to={"/pageprofile"} class="edit">
                                <i class="fa-solid fa-pen"></i>
                                <span class="text-edit">Sửa hồ sơ</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="active">

                    <div class="dropdown">
                        <div class="dropbtn"><i class="fa-solid fa-user"></i>Tài khoản của tôi</div>
                        <div id="1" class="dropdown-content">
                            <Link to={"/pageprofile"}><span class="text-item">Chỉnh sửa hồ sơ</span></Link>
                            <Link to={"/pagechangepass"}><span class="text-item">Đổi mật khẩu</span></Link>
                        </div>
                    </div>

                    <div class="dropdown">
                        <div class="dropbtn"><i class="fa-solid fa-file-invoice-dollar"></i>Lịch sử mua hàng</div>

                    </div>


                </div>

            </div>
            <div class="part-right">
                <div class="profile-right-ui">
                    <div class="profile-change">
                        <div class="title">
                            <h1 class="profile-title">Đổi mật khẩu</h1>
                            <div class="note">Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div>
                        </div>
                        <div class="change-password">
                            <div class="form-change-pass">
                                <p> (*Bắt buộc)</p>
                                <form onSubmit={submitForm}>
                                    <div className="form-body-change-pass">
                                        <Input config={configPass} refFunc={refFunc} funcParent={setValueOf} >
                                            <i className="fa-solid fa-key"></i>
                                        </Input>
                                        <Input config={configNewPass} refFunc={refFunc} funcParent={setValueOf} >
                                            <i className="fa-solid fa-key"></i>
                                        </Input>
                                        <Input config={configRepeatPass} refFunc={refFunc} >
                                            <i className="fa-brands fa-react"></i>
                                        </Input>

                                        <div class="btnAcceptProfile">
                                            <button class="btnAccept" type="submit" >Xác nhận</button>
                                        </div>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ChangePass