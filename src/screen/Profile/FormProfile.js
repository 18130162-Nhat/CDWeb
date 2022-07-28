import '../../fontawesome-free-6.0.0-web/css/all.css'
import avatar from "../../Image/user-img.png"
import { useRef, useState, React, useEffect } from 'react'

import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./profile.css"


function Profile() {

    const alter = withReactContent(Swal)

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [lastName, setLastName] = useState({ value: '', error: ''})
    const [phone, setPhone] = useState({ value: '', error: '' })

    const [birthday, setBirthday] = useState({ value: '', error: '' })


    const changeEmail = (event) => {
        setEmail({ ...email, value: event.target.value })
    }
    const changePhone = (event) => {
        setPhone({ ...phone, value: event.target.value })
    }
    const changeLastName = (event) => {
        setLastName({ ...lastName, value: event.target.value })
    }
    // const changeBirthday = (event) => {
    //     setBirthday({ ...birthday, value: event.target.value })
    // }
    const changeFirstName = (event) => {
        setFirstName({ ...firstName, value: event.target.value })
    }



    const checkValue = () => {
        if (firstName.value.trim().length === 0) setFirstName({ ...firstName, error: 'is-invalid' })
        else setFirstName({ ...firstName, error: 'is-valid' })

        // let regex2 = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
        // if (regex2.test(birthday.value.trim())) setBirthday({ ...birthday, error: 'is-valid' })
        // else setBirthday({ ...birthday, error: 'is-invalid' })

        let regex1 = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (regex1.test(email.value.trim())) setEmail({ ...email, error: 'is-valid' })
        else setEmail({ ...email, error: 'is-invalid' })

        if (lastName.value.trim().length === 0) setLastName({ ...lastName, error: 'is-invalid' })
        else setLastName({ ...lastName, error: 'is-valid' })

        let regex = new RegExp(/((09|03|07|08|05)+([0-9]{8})\b)/)
        if (regex.test(phone.value.trim())) setPhone({ ...phone, error: 'is-valid' })
        else setPhone({ ...phone, error: 'is-invalid' })
    }

    const focusFirstName = () => {
        setFirstName({ ...firstName, error: '' })
    }

    const focusEmail = () => {
        setEmail({ ...email, error: '' })
    }

    const focusLastName = () => {
        setLastName({ ...lastName, error: '' })
    }

    const focusPhone = () => {
        setPhone({ ...phone, error: '' })
    }

    // const focusBirthday = () => {
    //     setBirthday({ ...birthday, error: '' })
    // }

   
  useEffect(() => {
    fetch("http://localhost:8080/findCustomerByfilter?idCus=1")
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    setFirstName({...firstName, error: '',value: data.data.firstName})
    setEmail({...email,error:'',value: data.data.email})
    setLastName({...lastName, error: '',value: data.data.lastName})
    setPhone({...phone, error: '',value: data.data.phone})
    })
  },[])

    const submitTest = (event) => {
        event.preventDefault();

        let check = false

        checkValue()
        if (firstName.value.length!==0 && lastName.value.length!==0 && email.value.length!==0 && phone.value.length!==0)
            check = true

        if (check) {

            let form = new FormData()
            form.append('idCus', 1)
            form.append('firstName', firstName.value)
            form.append('email', email.value)
            form.append('lastName', lastName.value)
            form.append('phone', phone.value)
            fetch("http://localhost:8080/customer/updateProfile", {
                method: "POST",
                body: form
            })
                .then(res => {
                    if (!res.ok) throw new Error(res.status)
                    return res.json()
                })
                .then(data => {
                    if (data.message === 'oke') {
                        setFirstName({value: firstName.value})
                        setLastName({value: lastName.value})
                        setEmail({value: email.value})
                        setPhone({value: phone.value})
                        alter.fire(
                            {
                                icon: 'success',
                                title: 'Chỉnh sửa hồ sơ',
                                text: "Cập nhật thành công",
                                allowOutsideClick: false,
                                showConfirmButton: true,
                                confirmButtonText: 'OK'
                            }
                        ).then((result) => {
                            if (result.isConfirmed) {
                                navigate("/pageprofile")
                            }
                        })
                    }
                })
                .catch(err => {
                    alter.fire(
                        {
                            icon: 'error',
                            title: 'Cập nhật không thành công'
                        }
                    )
                })

        }
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
                        <div class="change-info-contain">
                            <div class="form-profile-info">
                                <div className='fillout-order'>
                                    <div>
                                        <label className="form-label">First Name</label>
                                        <input
                                            onInput={changeFirstName}

                                            onFocus={focusFirstName} type="text" className={`form-control ${firstName.error}`} aria-describedby="validationServer03Feedback"
                                            value={firstName.value} />
                                        <div className="invalid-feedback">
                                            Trường này không được trống !
                                        </div>
                                    </div>
                                    <div>
                                        <label className="form-label">Last Name</label>
                                        <input
                                            onInput={changeLastName}

                                            onFocus={focusLastName} type="text" className={`form-control ${lastName.error}`} aria-describedby="validationServer03Feedback"
                                            value={lastName.value} />
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
                                        <label className="form-label">Số điện thoại</label>
                                        <input
                                            onInput={changePhone}

                                            onFocus={focusPhone} type="text" className={`form-control ${phone.error}`} aria-describedby="validationServer03Feedback"
                                            value={phone.value} />
                                        <div className="invalid-feedback">
                                            Trường này phải là số điện thoại !
                                        </div>
                                    </div>
                                    {/* <div>
                                        <label className="form-label">Ngày sinh</label>
                                        <input
                                            onInput={changeBirthday}
                                            onFocus={focusBirthday} type="text" className={`form-control ${birthday.error}`} aria-describedby="validationServer03Feedback"
                                            value={birthday.value} />
                                        <div className="invalid-feedback">
                                            Định dạng không hợp lệ! 'dd/mm/yyyy'
                                        </div>
                                    </div> */}

                                </div>

                            </div>
                            <div class="btnSaveProfile">
                                <button onClick={submitTest} class="btnSave" type="button">Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile