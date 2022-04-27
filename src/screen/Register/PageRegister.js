
import { Outlet } from 'react-router-dom'
import FormInformation from './FormInFor'
import './style.css'
import SwiperRegister from './SwiperRegister'
function PageRegister(){

    return (
        <div className="container-page-register">
       <div className="page-register">
       <SwiperRegister/>
        <Outlet/>
       </div>
        </div>
    )
}
export default PageRegister