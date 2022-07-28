import './style/header.css'
import logo from '../Image/logo-shoe.jpg'
import '../fontawesome-free-6.0.0-web/css/all.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useApplication from '../Custom/Hook/useApplication'
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(true)
    const [search, setSearch] = useState('')
    const [list, setList] = useState([])
    const user = useApplication()

    const computeQuantity = () =>{
        let count = 0
        user.cart.forEach(p => {
            count +=p.quantity
        });
        return count
    }
    const inputSearch = (event) => {
        setSearch(event.target.value.trim())
        if (event.target.value.trim().length === 0) setShow(false)
        else {
           
            fetch(`http://localhost:8080/searchAutoComplete?value=${event.target.value.trim()}`)
                .then(res => {
                    if (!res.ok) throw new Error(res.status)
                    return res.json()
                }).then(data => {

                    if (data.message === 'oke') {
                        setShow(true)
                        setList(data.data)
                       
                    }
                }
                )
                .catch(err => {
                    setShow(true)
                    setList([])
                })
        }
    }

    const clickIconSearch = () =>{
       if(search.length!==0){
        setShow(false)
        navigate(`/shop?search=${search}`)
       }
       
       
    }
    const clickItem = (item) =>{
        setShow(false)
        navigate(`/detail/${item.idProduct}`)
        setSearch('')
    }

    const activeClick = () => {
        setActive(!active)
    }
    return (
        <div className="header">
            <div onClick={activeClick} className="menu-navigation"><i className="fa-solid fa-bars fa-2x"></i></div>
            <div className="header-logo">
                <a className="logo" href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className={active ? 'header-navigation' : 'header-navigation active'}>
                <div className="navigation-logo">
                    <div onClick={activeClick} className="close-btn"><i className="fa-solid fa-xmark fa-2x"></i></div>
                    <div className="logo-close">
                        <div>
                            <img src={logo} alt="" />
                        </div>

                        <span>18130162@st.hcmuaf.edu.vn</span>

                        <div className="bag-responsive">
                            <i className="fa-solid fa-bag-shopping icon-bag"></i>
                            <span className="item-shopping">{computeQuantity()}</span>
                        </div>
                    </div>

                </div>
                <hr className="hr-navigation" />
                <ul style={{ marginBottom: '0px' }}>
                    <li> <Link to={"/home"}>Trang chủ</Link></li>
                    <li> <Link to={"/shop"}>Cửa hàng</Link></li>
                    <li> <Link to={"/contact"}>Liên hệ</Link></li>

                    <li> <Link to={"/pagecart"}>Giỏ hàng</Link></li>
                    <li className="setting"> <a href="#">Cài đặt</a></li>
                    <li className="logout"> <a href="#">Đăng xuất</a></li>
                </ul>
            </div>

            <div className="header-search">

                <div className="search">
                    <input onInput={inputSearch} className="input-search" type="text" name="search" id="" value={search} placeholder="Tìm kiếm" />
                    <i onClick={clickIconSearch} className="fa-solid fa-magnifying-glass"></i>
                    <ul style={{maxHeight:'300px' , overflowX:'auto'}} className={show ? 'search-auto-complete show' : 'search-auto-complete'}>
                        {list.length === 0 ? <div className='p-2 text-center'>Không tìm thấy kết quả</div> :
                            <>
                                {
                                    list.map(item => (
                                        <>
                                       
                                            <li onClick={() => clickItem(item)} key={item.idProduct}>
                                                
                                                <div className='tag-auto-complete'>
                                                    <img src={logo} />
                                                </div>
                                                <span>{item.name}</span>
                                            </li>
                                            
                                        </>
                                    ))
                                }
                            </>}

                    </ul>
                </div>
            </div>
            <div className="bag-shopping">

                <i className="fa-solid fa-bag-shopping"></i>
                <span className="item-shopping">{computeQuantity()}</span>
            </div>

            {user.user !== undefined ?
                <div className="header-user">
                    <i className="fa-solid fa-user"></i>
                    <span className="name-user" style={{minWidth:'150px'}}>{JSON.parse(sessionStorage.getItem("user")).name}</span>
                    <ul style={{ paddingLeft: '0' }} className="option">
                        <li>
                            <a href="#">Cài đặt</a>
                        </li>
                        <li style={{ paddingBottom: '5px' }}>
                            <a href="#">Đăng xuất</a>
                        </li>
                    </ul>

                </div>
                : <button onClick={() => navigate("/")} type="button" class="btn btn-primary">Đăng nhập</button>}


        </div>
    )

}

export default Header
