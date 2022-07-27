
import { useEffect, useState } from 'react'
import './detail.css'
import Loading from '../../component/Loading'
import { useNavigate, useParams } from 'react-router-dom'
import useApplication from '../../Custom/Hook/useApplication'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Detail() {
    const  navigate = useNavigate()
    const popup = withReactContent(Swal)
    const useApp = useApplication()
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [branch, setBranch] = useState({idBranch: 1, nameBranch: ''})
    const [listImage, setListImage] = useState([])
    const [image, setImage] = useState({ image: '', index: 1 })
    const [active, setActive] = useState("DETAIL")


    const addItem = () =>{
        setData({...data,quantity:data.quantity+1})
    }
    const subItem = () =>{
        if(data.quantity>1) setData({...data,quantity:data.quantity-1})
    }
    const addCart = () =>{

        useApp.addItemDetail(data)
        popup.fire(
            {
                icon: 'success',
                title: 'Thêm vào giỏ hàng thành công',
                text: "Đi đến giỏ hàng để kiểm tra",
                allowOutsideClick : false,
                showConfirmButton: true,
                confirmButtonText: 'Kiểm tra giỏ hàng'
              }
        ).then((result) => {
            if (result.isConfirmed) {
              navigate("/pagecart")
            }
          })
    }

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8080/findProductById?id=${id}`)
            .then(res => {
                if (!res.ok) throw new Error(res.status)
                return res.json()
            })
            .then(data => {
                setLoading(false)
                let object = {...data.data[0] ,quantity:1}
                setData(object)
                setBranch(data.data[1])
                setListImage(data.data[2])
                setImage({ ...image, image: data.data[2][0].linkImage })
                console.log(data.data)
            })
            .catch(err => {
                setLoading(false)
            })
        // setTimeout(() => {
        //     setLoading(false)
        // }, 5000)
    }, [id])
    const click = (image) => {
        setImage(image)
    }
    const clickActive = (text) =>{
            setActive(text)
    }



    return (
        <div className='detail-product'>
            {loading ? <Loading />
                : <>
                    <div className='d-flex content-product'>
                        <div>
                            <div className='img-product'>
                                <img src={image.image.length === 0 ? "" : image.image} />
                            </div>
                            <div className='d-flex mt-4 justify-content-center'>


                                <div onClick={() => click({ image: listImage.length === 0 ? '' : listImage[0].linkImage, index: 1 })} className={`imgs-product me-2 ${image.index === 1 ? 'active' : ''}`}>
                                    <img src={listImage.length === 0 ? '' : listImage[0].linkImage} />
                                </div>

                                <div onClick={() => click({ image: listImage.length === 0 ? '' : listImage[1].linkImage, index: 2 })} className={`imgs-product me-2 ${image.index === 2 ? 'active' : ''}`}>
                                    <img src={listImage.length === 0 ? '' : listImage[1].linkImage} />
                                </div>
                                <div onClick={() => click({ image: listImage.length === 0 ? '' : listImage[2].linkImage, index: 3 })} className={`imgs-product me-2 ${image.index === 3 ? 'active' : ''}`}>
                                    <img src={listImage.length === 0 ? '' : listImage[2].linkImage} />
                                </div>
                            </div>
                        </div>
                        <div className='ms-5' style={{ lineHeight: '3.5' }}>
                            <h2>Giày Sneaker limit</h2>
                            <div className='d-flex'>
                                <div className='me-3'> Brand :</div>
                                <strong>{branch.nameBranch}</strong>
                            </div>
                            <h3 style={{ color: '#D23F57' }}> {(data.price+"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} vnd</h3>
                            <div>Còn hàng</div>
                            <div className='d-flex align-items-center'>
                                <div onClick={addItem} className='incre me-4' style={{ fontSize: '25px' }}>+</div>
                                <div className='me-4 ' style={{ fontSize: '25px' }}>{data.quantity}</div>
                                <div onClick={subItem} className='descre' style={{ fontSize: '35px' }}>-</div>
                            </div>
                            <div className='mt-5'>
                                <button onClick={addCart} type="button" class="btn btn-danger pe-5 ps-5 pt-3 pb-3 ms-0">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul style={{ width: '80%', margin: 'auto' }} class="nav nav-tabs mt-5">
                            <li class="nav-item" style={{ cursor: 'pointer' }}>
                                <div onClick={() =>clickActive('DETAIL')} className={active==='DETAIL'?'nav-link active':'nav-link'}>Thông tin chi tiết</div>
                            </li>
                            <li class="nav-item" style={{ cursor: 'pointer' }}>
                                <div onClick={() => clickActive('DESCRIPTION')} className={active==='DESCRIPTION'?'nav-link active':'nav-link'}>Mô tả</div>
                            </li>
                        </ul>
                        <div className='display-detail'>
                            {
                                active==='DETAIL'?
                                <>
                                {Object.keys(data).length===0?'':
                                <ul className='pt-3 ms-5' style={{lineHeight:'2'}}>
                                <li>Tên sản phẩm :{data.name}</li>
                                <li>Giá : {(data.price+" ").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} vnd</li>
                                <li>Màu sắc : {data.color}</li>
                                <li>Thể loại : {data.typeShoe}</li>
                                <li>Kích cỡ : {data.size}</li>
                                <li>Thương hiệu : {branch.nameBranch.length===0?'':branch.nameBranch}</li>

                            </ul>
                                }
                                </>
                            :<>
                            <div className='description pt-3 ms-5'>
                                   {data.description}
                            </div>
                            </>
                            }
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default Detail
