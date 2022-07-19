
import { useEffect, useState } from 'react'
import './detail.css'
import image from "../../Image/product2.jpg"
import image1 from "../../Image/product2.png"

import Loading from '../../component/Loading'
function Detail() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [image2, setImage] = useState({ image: image, index: 1 })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    })
    const click = (image) => {
        setImage(image)
    }



    return (
        <div className='detail-product'>
            {loading ? <Loading />
                : <>
                    <div className='d-flex content-product'>
                        <div>
                            <div className='img-product'>
                                <img src={image2.image} />
                            </div>
                            <div className='d-flex mt-4 justify-content-center'>

                                <div onClick={() => click({ image: image, index: 1 })} className={`imgs-product me-2 ${image2.index === 1 ? 'active' : ''}`}>
                                    <img src={image} />
                                </div>

                                <div onClick={() => click({ image: image1, index: 2 })} className={`imgs-product me-2 ${image2.index === 2 ? 'active' : ''}`}>
                                    <img src={image1} />
                                </div>
                                <div onClick={() => click({ image: image, index: 3 })} className={`imgs-product me-2 ${image2.index === 3 ? 'active' : ''}`}>
                                    <img src={image} />
                                </div>
                            </div>
                        </div>
                        <div className='ms-5' style={{ lineHeight: '3.5' }}>
                            <h2>Giày Sneaker limit</h2>
                            <div className='d-flex'>
                                <div className='me-3'> Brand :</div>
                                <strong>Adidas</strong>
                            </div>
                            <h3 style={{ color: '#D23F57' }}> 120.000 vnd </h3>
                            <div>Còn hàng</div>
                            <div className='d-flex align-items-center'>
                                <div className='incre me-4' style={{ fontSize: '25px' }}>+</div>
                                <div className='me-4 ' style={{ fontSize: '25px' }}>1</div>
                                <div className='descre' style={{ fontSize: '35px' }}>-</div>
                            </div>
                            <div className='mt-5'>
                                <button type="button" class="btn btn-danger pe-5 ps-5 pt-3 pb-3 ms-0">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul style={{width:'80%', margin:'auto'}} class="nav nav-tabs mt-5">
                            <li class="nav-item" style={{cursor :'pointer'}}>
                              <div class="nav-link active">Mô tả</div>
                            </li>
                            <li class="nav-item" style={{cursor :'pointer'}}>
                            <div class="nav-link">Thông tin chi tiết</div>
                            </li>
                        </ul>
                    </div>
                </>}
        </div>
    )
}

export default Detail
