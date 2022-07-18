import './style/header.css'
import logo from '../Image/logo-shoe.jpg'
import '../fontawesome-free-6.0.0-web/css/all.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Header(){
    const [show , setShow] = useState(false)
    const [active , setActive] = useState(true) 
    const [search , setSearch] = useState('')
    const [list, setList] = useState([])

    const inputSearch = (event) =>{
        if(event.target.value.trim().length===0) setShow(false)
        else setShow(true)
    }

    
   

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
                <ul style={{marginBottom : '0px'}}> 
                    <li> <Link to={"/order"}>Trang chủ</Link></li>
                    <li> <Link to={"/shop"}>Cửa hàng</Link></li>
                    <li> <Link to={"/contact"}>Liên hệ</Link></li>
                    <li> <Link to={"/pagecart"}>Giỏ hàng</Link></li>
                    <li  className="setting"> <a href="#">Cài đặt</a></li>
                    <li  className="logout"> <a href="#">Đăng xuất</a></li>
            
                   
                </ul>
            </div>
            <div  className="header-search">
                <div  className="search">
                    <input onInput={inputSearch}  className="input-search" type="text" name="search" id="" placeholder="Tìm kiếm"/>
                    <i  className="fa-solid fa-magnifying-glass"></i>
                    <ul className={show?'search-auto-complete show':'search-auto-complete'}>
                        <li>
                        <div className='tag-auto-complete'>
                            <img src={logo}/>
                        </div>
                        <span>Giày ninja shool</span>
                        </li>
                        <li>
                        <div className='tag-auto-complete'>
                            <img src={logo}/>
                        </div>
                        <span>Giày ninja shool</span>
                        </li>
                        <li>
                        <div className='tag-auto-complete'>
                            <img src={logo}/>
                        </div>
                        <span>Giày ninja shool</span>
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div  className="bag-shopping">
        
                    <i  className="fa-solid fa-bag-shopping"></i>

                    <span  className="item-shopping">0</span>
            </div>
            <div  className="header-user">
                <i className="fa-solid fa-user"></i>
                    <span className="name-user">18130162@st.hcmuaf.edu.vn </span>
                <ul style={{paddingLeft : '0'}} className="option">
                    <li>
                        <a href="#">Cài đặt</a>
                    </li>
                    <li style={{paddingBottom:'5px'}}>
                        <a href="#">Đăng xuất</a>
                    </li>
                </ul>

            </div>
            

        </div>
    )
    
}

export default Header
