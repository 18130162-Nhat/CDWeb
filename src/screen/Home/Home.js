
import './home.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination } from "swiper";
import img from './imageHome/nike-black.png'
import img2 from "./imageHome/product_red.png"
import img3 from "./imageHome/product_blue.png"
import img4 from "./imageHome/running.jpg"
import img5 from "./imageHome/coming1.jpg"
import img6 from "./imageHome/coming2.jpg"
import img7 from "./imageHome/coming5.jpg"
import img8 from "./imageHome/coming8.jpg"
import img9 from "./imageHome/coming6.jpg"
import img10 from "./imageHome/coming4.jpg"
import img11 from "./imageHome/coming3.jpg"
import img12 from "./imageHome/coming7.jpg"
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
            <div className="home-contain" style={{}}>
                <div className="home-intro">
                    <div className="img-intro">
                        <img className="img-in" src={img4}></img>
                    </div>
                    <div className="intro-text">
                        <h1>
                            Introduce
                        </h1>
                        <p style={{ width: '90%' }}>
                            Thể thao giúp chúng ta khỏe mạnh.
                            Mang chúng ta đến với nhau.
                            Thông qua thể thao, chúng ta có sức mạnh để thay đổi cuộc sống.
                            Cho dù đó là thông qua những câu chuyện của các vận động viên đầy cảm hứng.
                            Giúp bạn đứng dậy và di chuyển.
                            Đồ thể thao có công nghệ mới nhất để nâng cao hiệu suất của bạn.
                            Bức phá giới hạn của bạn.
                            Chúng tôi cung cấp một ngôi nhà cho người chạy bộ, cầu thủ bóng rổ, trẻ em bóng đá, những người đam mê thể dục.
                            Người đi bộ đường dài cuối tuần thích trốn khỏi thành phố.
                            Giáo viên yoga truyền bá các động tác.
                            Giày thể thao chất lượng của chúng tôi giúp bạn tập trung trước khi tiếng còi vang lên.
                            Trong cuộc đua. Và ở vạch đích.
                            Chúng tôi hợp tác với những người giỏi nhất trong ngành để cùng sáng tạo.
                            Bằng cách này, chúng tôi cung cấp cho người hâm mộ các thể loại và kiểu dáng thể thao phù hợp với nhu cầu thể thao của họ, đồng thời lưu ý đến tính bền vững.
                            Chúng tôi ở đây để hỗ trợ người sáng tạo.
                            Cải thiện sản phẩm của họ.Tạo các thay đổi.
                            Và chúng tôi nghĩ về tác động của chúng tôi đối với thế giới.
                        </p>
                    </div>
                </div>
                <div className="home-coming">
                    <div className="title-coming">
                        <h1 className="title-new">Sản phẩm sắp ra mắt...</h1>
                    </div>
                    <div className="img-coming">

                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

                            <div class="carousel-inner">
                                <div class="carousel-item active" >
                                    <div style={{ height: '300px' }} className="d-flex justify-content-evenly align-items-center ">
                                        <div className="div-img"> <img class="d-block w-100" src={img5}></img>
                                        </div>
                                        <div className="div-img"> <img class="d-block w-100" src={img6}></img>
                                        </div>
                                        <div className="div-img"> <img class="d-block w-100" src={img7}></img>
                                        </div>
                                        <div className="div-img"> <img class="d-block w-100" src={img8}></img>
                                        </div>


                                    </div>

                                </div>
                                <div class="carousel-item" >
                                    <div style={{ height: '300px' }} className="d-flex justify-content-evenly align-items-center ">
                                        <div className="div-img"> <img class="d-block w-100" src={img9}></img>
                                        </div>
                                        <div className="div-img"> <img class="d-block w-100" src={img10}></img>
                                        </div>
                                        <div className="div-img"> <img class="d-block w-100" src={img11}></img>
                                        </div>
                                        <div className="div-img"> <img class="d-block w-100" src={img12}></img>
                                        </div>


                                    </div>

                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home