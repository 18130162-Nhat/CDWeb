
import { Outlet } from 'react-router-dom'
import RegisterProvider from '../../context/ResgisterProvider'
import './style.css'
import SwiperRegister from './SwiperRegister'
function PageRegister(){

    return (
        <div className="container-page-register">
       <div className="page-register">
       <SwiperRegister/>
       <RegisterProvider>
           <Outlet/>
       </RegisterProvider>
       </div>
        </div>
    )
}
export default PageRegister