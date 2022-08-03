import '../../fontawesome-free-6.0.0-web/css/all.css'
import { useRef, useState } from 'react'
import avatar from "../../Image/user-img.png"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import useApplication from '../../Custom/Hook/useApplication'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FIELD_EMPTY, PASSWORD } from '../../Constant/ErrorForm'
import Input from '../../component/Input'
import React from 'react'

import "../Profile/changepass.css"

function ChangePass() {
    const location = useLocation();
    const useApp = useApplication()

    const alter = withReactContent(Swal)
    const navigate = useNavigate()

    // const location = useLocation();
    const refFunc = useRef([])

    const [valueOfPass, setValue] = useState("")



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
        listError: [PASSWORD],
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
            console.log(check)
            let formData = new FormData(event.currentTarget)
            
            let pass = formData.get("pass")
            let newpass = formData.get("newpass")


            let form = new FormData()

            let id = JSON.parse(sessionStorage.getItem("user")).idUser
            form.append('idCus', id)
            form.append('pass', pass)
            form.append('newpass', newpass)

            fetch("http://localhost:8080/customer/changePass", {
                method: "POST",
                body: form
            })
                .then(res => {
                    if (!res.ok) throw new Error(res.status)
                    return res.json()
                })
                .then(data => {
                    if (data.message === 'oke') {
                        alter.fire(

                            {
                                icon: 'success',
                                title: 'Đổi mật khẩu',
                                text: "Đổi mật khẩu thành công",
                                allowOutsideClick: false,
                                showConfirmButton: true,
                                confirmButtonText: 'OK'
                            }
                        ).then((result) => {
                            if (result.isConfirmed) {
                                navigate("/pageprofile")
                            }
                        })
                    } else {
                        alter.fire(

                            {
                                icon: 'error',
                                title: 'Đổi mật khẩu',
                                text: "Đổi mật khẩu không thành công",
                                allowOutsideClick: false,
                                showConfirmButton: true,
                                confirmButtonText: 'OK'
                            }
                        ).then((result) => {
                            if (result.isConfirmed) {
                                navigate("/pagechangepass")
                            }
                        })
                    }
                })
                .catch(err => {
                    alter.fire(
                        {
                            icon: 'error',
                            title: 'Đổi mật khẩu không thành công'
                        }
                    )
                })

        }
    }

    const setValueOf = (callback) => {
        let value = callback()
        setValue(value)
    }
    if (useApp.user === undefined) {
        return <Navigate to={"/"} state={{ from: location }} replace />
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
                        <div class="username">{JSON.parse(sessionStorage.getItem("user")).name}</div>
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
                        <div class="dropbtn"><i class="fa-solid fa-user"></i><span class="text-drop">Tài khoản của tôi</span></div>
                        <div id="1" class="dropdown-content">
                            <Link to={"/pageprofile"}><span class="text-item">Chỉnh sửa hồ sơ</span></Link>
                            <Link to={"/pagechangepass"}><span class="text-item">Đổi mật khẩu</span></Link>
                        </div>
                    </div>

                    <div class="dropdown">
                        <div class="dropbtn"><i class="fa-solid fa-file-invoice-dollar"></i><Link style={{ textDecoration: 'none', color: '#111111' }} to={"/history-order"}><span class="text-drop">Lịch sử mua hàng</span></Link></div>

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
                                        <Input config={configPass} refFunc={refFunc} >
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