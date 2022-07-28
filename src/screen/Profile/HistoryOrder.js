import './profile.css'
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import avatar from "../../Image/user-img.png"
import useApplication from '../../Custom/Hook/useApplication';
import { useEffect, useState } from 'react';
import bag from '../../Image/shopping-bag.svg'

function HistoryOrder() {
    const location = useLocation();
    const useApp = useApplication()
    const navigate = useNavigate()

    const [listOrder, setListOrder] = useState([])

    const formatDay = (date) =>{
        let array = date.toLocaleDateString("en-US").split("/")
        return array[1]+"/"+array[0]+"/"+array[2]
    }
    useEffect(() => {
        fetch(`http://localhost:8080/findOrder?id=${JSON.parse(sessionStorage.getItem("user")).idUser}`)
            .then(res => {
               
                return res.json()
            })
            .then(data => {
                if (data.message ==='oke') {
                    setListOrder(data.data)
                    console.log(data.data)
                }
            })
            .catch(err => {
                setListOrder([])
            })
    }, [])
    if (useApp.user === undefined) {
        return <Navigate to={"/"} state={{ from: location }} replace />
    }
    return (
        <div className='container-profile-page'>
            <div class="profile">
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
                                    <h1 class="profile-title">Thông tin đơn hàng</h1>

                                </div>
                                <div class="change-info-contain">
                                    {listOrder.length === 0 ?
                                        <>
                                            <div className='text-center p-5'>
                                                <img src={bag}></img>
                                            </div>
                                            <h1 class="display-6 text-center">Đơn hàng trống</h1>
                                            <div className='text-center p-3'><button onClick={() => navigate("/shop")} type="button" class="btn btn-primary">Đi đến cửa hàng nào</button></div>
                                        </>
                                        :
                                        <div class="form-profile-info mt-5">

                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#Order</th>
                                                        <th scope="col">Trạng thái</th>
                                                        <th scope="col">Ngày tạo</th>
                                                        <th scope="col">Tổng tiền</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        listOrder.map(order => (
                                                            <tr>
                                                                <th scope="row">{order.idOrder}</th>
                                                                <td>Đang chờ xử lý</td>
                                                                <td>{formatDay(new Date(order.timestamp+""))}</td>
                                                                <td>{(order.priceOrder+"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} vnd</td>
                                                            </tr>
                                                        ))
                                                    }


                                                </tbody>
                                            </table>

                                        </div>

                                    }



                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default HistoryOrder