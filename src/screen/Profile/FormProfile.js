import '../../fontawesome-free-6.0.0-web/css/all.css'
import avatar from "../../Image/user-img.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FIELD_EMPTY, getListError } from "../../Constant/ErrorForm"
import APIAuthen from "../../service/Authen"

import React from 'react'

import "../Profile/profile.css"

function Profile() {

    // const navigate = useNavigate()
    // const [loading , setLoading] = useState(false)

    // const [inputPass, setInputPass] = useState({
    //     value: "", listError: getListError([FIELD_EMPTY])
    //     , messageError: " " , isError : false
    // })
    // const [inputNewPass, setInputNewPass] = useState({
    //     value: "", listError: getListError([FIELD_EMPTY])
    //     , messageError: " " , isError : false
    // })

    // const focusPass = () =>{
    //     setInputPass({...inputPass , messageError : " " , isError : false})
    // }

    // const changePass = (event) => {
    //     setInputPass({ ...inputPass, value: event.target.value })
    // }

    // const blurPass = () => {
    //     validatePass()

    // }
    // const validateNewPass = () => {
    //     let check = false
    //     inputNewPass.listError.forEach(func => {
    //         if (func(inputNewPass.value) === undefined) {
    //             setInputPass({ ...inputNewPass, messageError: " " })
    //                 check = true
    //         }else {
    //             setInputEmail({ ...inputNewPass, messageError: func(inputPass.value) , isError : true})
    //             check =false
    //             return
    //         }
    //     })
    //     return check
    // }

    // const validatePass = () =>{
    //     let check = false
    //     inputPass.listError.forEach(func =>{
    //         if(func(inputPass.value)===undefined){
    //              setInputPass({...inputPass, messageError : " "})
    //              check = true
    //         }
    //         else {
    //             setInputPass({...inputPass , messageError : func(inputPass.value) , isError : true})
    //            check = false 
    //            return
    //         }
    //     })
    //     // return true
    //     return check
    // }
    // const submit = (event) =>{
    //         event.preventDefault()
    //         if(validatePass()){
    //           let formData = new FormData(event.currentTarget)

    //           let pass = formData.get("pass")
    //          login()
    //         }
    // }



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
                            <h1 class="profile-title">Hồ sơ của tôi</h1>
                            <div class="note">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                        </div>
                        <div class="change-info">
                            <div class="form-profile">
                                <form>
                                    <div class="input-profile">
                                        <div class="input">
                                            <div class="title-input"><label>Tên hiển thị</label></div>
                                            <div class="text-input">
                                                <div class="input-with-validator-wrapper">
                                                    <div class="input-with-validator">
                                                        <input type="text" placeholder="" maxlength="255" value="Nguyen Van A"></input>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-profile">
                                        <div class="input">
                                            <div class="title-input"><label>Tên tài khoản</label></div>
                                            <div class="text-input">
                                                <div class="input-with-validator-wrapper">
                                                    <div class="input-with-validator">
                                                        <input type="text" placeholder="" maxlength="255" value="nlu789"></input>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-profile">
                                        <div class="input">
                                            <div class="title-input"><label>Số điện thoại</label></div>
                                            <div class="text-input">
                                                <div class="input-with-validator-wrapper">
                                                    <div class="input-with-validator">
                                                        <input type="text" placeholder="" maxlength="255" value="0349111879"></input>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-profile">
                                        <div class="input">
                                            <div class="title-input"><label>Email</label></div>
                                            <div class="text-input">
                                                <div class="input-with-validator-wrapper">
                                                    <div class="input-with-validator">
                                                        <input type="text" placeholder="" maxlength="255" value="nlu@gmail.com"></input>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-profile">
                                        <div class="input">
                                            <div class="title-input"><label>Ngày sinh</label></div>
                                            <div class="text-input">
                                                <div class="input-with-validator-wrapper">
                                                    <div class="input-with-validator">
                                                        <input type="text" placeholder="" maxlength="255" value="01/01/2000"></input>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="btnSaveProfile">
                                <button class="btnSave" type="button">Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile