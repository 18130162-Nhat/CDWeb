import ShoppingCart from './ShoppingCart'
import './cart.css'

function PageCart(){

    return(
        <div className='container-page-cart'>
            <div className='page-cart'>
            <ShoppingCart></ShoppingCart>
        </div>
        </div>
    )
}
export default PageCart