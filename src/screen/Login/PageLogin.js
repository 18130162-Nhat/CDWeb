

import FormLogin from './FomLogin'
import './style.css'
import SwiperLogin from './SwiperLogin'

function PageLogin(){

    return(
        <div className='container-page-login'>
            <div className='page-login'>
            <SwiperLogin></SwiperLogin>
            <FormLogin></FormLogin>

        </div>
        </div>
    )
}
export default PageLogin