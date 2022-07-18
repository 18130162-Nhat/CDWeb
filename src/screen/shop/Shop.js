
import "./shopStyle.css"
import image from '../../Image/product.jpeg'
import '../../fontawesome-free-6.0.0-web/css/all.css'
function Shop(){

    
    return(
        <div className="cards">
           <div className="card-item ">
                    <div className="img-item mb-5">
                        <img src={image} alt=""/>
                    </div>
                
                    <h6 className="mt-2 mb-3 "> Sold out</h6>
                    <span className="d-block" style={{color :'#d23f57' , fontSize :'18px'}}>120.00 đ</span>
                    <button type="button" class="btn btn-success" style={{width:'calc(100% - 20px)', position:'absolute',bottom:'10px',left:'10px'}}>
                    <i class="fa-solid fa-bag-shopping d-inline-block me-2"></i>
                        Thêm vào giỏ hàng
                    </button>
                
            </div>
            <div className="card-item ">
                    <div className="img-item mb-5">
                        <img src={image} alt=""/>
                    </div>
                
                    <h6 className="mt-2 mb-3 "> Sold out</h6>
                    <span className="d-block" style={{color :'#d23f57' , fontSize :'18px'}}>120.00 đ</span>
                    <button type="button" class="btn btn-success" style={{width:'calc(100% - 20px)', position:'absolute',bottom:'10px',left:'10px'}}>
                    <i class="fa-solid fa-bag-shopping d-inline-block me-2"></i>
                        Thêm vào giỏ hàng
                    </button>
                
            </div>
            <div className="card-item ">
                    <div className="img-item mb-5">
                        <img src={image} alt=""/>
                    </div>
                
                    <h6 className="mt-2 mb-3 "> Sold out</h6>
                    <span className="d-block" style={{color :'#d23f57' , fontSize :'18px'}}>120.00 đ</span>
                    <button type="button" class="btn btn-success" style={{width:'calc(100% - 20px)', position:'absolute',bottom:'10px',left:'10px'}}>
                    <i class="fa-solid fa-bag-shopping d-inline-block me-2"></i>
                        Thêm vào giỏ hàng
                    </button>
                
            </div>
            <div className="card-item ">
                    <div className="img-item mb-5">
                        <img src={image} alt=""/>
                    </div>
                
                    <h6 className="mt-2 mb-3 "> Sold out</h6>
                    <span className="d-block" style={{color :'#d23f57' , fontSize :'18px'}}>120.00 đ</span>
                    <button type="button" class="btn btn-success" style={{width:'calc(100% - 20px)', position:'absolute',bottom:'10px',left:'10px'}}>
                    <i class="fa-solid fa-bag-shopping d-inline-block me-2"></i>
                        Thêm vào giỏ hàng
                    </button>
                
            </div>
            <div className="card-item ">
                    <div className="img-item mb-5">
                        <img src={image} alt=""/>
                    </div>
                
                    <h6 className="mt-2 mb-3 "> Sold out</h6>
                    <span className="d-block" style={{color :'#d23f57' , fontSize :'18px'}}>120.00 đ</span>
                    <button type="button" class="btn btn-success" style={{width:'calc(100% - 20px)', position:'absolute',bottom:'10px',left:'10px'}}>
                    <i class="fa-solid fa-bag-shopping d-inline-block me-2"></i>
                        Thêm vào giỏ hàng
                    </button>
                
            </div>
        </div>
        )
}
export default Shop