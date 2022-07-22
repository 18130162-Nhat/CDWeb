import '../../fontawesome-free-6.0.0-web/css/all.css'
import image1 from "../../Image/product1.jpg"
import image2 from "../../Image/product2.jpg"
import image3 from "../../Image/product3.jpg"
import image4 from "../../Image/product4.jpg"
import image5 from "../../Image/product5.jpg"

import React from 'react'

import "./cart.css"

function Cart() {
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

                <button className="btn-continue-buy" type="button">Tiếp tục mua sắm</button>

            </div>
          </div>

            <div className="modal-body">

                <div className="cart-row-header">
                    <span className="cart-header">Giỏ hàng</span>
                    <div className="null-header"></div>
                    <span className="cart-header">Chi tiết</span>
                    <div className="null-header"></div>
                    <span className="cart-header">Thanh toán</span>
                </div>

                <div className="cart-items">

                    <div className="cart-row">
                        <div className="cart-item cart-column">
                            <img className="cart-item-image" src={image1} width="100" height="100"></img>
                            <span className="cart-item-title">Giày Sneaker</span>
                        </div>
                        <span className="cart-price cart-column">250.000<sup>vnd</sup></span>
                        <div className="cart-item cart-column cart-amount">
                            <div className="cart-decrease"><i className="fa-solid fa-minus"></i></div>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" value="1" min="1"></input>
                            </div>
                            <div className="cart-increase"><i className="fa-solid fa-plus"></i></div>
                        </div>
                        <button className="btn btn-danger" type="button">Xóa</button>
                    </div>
                    <div className="cart-row">
                        <div className="cart-item cart-column">
                            <img className="cart-item-image" src={image2} width="100" height="100"></img>
                            <span className="cart-item-title">Giày Sneaker</span>
                        </div>
                        <span className="cart-price cart-column">250.000<sup>vnd</sup></span>
                        <div className="cart-item cart-column cart-amount">
                            <div className="cart-decrease"><i className="fa-solid fa-minus"></i></div>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" value="1" min="1"></input>
                            </div>
                            <div className="cart-increase"><i className="fa-solid fa-plus"></i></div>
                        </div>
                        <button className="btn btn-danger" type="button">Xóa</button>
                    </div>
                    <div className="cart-row">
                        <div className="cart-item cart-column">
                            <img className="cart-item-image" src={image3} width="100" height="100"></img>
                            <span className="cart-item-title">Giày Sneaker</span>
                        </div>
                        <span className="cart-price cart-column">250.000<sup>vnd</sup></span>
                        <div className="cart-item cart-column cart-amount">
                            <div className="cart-decrease"><i className="fa-solid fa-minus"></i></div>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" value="1" min="1"></input>
                            </div>
                            <div className="cart-increase"><i className="fa-solid fa-plus"></i></div>
                        </div>
                        <button className="btn btn-danger" type="button">Xóa</button>
                    </div>
                    <div className="cart-row">
                        <div className="cart-item cart-column">
                            <img className="cart-item-image" src={image4} width="100" height="100"></img>
                            <span className="cart-item-title">Giày Sneaker</span>
                        </div>
                        <span className="cart-price cart-column">250.000<sup>vnd</sup></span>
                        <div className="cart-item cart-column cart-amount">
                            <div className="cart-decrease"><i className="fa-solid fa-minus"></i></div>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" value="1" min="1"></input>
                            </div>
                            <div className="cart-increase"><i className="fa-solid fa-plus"></i></div>
                        </div>
                        <button className="btn btn-danger" type="button">Xóa</button>
                    </div>
                   

                    <div className="cart-total">
                        <strong className="cart-total-title">Tổng Cộng:</strong>
                        <span className="cart-total-price">123.456.789<sup>vnd</sup></span>
                    </div>
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
                        <button className="btn btn-apply" type="button">Áp dụng</button>
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