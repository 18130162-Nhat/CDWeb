
import './shopStyle.css'

function Filter() {

    return (
        <div className="d-flex justify-content-start align-items-center bg-white shop-filter">
            <div  className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Ngôn ngữ :</label>
                <select className="form-select" id="validationCustom04">
                    <option selected value="">Tất cả</option>
                    <option>Java</option>
                    <option>Php</option>
                    <option>JavaScript</option>
                    <option>Kotlin</option>
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div className='me-4' style={{width:'200px'}}>
                <label  className="form-label">Ngôn ngữ :</label>
                <select className="form-select">
                    <option selected value="">Tất cả</option>
                    <option>Java</option>
                    <option>Php</option>
                    <option>JavaScript</option>
                    <option>Kotlin</option>
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
        </div>
    )
}
export default Filter