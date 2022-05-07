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
        </div>
    )
}
export default Cart