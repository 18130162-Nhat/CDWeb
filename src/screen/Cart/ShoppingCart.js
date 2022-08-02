import '../../fontawesome-free-6.0.0-web/css/all.css'
import useApplication from '../../Custom/Hook/useApplication'
import bag from '../../Image/shopping-bag.svg'
import { Link } from "react-router-dom"
import React from 'react'
import { useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./cart.css"

function Cart() {
    const useApp = useApplication()
    const navigate = useNavigate()
    const popup = withReactContent(Swal)
    const totalPrice = () => {
        let price = 0
        useApp.cart.forEach(item => {
            price += item.price * item.quantity
        });
        let strPrice = price + ""
        return strPrice.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    }

    const checkOut = () =>{
            let cart = JSON.parse(sessionStorage.getItem("cart"))
            if(cart) navigate("/order")
            else{
                popup.fire(
                    {
                        icon: 'error',
                        title: 'Giỏ hàng trống',
                        text: "Đi đến cửa hàng để mua sắm nào",
                        allowOutsideClick: false,
                        showConfirmButton: true,
                        confirmButtonText: 'Mua sắm'
                    }
                ).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/shop")
                    }
                })
            }
    }


    return (
        <div className="container-cart">

            <div>
                <div className="left-part-container">

                    <div className="left-part">
                        <div className="icon-left">
                            <i className="fa-solid fa-truck-fast" ></i>
                        </div>
                        <div className="description">
                            <div><span className="title-left">Giao hàng nhanh chóng</span></div>
                            <div><span className="detail">Free ship cho đơn hàng từ 500.000</span></div>
                        </div>
                    </div>
                    <div className="left-part">
                        <div className="icon-left">
                            <i className="fa-solid fa-headset"></i>
                        </div>
                        <div className="description">
                            <div><span className="title-left">Hỗ trợ 24/7</span></div>
                            <div><span className="detail">Liên hệ hỗ trợ 24h/ngày</span></div>
                        </div>
                    </div>
                    <div className="left-part">
                        <div className="icon-left">
                            <i className="fa-solid fa-arrows-rotate"></i>
                        </div>
                        <div className="description">
                            <div><span className="title-left">Đổi trả-Hoàn tiền 100%</span></div>
                            <div><span className="detail">Nếu sản phẩm bị lỗi/hư hỏng</span></div>
                        </div>
                    </div>
                    <div className="left-part-end">
                        <div className="icon-left">
                            <i className="fa-solid fa-comment"></i>
                        </div>
                        <div className="description">
                            <div><span className="title-left">Nhận xét-Đánh giá</span></div>
                            <div><span className="detail"></span></div>
                        </div>
                    </div>

                    <button onClick={() => navigate("/shop")} className="btn-continue-buy" type="button">Tiếp tục mua sắm</button>

                </div>
            </div>

            <div className="modal-body">

                <div className="cart-row-header">
                    <Link to={"/pageCart"} className="nav-cart"><span className="cart-header cart2">Giỏ hàng</span></Link>
                    <div className="null-header"></div>
                    <Link to={"/order"} className="nav-detail"><span className="cart-header detail2">Đặt hàng</span></Link>
                    {/* <div className="null-header"></div>
                    <span className="cart-header">Thanh toán</span> */}
                </div>
                {
                    useApp.cart.length === 0 ?
                       <>
                       <div className='d-flex justify-content-center mt-5 pt-5'>
                            <img src={bag}></img>

                        </div>
                        <h1 class="display-6 text-center">Giỏ hàng trống</h1>
                       <div className='text-center'>  <button onClick={() => navigate("/shop")} type="button" className="btn btn-primary mt-5">Đi đến cửa hàng nào</button></div>
                       </>
                       :""
                }

                <div className="cart-items">

                    {
                        useApp.cart.map(item => (
                            <div key={item.idProduct} className="cart-row">
                                <div className="cart-item cart-column">
                                    <img className="cart-item-image" src={item.thumbnail} width="100" height="100"></img>
                                    <span className="cart-item-title">{item.name}</span>
                                </div>
                                <span className="cart-price cart-column">{(item.price + "").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}<sup>vnd</sup></span>
                                <div className="cart-item cart-column cart-amount">
                                    <div onClick={() => useApp.subItem(item)} className="cart-decrease"><i className="fa-solid fa-minus"></i></div>
                                    <div className="cart-quantity cart-column">
                                        <input className="cart-quantity-input" value={item.quantity} min="1"></input>
                                    </div>
                                    <div onClick={() => useApp.addItem(item)} className="cart-increase"><i className="fa-solid fa-plus"></i></div>
                                </div>
                                <button onClick={() => useApp.removeItem(item)} className="btn btn-danger" type="button">Xóa</button>
                            </div>
                        ))
                    }


                    {useApp.cart.length === 0 ? "" :
                        <div className="cart-total mt-5">
                            <strong className="cart-total-title">Tổng Cộng:</strong>
                            <span className="cart-total-price">{totalPrice()}<sup>vnd</sup></span>
                        </div>
                    }
                </div>

            </div>

            <div>
                <div className="checkout">

                    <div className="checkout-note">
                        <span className="note-title">Thêm ghi chú</span>
                    </div>
                    <input className="note-text" name="note" id="" rows="3"></input>
                    <div className="voucher">
                        <span>Mã giảm giá - Voucher</span>
                    </div>
                    <input className="voucher-text" type="text" name="voucher"></input>
                    <div>
                        <button onClick={checkOut} className="btn btn-apply" type="button">Áp dụng</button>
                    </div>

                </div>
            </div>
            {/* <div className="checkout-payment">
                <span className="checkout-title">Thanh toán</span>
            </div> */}

        </div>
    )
}
export default Cart