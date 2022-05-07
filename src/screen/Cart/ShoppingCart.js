import '../../fontawesome-free-6.0.0-web/css/all.css'
import image1 from "../../Image/product1.jpg"
import image2 from "../../Image/product2.jpg"
import image3 from "../../Image/product3.jpg"
import image4 from "../../Image/product4.jpg"
import image5 from "../../Image/product5.jpg"

import React from 'react'

import "../Cart/cart.css"

function Cart() {
    return (
        <div class="container">

            <div class="left-part-container">
                <div class="left-part">
                    <div class="icon-left">
                        <i class="fa-solid fa-truck-fast" ></i>
                    </div>
                    <div class="description">
                        <div><span class="title-left">Giao hàng nhanh chóng</span></div>
                        <div><span class="detail">Free ship cho đơn hàng từ 500.000</span></div>
                    </div>
                </div>
                <div class="left-part">
                    <div class="icon-left">
                        <i class="fa-solid fa-headset"></i>
                    </div>
                    <div class="description">
                        <div><span class="title-left">Hỗ trợ 24/7</span></div>
                        <div><span class="detail">Liên hệ hỗ trợ 24h/ngày</span></div>
                    </div>
                </div>
                <div class="left-part">
                    <div class="icon-left">
                        <i class="fa-solid fa-arrows-rotate"></i>
                    </div>
                    <div class="description">
                        <div><span class="title-left">Đổi trả-Hoàn tiền 100%</span></div>
                        <div><span class="detail">Nếu sản phẩm bị lỗi/hư hỏng</span></div>
                    </div>
                </div>
                <div class="left-part-end">
                    <div class="icon-left">
                    <i class="fa-solid fa-comment"></i>
                    </div>
                    <div class="description">
                        <div><span class="title-left">Nhận xét-Đánh giá</span></div>
                        <div><span class="detail"></span></div>
                    </div>
                </div>

                <button class="btn-continue-buy" type="button">Tiếp tục mua sắm</button>
                
            </div>

            <div class="modal-body">

                <div class="cart-row-header">
                    <span class="cart-header">Giỏ hàng</span>
                    <div class="null-header"></div>
                    <span class="cart-header">Chi tiết</span>
                    <div class="null-header"></div>
                    <span class="cart-header">Thanh toán</span>
                </div>

                <div class="cart-items">

                    <div class="cart-row">
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src={image1} width="100" height="100"></img>
                            <span class="cart-item-title">Giày Sneaker</span>
                        </div>
                        <span class="cart-price cart-column">250.000<sup>vnd</sup></span>
                        <div class="cart-item cart-column cart-amount">
                            <div class="cart-decrease"><i class="fa-solid fa-minus"></i></div>
                            <div class="cart-quantity cart-column">
                                <input class="cart-quantity-input" value="1" min="1"></input>
                            </div>
                            <div class="cart-increase"><i class="fa-solid fa-plus"></i></div>
                        </div>
                        <button class="btn btn-danger" type="button">Xóa</button>
                    </div>
                    <div class="cart-row">
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src={image2} width="100" height="100"></img>
                            <span class="cart-item-title">Giày Sneaker</span>
                        </div>
                        <span class="cart-price cart-column">250.000<sup>vnd</sup></span>
                        <div class="cart-item cart-column cart-amount">
                            <div class="cart-decrease"><i class="fa-solid fa-minus"></i></div>
                            <div class="cart-quantity cart-column">
                                <input class="cart-quantity-input" value="1" min="1"></input>
                            </div>
                            <div class="cart-increase"><i class="fa-solid fa-plus"></i></div>
                        </div>
                        <button class="btn btn-danger" type="button">Xóa</button>
                    </div>
                    <div class="cart-row">
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src={image3} width="100" height="100"></img>
                            <span class="cart-item-title">Giày Sneaker</span>
                        </div>
                        <span class="cart-price cart-column">250.000<sup>vnd</sup></span>
                        <div class="cart-item cart-column cart-amount">
                            <div class="cart-decrease"><i class="fa-solid fa-minus"></i></div>
                            <div class="cart-quantity cart-column">
                                <input class="cart-quantity-input" value="1" min="1"></input>
                            </div>
                            <div class="cart-increase"><i class="fa-solid fa-plus"></i></div>
                        </div>
                        <button class="btn btn-danger" type="button">Xóa</button>
                    </div>
                    <div class="cart-row">
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src={image4} width="100" height="100"></img>
                            <span class="cart-item-title">Giày Sneaker</span>
                        </div>
                        <span class="cart-price cart-column">250.000<sup>vnd</sup></span>
                        <div class="cart-item cart-column cart-amount">
                            <div class="cart-decrease"><i class="fa-solid fa-minus"></i></div>
                            <div class="cart-quantity cart-column">
                                <input class="cart-quantity-input" value="1" min="1"></input>
                            </div>
                            <div class="cart-increase"><i class="fa-solid fa-plus"></i></div>
                        </div>
                        <button class="btn btn-danger" type="button">Xóa</button>
                    </div>
                    <div class="cart-row">
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src={image5} width="100" height="100"></img>
                            <span class="cart-item-title">Giày Sneaker hhhh hhhhhhh hhhhhh hhhhh hhh hhhhh hhhhhh</span>
                        </div>
                        <span class="cart-price cart-column">250.000<sup>vnd</sup></span>
                        <div class="cart-item cart-column cart-amount">
                            <div class="cart-decrease"><i class="fa-solid fa-minus"></i></div>
                            <div class="cart-quantity cart-column">
                                <input class="cart-quantity-input" value="1" min="1"></input>
                            </div>
                            <div class="cart-increase"><i class="fa-solid fa-plus"></i></div>
                        </div>
                        <button class="btn btn-danger" type="button">Xóa</button>
                    </div>

                    <div class="cart-total">
                        <strong class="cart-total-title">Tổng Cộng:</strong>
                        <span class="cart-total-price">123.456.789<sup>vnd</sup></span>
                    </div>
                </div>

            </div>

            <div class="checkout">

                <div class="checkout-note">
                    <span class="note-title">Thêm ghi chú</span>
                    <input class="note-text" name="note" id="" rows="3"></input>
                </div>
                <div class="voucher">
                    <span>Mã giảm giá - Voucher</span>
                    <input class="voucher-text" type="text" name="voucher"></input>
                </div>
                <button class="btn btn-apply" type="button">Áp dụng</button>
                
            </div>
            {/* <div class="checkout-payment">
                <span class="checkout-title">Thanh toán</span>
            </div> */}

        </div>
    )
}
export default Cart