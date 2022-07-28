import '../../fontawesome-free-6.0.0-web/css/all.css'
import avatar from "../../Image/user-img.png"
import { useRef, useState } from 'react'
import useApplication from '../../Custom/Hook/useApplication'
import { Link, Navigate, useLocation } from "react-router-dom"
import Input from '../../component/Input'
import {REQUIRE_EMAIL ,FIELD_EMPTY ,PASSWORD} from '../../Constant/ErrorForm'

import React from 'react'

import "./profile.css"

function Profile() {
    const location = useLocation();
    const useApp = useApplication()

    // const refFunc = useRef([]) 
    // const configEmail = {
    //     name : 'email' ,
    //     listError : [REQUIRE_EMAIL],
    //     index : 0 ,
    //     repeat : false,
    //     type : false,
    //     url: {url :"http://localhost:8080/isExistEmail?email=", type : "email"}
    // }
    const [email, setEmail] = useState({ value: "", error: '' })
    const [phone, setPhone] = useState({ value: '', error: '' })
    const [address, setAddress] = useState({ value: '', error: '' })
    const [birthday, setBirthday] = useState({ value: "", error: '' })
    const [user, setUser] = useState({ value: "", error: '' })

    const changeEmail = (event) => {
        setEmail({ ...email, value: event.target.value })
    }
    const changePhone = (event) => {
        setPhone({ ...phone, value: event.target.value })
    }
    const changeAddress = (event) => {
        setAddress({ ...address, value: event.target.value })
    }
    const changeBirthday = (event) => {
        setBirthday({ ...birthday, value: event.target.value })
    }
    const changeUser = (event) => {
        setUser({ ...user, value: event.target.value })
    }

    const checkValue = () => {
        if (user.value.trim().length === 0) setUser({ ...user, error: 'is-invalid' })
        else setUser({ ...user, error: 'is-valid' })

        let regex2 = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)
        if (regex2.test(birthday.value.trim())) setBirthday({ ...birthday, error: 'is-valid' })
        else setBirthday({ ...birthday, error: 'is-invalid' })

        let regex1 = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (regex1.test(email.value.trim())) setEmail({ ...email, error: 'is-valid' })
        else setEmail({ ...email, error: 'is-invalid' })

        if (address.value.trim().length === 0) setAddress({ ...address, error: 'is-invalid' })
        else setAddress({ ...address, error: 'is-valid' })

        let regex = new RegExp(/((09|03|07|08|05)+([0-9]{8})\b)/)
        if (regex.test(phone.value.trim())) setPhone({ ...phone, error: 'is-valid' })
        else setPhone({ ...phone, error: 'is-invalid' })
    }
    const focusUser = () => {
        setUser({ ...user, error: '' })
    }

    const focusEmail = () => {
        setEmail({ ...email, error: '' })
    }
    const focusAddress = () => {
        setAddress({ ...address, error: '' })
    }
    const focusPhone = () => {
        setPhone({ ...phone, error: '' })
    }

    const focusBirthday = () => {
        setBirthday({ ...birthday, error: '' })
    }
    const submit = () => {
        checkValue()
        if (phone.error === 'is-valid' && address.error === 'is-valid' && email.error === 'is-valid' && user.error === 'is-valid' && birthday.error === 'is-valid') alert('oke')
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
                        <div class="username">{useApp.user.name}</div>
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
                    <div class="dropbtn"><i class="fa-solid fa-file-invoice-dollar"></i><Link style={{textDecoration:'none' ,color:'#111111'}} to={"/history-order"}><span class="text-drop">Lịch sử mua hàng</span></Link></div>

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
                        <div class="change-info-contain">
                            <div class="form-profile-info">
                                <div className='fillout-order'>
                                    <div>
                                        <label className="form-label">Tên hiển thị</label>
                                        <input
                                            onInput={changeUser}
                                            onFocus={focusUser} type="text" className={`form-control ${user.error}`} aria-describedby="validationServer03Feedback"
                                            value={user.value} />
                                        <div className="invalid-feedback">
                                            Trường này không được trống !
                                        </div>
                                    </div>
                                    <div>
                                        <label className="form-label">Email</label>
                                        <input
                                            onInput={changeEmail}
                                            onFocus={focusEmail} type="text" className={`form-control ${email.error}`} aria-describedby="validationServer03Feedback"
                                            value={email.value} />
                                        <div className="invalid-feedback">
                                            Trường này phải là email !
                                        </div>
                                        {/* <label className="form-label">Email</label>
                                        <Input config={configEmail} refFunc={refFunc} ></Input> */}
                                    </div>
                                    <div>
                                        <label className="form-label">Địa chỉ</label>
                                        <input
                                            onInput={changeAddress}
                                            onFocus={focusAddress} type="text" className={`form-control ${address.error}`} aria-describedby="validationServer03Feedback"
                                            value={address.value} />
                                        <div className="invalid-feedback">
                                            Trường này không được trống !
                                        </div>
                                    </div>
                                    <div>
                                        <label className="form-label">Số điện thoại</label>
                                        <input
                                            onInput={changePhone}
                                            onFocus={focusPhone} type="text" className={`form-control ${phone.error}`} aria-describedby="validationServer03Feedback"
                                            value={phone.value} />
                                        <div className="invalid-feedback">
                                            Trường này phải là số điện thoại !
                                        </div>
                                    </div>
                                    <div>
                                        <label className="form-label">Ngày sinh</label>
                                        <input
                                            onInput={changeBirthday}
                                            onFocus={focusBirthday} type="text" className={`form-control ${birthday.error}`} aria-describedby="validationServer03Feedback"
                                            value={birthday.value} />
                                        <div className="invalid-feedback">
                                            Định dạng không hợp lệ! 'dd/mm/yyyy'
                                        </div>
                                    </div>

                                </div>
                                {/* <form>
                                    <div class="input-profile">
                                        <div class="input">
                                            <div class="title-input"><label>Tên hiển thị</label></div>
                                            <div class="text-input">
                                                <div class="input-with-validator-wrapper">
                                                    <div class="input-with-validator-profile">
                                                        <input
                                                            onInput={changeUser}
                                                            onFocus={focusUser} type="text" className={`form-control ${user.error}`} aria-describedby="validationServer03Feedback"
                                                            value={user.value} />
                                                            <div className="invalid-feedback">
                                                            Trường này không được trống !
                                                        </div>
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
                                </form> */}
                            </div>
                            <div class="btnSaveProfile">
                                <button onClick={submit} class="btnSave" type="button">Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile