import { useState } from "react"


function PageContact() {
    
    const [emai , setEmail] = useState({value :"", error : '' })
    const [area , setArea] = useState({value :"", error : '' })

    const changEmail = (event) =>{
        setEmail({...emai , value : event.target.value})
    }
    const changArea = (event) =>{
       setArea( {...area , value : event.target.value})
    }
    const focusEmail = () =>{
        setEmail({...emai , error :''})
    }
    const focusArea = () =>{
        setArea({...area , error :''})
    }

    const submit = (event) =>{
            event.preventDefault()
            checkValidation()
            if(area.error==='is-valid' && emai.error==='is-valid'){
                alert('oke')
            }
    }

    const checkValidation = () =>{
       
        if(area.value.trim().length!==0) setArea({...area , error:'is-valid'})
        else setArea({...area , error:'is-invalid'})
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
            if(regex.test(emai.value.trim())) setEmail({...emai , error:'is-valid'})
            else setEmail({...emai , error:'is-invalid'})
    }

   
    return (

        <div  style={{ minHeight: '100vh', background: '#f6f9fc', padding: '50px' }}>
            <div style={{ width: '50%', margin: 'auto' }}>
                <form onSubmit={submit} style={{
                    padding: '50px', background: '#FFFFFF', borderRadius: '8px',
                    boxShadow:" rgb(3 0 71 / 9%) 0px 1px 3px"
                }}>
                    <h1 className="display-6 text-center">Liên hệ</h1>
                    <div>
                        <div>
                            <label className="form-label">Email</label>
                            <input onFocus={focusEmail}
                            onInput={changEmail} value ={emai.value} type="email" className={emai.error?`form-control ${emai.error}`:"form-control"} aria-describedby="validationServer03Feedback" />
                            <div className="invalid-feedback">
                                Trường này không phải là email !
                            </div>
                        </div>
                        <div className="mt-5">
                            <label  className="form-label">Nhập nội dung liên hệ</label>
                            <textarea onFocus={focusArea}
                            onInput={changArea} value={area.value} rows={8} className={area.error?`form-control ${area.error}`:"form-control"} placeholder="Nội dung"></textarea>
                            <div className="invalid-feedback">
                                Vui lòng điền nội dung cần liên hệ
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                    <button className="btn btn-primary" type="submit">Gửi liên hệ</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default PageContact