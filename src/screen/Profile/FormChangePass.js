import '../../fontawesome-free-6.0.0-web/css/all.css'
import avatar from "../../Image/user-img.png"


import React from 'react'

import "../Profile/profile.css"

function ChangePass() {
    return (
        <div class="profile-container">
            <div class="part-left">
                <div class="profile-header-left">
                    <a class="avatar-user-link" href="./FormProfile.js">
                        <div class="user-avatar">
                            <img class="user-avatar-placeholder" src={avatar} alt="" />
                        </div>
                    </a>
                    <div class="username-head">
                        <div class="username">Nguyen Van A</div>
                        <div class="div-edit">
                            <a class="edit" href="./FormProfile.js">
                                <i class="fa-solid fa-pen"></i>
                                <span class="text-edit">Sửa hồ sơ</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="active">

                    <div class="dropdown">
                        <div class="dropbtn"><i class="fa-solid fa-user"></i>Tài khoản của tôi</div>
                        <div id="1" class="dropdown-content">
                            <a href="./FormProfile.js"><span class="text-item">Chỉnh sửa hồ sơ</span></a>
                            <a href="./FormChangePass.js"><span class="text-item">Đổi mật khẩu</span></a>
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
                                    <form>
                                        <div class="input-profile">
                                            <div class="input-change">
                                                <div class="title-pass"><label>Nhập mật khẩu hiện tại</label></div>
                                                <div class="text-pass">
                                                    <div class="input-pass-with-validator-wrapper">
                                                        <div class="input-pass-with-validator">
                                                            <input type="text" placeholder="" maxlength="255" value=""></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-profile">
                                            <div class="input-change">
                                                <div class="title-pass"><label>Nhập mật khẩu mới</label></div>
                                                <div class="text-pass">
                                                    <div class="input-pass-with-validator-wrapper">
                                                        <div class="input-pass-with-validator">
                                                            <input type="text" placeholder="" maxlength="255" value=""></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-profile">
                                            <div class="input-change">
                                                <div class="title-pass"><label>Nhập lại mật khẩu mới</label></div>
                                                <div class="text-pass">
                                                    <div class="input-pass-with-validator-wrapper">
                                                        <div class="input-pass-with-validator">
                                                            <input type="text" placeholder="" maxlength="255" value=""></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-profile">
                                            <div class="input-change">
                                                    <div class="input-pass-with-validator-wrapper">
                                                        <div class="btnAcceptProfile">
                                                            <button class="btnAccept" type="button">Xác nhận</button>
                                                        </div>
                                                    </div>
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