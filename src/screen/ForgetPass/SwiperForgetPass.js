
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../../Image/product.jpeg'
import image2 from '../../Image/store.jpeg'
import image3 from'../../Image/slide1.jpg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper";
import Slide from "../Login/Slide";
import {TEXT_SLIDE , TEXT_SLIDE1 , TEXT_SLIDE2} from "../../Constant/textIntroduce"
function SwiperForgetPass(){
    return(
        <div className="container-swiper" >
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide> <Slide image={image1}  title ={TEXT_SLIDE}></Slide></SwiperSlide>
        <SwiperSlide><Slide image={image2} title ={TEXT_SLIDE1}></Slide></SwiperSlide>
        <SwiperSlide><Slide image={image3} title ={TEXT_SLIDE2}></Slide></SwiperSlide>
      </Swiper>
      <button className="btn-register"> Đăng kí</button>
    </div>
    )
}
export default SwiperForgetPass