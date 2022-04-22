import './style/header.css'
import logo from '../Image/logo-shoe.jpg'
import '../fontawesome-free-6.0.0-web/css/all.css'
import { useState } from 'react'
function Header(){

    const [active , setActive] = useState(true) 

    const activeClick = () =>{
        setActive(!active)
    }
    return(
        <div className="header">

            <div onClick={activeClick} className="menu-navigation"><i  className="fa-solid fa-bars fa-2x"></i></div>
            <div  className="header-logo"> 
                <a  className="logo" href="#">
                    <img src={logo} alt=""/>
                </a>
            </div>
            <div className={active?'header-navigation' : 'header-navigation active'}>
                    <div  className="navigation-logo">
                        <div onClick={activeClick}  className="close-btn"><i  className="fa-solid fa-xmark fa-2x"></i></div>
                       <div  className="logo-close">
                        <div>
                            <img src={logo} alt=""/>
                        </div>
                      
                          <span>18130162@st.hcmuaf.edu.vn</span>
                       
                       <div  className="bag-responsive">
                        <i className="fa-solid fa-bag-shopping icon-bag"></i>
                        <span  className="item-shopping">0</span>
                       </div>
                       </div> 

                    </div>
                    <hr  className="hr-navigation"/>
                <ul> 
                    <li> <a href="#">Trang chủ</a></li>
                    <li> <a href="#">Cửa hàng</a></li>
                    <li> <a href="#">Liên hệ</a></li>
                    <li> <a href="#">Giỏ hàng</a></li>
                    <li  className="setting"> <a href="#">Cài đặt</a></li>
                    <li  className="logout"> <a href="#">Đăng xuất</a></li>
            
                   
                </ul>
            </div>
            <div  className="header-search">
                <div  className="search">
                    <input  className="input-search" type="text" name="search" id="" placeholder="tiềm kiếm"/>
                    <i  className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div  className="bag-shopping">
        
                    <i  className="fa-solid fa-bag-shopping"></i>

                    <span  className="item-shopping">0</span>
            </div>
            <div  className="header-user">
                <i className="fa-solid fa-user"></i>
                    <span className="name-user">18130162@st.hcmuaf.edu.vn </span>
                <ul className="option">
                    <li>
                        <a href="#">Cài đặt</a>
                    </li>
                    <li>
                        <a href="#">Đăng xuất</a>
                    </li>
                </ul>

            </div>
            

        </div>
    )
    
}

export default Header
