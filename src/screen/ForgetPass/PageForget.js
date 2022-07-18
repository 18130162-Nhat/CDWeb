


import { Outlet } from 'react-router-dom'
import './style.css'
import SwiperForgetPass from './SwiperForgetPass'
import ForgetPassProvider from '../../context/ForgetPassProvider'
function PageForgetPass(){

    return (
        <div className="container-page-register">
       <div className="page-register">
       <SwiperForgetPass/>
      
          <ForgetPassProvider>
            <Outlet/>
         </ForgetPassProvider>
      
       </div>
        </div>
    )
}
export default PageForgetPass