
import './shopStyle.css'

function Filter({func,sort,displayItem}) {


    return (
        <div className="d-flex justify-content-start align-items-center bg-white shop-filter">
            <div  className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Thương hiệu :</label>
                <select onChange={(event) =>func(event,0)} className="form-select" id="validationCustom04">
                    <option selected value="">-- Tất cả --</option>
                    <option value={"1"}>Performance</option>
                    <option value={"2"}>Originals</option>
                    <option value={"3"}>Sportswear</option>
                    <option value={"4"}>Sport Inspired</option>
                    <option value={"5"}>TERREX</option>
                </select>
                
            </div>
            <div className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Màu sắc :</label>
                <select onChange={(event) => func(event,1)} className="form-select">
                    <option selected value="">-- Tất cả --</option>
                    <option value={"RED"}>Màu đỏ</option>
                    <option value={"PINK"}>Màu hồng</option>
                    <option value={"ORANGE"}>Màu cam</option>
                    <option value={"BLUE"}>Màu xanh dương</option>
                    <option value={"PURPLE"}>Màu tím</option>
                    <option value={"GRAY"}>Màu xám</option>
                    <option value={"BLACK"}>Màu đen</option>
                    <option value={"WHITE"}>Màu trắng</option>
                    <option value={"GREEN"}>Màu xanh lá</option>
                </select>
               
            </div>
            <div className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Kích cỡ :</label>
                <select onChange={(event) => func(event,2)} className="form-select">
                    <option selected value="">-- Tất cả --</option>
                    <option value={"35"}>35</option>
                    <option value={"36"}>36</option>
                    <option value={"37"}>37</option>
                    <option value={"38"}>38</option>
                    <option value={"39"}>39</option>
                    <option value={"40"}>40</option>
                    <option value={"41"}>41</option>
                    <option value={"42"}>42</option>
                    <option value={"43"}>43</option>
                    <option value={"44"}>44</option>
                    <option value={"45"}>45</option>
                   
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
                <select onChange={(event) => sort(event)}  className="form-select">
                    <option selected value="DES">-- Mặc định --</option>
                    <option value={"DES"}>Giảm dần</option>
                    <option value={"ASE"}>Tăng dần</option>
                    
                </select>
                
            </div>
            <div className='me-4' style={{width:'150px'}}>
                <label  className="form-label">Hiển thị :</label>
                <select onChange={(event) => displayItem(event)}  className="form-select">
                    <option selected value="12">-- Mặc định --</option>
                    <option value={"4"}>4</option>
                    <option value={"8"}>8</option>
                    <option value={"12"}>12</option>
                    <option value={"16"}>16</option>
                    
                </select>
                
            </div>
            
        </div>
    )
}
export default Filter