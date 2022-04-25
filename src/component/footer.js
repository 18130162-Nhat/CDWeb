import './style/footer.css'
import appstore from '../Image/app-store.png'
import play from '../Image/google-play.png'
function Footer(){

    return(
        <div className="footer">
        <div className="content-footer">
         <div className="logo-store-shoe">
                <h1>Shoe</h1>
                <p>Shoe Store là một cửa hàng uy tín và chất <br/>
                     lượng, với mẫu mã đa dạng và phong phú <br/> khách hàng
                     có thể thỏa mãi lựa chọn
                     
                    </p>
                    <div className="g-play_a-store">
                        <img src={play} alt=""/>
                        <img src={appstore} alt=""/>
                    </div>
         </div>
         <div className="about-us">
           
            <h2>Thông tin Store</h2>
            <a href="#">Sự nghiệp</a>
            <a href="#">Cửa hàng </a>
            <a href="#">Đối tác bán hàng</a>
            <a href="#">Chính sách bảo mật và điều khoản</a>
         </div>
        
         <div className="customer-care">
            
                <h2>Chăm sóc khách hàng</h2>
                <a href="#">Trug tâm chăm sóc khác hàng</a>
                <a href="#">Hướng dẫn mua hàng</a>
                <a href="#">Theo dõi Order</a>
                <a href="#">Hoàn trả tiền</a>
         </div>
         <div className="contact-us">
           
            <h2>Liên hệ</h2>
           <p><strong>Email : </strong>ShoeStore@gmail.com</p>
           <p><strong>SĐT : </strong>0387865364</p>
           <div>
               <span><i className="fa-brands fa-facebook-f"></i></span>
               <span><i className="fa-brands fa-twitter"></i></span>
               <span><i className="fa-brands fa-instagram"></i></span>
               <span><i className="fa-brands fa-youtube"></i></span>
           </div>
         </div>

        </div>
    </div>
    )
}
export default Footer 