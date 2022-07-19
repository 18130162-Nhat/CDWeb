import '../../fontawesome-free-6.0.0-web/css/all.css'
import avatar from "../../Image/user-img.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FIELD_EMPTY, getListError } from "../../Constant/ErrorForm"
import APIAuthen from "../../service/Authen"

import React from 'react'

import "../Profile/profile.css"

function Profile() {

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
                        <div class="dropbtn"><i class="fa-solid fa-user"></i><span class="text-drop">Tài khoản của tôi</span></div>
                        <div id="1" class="dropdown-content">
                            <Link to={"/pageprofile"}><span class="text-item">Chỉnh sửa hồ sơ</span></Link>
                            <Link to={"/pagechangepass"}><span class="text-item">Đổi mật khẩu</span></Link>
                    </div>
                </div>

                <div class="dropdown">
                    <div class="dropbtn"><i class="fa-solid fa-file-invoice-dollar"></i><span class="text-drop">Lịch sử mua hàng</span></div>
 
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
                                                        <input type="text" placeholder="Nguyen Van A" maxlength="255"></input>
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
                                                        <input type="text" placeholder="nlu789" maxlength="255" ></input>
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
                                                        <input type="text" placeholder="0349111879" maxlength="255" ></input>
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
                                                        <input type="text" placeholder="nlu@gmail.com" maxlength="255" ></input>
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
                                                        <input type="text" placeholder="01/01/2000" maxlength="255" ></input>
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