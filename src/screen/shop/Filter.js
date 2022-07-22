
import './shopStyle.css'

function Filter({func}) {


    return (
        <div className="d-flex justify-content-start align-items-center bg-white shop-filter">
            <div  className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Thương hiệu :</label>
                <select onChange={(event) =>func(event,0)} className="form-select" id="validationCustom04">
                    <option selected value="">-- Tất cả --</option>
                    <option value={"1"}>Adias</option>
                    <option value={"2"}>Sneaker</option>
                    <option value={"3"}>Gucci</option>
                </select>
                
            </div>
            <div className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Màu sắc :</label>
                <select onChange={(event) => func(event,1)} className="form-select">
                    <option selected value="">-- Tất cả --</option>
                    <option value={"RED"}>Màu đỏ</option>
                    <option value={"PINK"}>Màu hồng</option>
                    <option value={"ORANGE"}>Màu cam</option>
                    <option value={"BLUE"}>Màu xanh da trời</option>
                </select>
               
            </div>
            <div className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Kích cỡ :</label>
                <select onChange={(event) => func(event,2)} className="form-select">
                    <option selected value="">-- Tất cả --</option>
                    <option value={"XXL"}>XXL</option>
                    <option value={"ML"}>ML</option>
                    <option value={"AA"}>AA</option>
                   
                </select>
               
            </div>
            <div className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Loại giày :</label>
                <select onChange={(event) => func(event,3)} className="form-select">
                    <option selected value="">-- Tất cả --</option>
                    <option value={"SPORT"}>Thể thao</option>
                    <option value={"CHILD"}>Trẻ em</option>
                    <option value={"ADULT"}>Người lớn</option>
                    
                </select>
                
            </div>
            <div className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Giá sản phẩm :</label>
                <select  className="form-select">
                    <option selected value="ASE">-- Mặc định --</option>
                    <option value={"DES"}>Giảm dần</option>
                    <option value={"ASE"}>Tăng dần</option>
                    
                </select>
                
            </div>
            
        </div>
    )
}
export default Filter