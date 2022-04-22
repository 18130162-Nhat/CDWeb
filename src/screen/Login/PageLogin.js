

import FormLogin from './FomLogin'
import './style.css'
import SwiperLogin from './SwiperLogin'

function PageLogin(){

    return(
        <div className='page-login'>
            <SwiperLogin></SwiperLogin>
            <FormLogin></FormLogin>

        </div>
    )
}
export default PageLogin