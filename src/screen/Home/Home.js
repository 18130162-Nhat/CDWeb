
import './home.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination } from "swiper";
import img from './imageHome/nike-black.png'
import img2 from "./imageHome/product_red.png"
import img3 from "./imageHome/product_blue.png"
import { useNavigate } from "react-router-dom"
function Home() {

    const navigate = useNavigate()
    return (
        <div className='home-page'>
            <div className='home-header'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                >

                    <SwiperSlide>
                        <div style={{ height: '400px', width: '100%', textAlign: 'center' }}>
                            <div className='d-flex' style={{ height: '100%', width: '100%' }}>
                                <div className='bannar-text'>
                                    <div className='mt-5'>
                                        <h1 class="display-4 text-center">Cửa hàng giảm</h1>
                                        <h1 class="display-4"> giá 50%</h1>
                                        <button onClick={() => navigate("/shop")} type="button" class="btn btn-danger mt-5" style={{ height: '50px', width: '150px', fontSize: '20px' }}>Cửa hàng</button>
                                    </div>

                                </div>
                                <div className='bannar-img'>
                                    <img src={img2}></img>
                                </div>

                            </div>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: '400px', width: '100%', textAlign: 'center' }}>
                            <div className='d-flex' style={{ height: '100%', width: '100%' }}>
                                <div className='bannar-text'>
                                    <div className='mt-5'>
                                        <h1 class="display-4 text-center">Cửa hàng giảm</h1>
                                        <h1 class="display-4"> giá 50%</h1>
                                        <button onClick={() => navigate("/shop")} type="button" class="btn btn-danger mt-5" style={{ height: '50px', width: '150px', fontSize: '20px' }}>Cửa hàng</button>
                                    </div>

                                </div>
                                <div className='bannar-img'>
                                    <img src={img}></img>
                                </div>

                            </div>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ height: '400px', width: '100%', textAlign: 'center' }}>
                            <div className='d-flex' style={{ height: '100%', width: '100%' }}>
                                <div className='bannar-text'>
                                    <div className='mt-5'>
                                        <h1 class="display-4 text-center">Cửa hàng giảm</h1>
                                        <h1 class="display-4"> giá 50%</h1>
                                        <button onClick={() => navigate("/shop")} type="button" class="btn btn-danger mt-5" style={{ height: '50px', width: '150px', fontSize: '20px' }}>Cửa hàng</button>
                                    </div>

                                </div>
                                <div className='bannar-img'>
                                    <img src={img3}></img>
                                </div>

                            </div>

                        </div>

                    </SwiperSlide>


                </Swiper>

            </div>
        </div>
    )

}

export default Home