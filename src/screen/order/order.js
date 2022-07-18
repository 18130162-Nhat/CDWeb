
import { useState } from 'react'
import './order.css'
function Order() {

const [user,setUser] = useState({value : "" , error:''})
const [phone , setPhone] = useState({value : '' , error:''})
const [address,setAddress] = useState({value : '' , error:''})
const [company , setCompany] = useState("")
const [note , setNote] = useState("")

const changeUser = (event) =>{
   setUser({...user,value:event.target.value})
}
const changePhone = (event) =>{
    setPhone({...phone,value:event.target.value})
 }
 const changeAddress = (event) =>{
    setAddress({...address,value:event.target.value})
 }
 const changeCompnay  = (event) =>{
        setCompany(event.target.value)
 }
 const changeNote = (event) =>{
        setNote(event.target.value)
 }

 const checkValue = () =>{
    if(user.value.trim().length===0) setUser({...user,error:'is-invalid'})
    else setUser({...user,error:'is-valid'})
    if(address.value.trim().length===0) setAddress({...address,error:'is-invalid'})
    else setAddress({...address,error:'is-valid'})
    let regex  = new RegExp(/((09|03|07|08|05)+([0-9]{8})\b)/)
    if(regex.test(phone.value.trim())) setPhone({...phone , error:'is-valid'})
    else setPhone({...phone,error:'is-invalid'})
 }
 const focusUser = () =>{
    setUser({...user , error:''})
 }
 const focusAddress = () =>{
    setAddress({...address,error:''})
 }
 const focusPhone = () =>{
    setPhone({...phone , error:''})
 }

 const submit = () =>{
    checkValue()
    if(phone.error==='is-valid' && address.error==='is-valid' && user.error==='is-valid') alert('oke')
 }

    return (
        <div className='container-page-cart'>
            <div className='page-cart'>
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

                        <div className='fillout-order'>
                            <div>
                                <label className="form-label">Tên người nhận</label>
                                <input
                                onInput={changeUser} 
                                onFocus = {focusUser} type="text" className={`form-control ${user.error}`} aria-describedby="validationServer03Feedback" 
                                value={user.value}/>
                                <div className="invalid-feedback">
                                    Trường này không được trống !
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className="form-label">Địa chỉ</label>
                                <input 
                                onInput={changeAddress} 
                                onFocus={focusAddress} type="text" className={`form-control ${address.error}`} aria-describedby="validationServer03Feedback" 
                                value={address.value}/>
                                <div className="invalid-feedback">
                                    Trường này không được trống !
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className="form-label">Số điện thoại</label>
                                <input
                                onInput={changePhone}
                                onFocus = {focusPhone} type="text" className={`form-control ${phone.error}`} aria-describedby="validationServer03Feedback" 
                                value={phone.value}/>
                                <div className="invalid-feedback">
                                    Trường này phải là số điện thoại !
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className="form-label">Tên công ty</label>
                                <input 
                                   onInput={changeCompnay} value = {company} type="text" className="form-control" aria-describedby="validationServer03Feedback" />
                            </div>

                        </div>
                    </div>


                    <div>
                        <div className="checkout">
                            <div className='d-flex justify-content-between mb-3'>
                                <span>Tổng sản phẩm :</span>
                                <strong>5</strong>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <span>Tổng tiền :</span>
                                <strong>1200.00 vnd</strong>
                            </div>

                            <div className="checkout-note">
                                <span className="note-title">Thêm ghi chú</span>
                            </div>
                            <input onInput={changeNote} className="note-text" name="note" id="" rows="3"
                                    value={note}></input>
                            <div>
                                <button onClick={submit} className="btn btn-apply" type="button">Đặt hàng</button>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Order