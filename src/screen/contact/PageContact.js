import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useApplication from '../../Custom/Hook/useApplication'

function PageContact() {

    const location = useLocation()
    const useApp = useApplication()
    const alter = withReactContent(Swal);
    const navigate = useNavigate()
    
    const [title , setTitle] = useState({value :"", error : '' })
    const [content , setContent] = useState({value :"", error : '' })

    const changTitle = (event) =>{
        setTitle({...title, value : event.target.value})
    }
    const changContent = (event) =>{
       setContent({...content, value : event.target.value})
    }
    const focusTitle = (event) =>{
        setTitle({...title, error :''})
    }
    const focusContent = (event) =>{
        setContent({...content, error :''})
    }

    const blurTitle = () => {
        validateTitle()
    }
    const blurContent = () => {
        validateContent()
    }

    const validateTitle = () => {
        if (title.value.trim().length === 0) setTitle({ ...title, error: 'is-invalid' })
        else setTitle({ ...title, error: 'is-valid' })
    }
    const validateContent = () => {
        if (content.value.trim().length === 0) setContent({ ...content, error: 'is-invalid' })
        else setContent({ ...content, error: 'is-valid' })
    }

    const submit = (event) =>{
            event.preventDefault()
            checkValidation()
            if(title.error==='is-valid' && content.error==='is-valid'){
            let form = new FormData()
            let id = JSON.parse(sessionStorage.getItem("user")).idUser
            form.append('idCus', id)
            form.append('title', title.value)
            form.append('content', content.value)
            fetch("http://localhost:8080/saveContact", {
                method: "POST",
                body: form
            })
                .then(res => {
                    if (!res.ok) throw new Error(res.status)
                    return res.json()
                })
                .then(data => {
                    if (data.message === 'oke') {
                        alter.fire(
                            {
                                icon: 'success',
                                title: 'Thành công',
                                text: "Gửi liên hệ thành công",
                                allowOutsideClick: false,
                                showConfirmButton: true,
                                confirmButtonText: 'OK'
                            }
                        ).then((result) => {
                            if (result.isConfirmed) {
                                navigate("/contact")
                            }
                        })
                    }
                })
                .catch(err => {
                    alter.fire(
                        {
                            icon: 'error',
                            title: 'Cập nhật không thành công'
                        }
                    )
                })

        }
    }

     


    const checkValidation = () =>{
        if (title.value.trim().length === 0) setTitle({ ...title, error: 'is-invalid' })
        else setTitle({ ...title, error: 'is-valid' })

        if (content.value.trim().length === 0) setContent({ ...content, error: 'is-invalid' })
        else setContent({ ...content, error: 'is-valid' })
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
                            <label className="form-label">Tiêu đề</label>
                            <input onFocus={focusTitle}
                            onBlur={blurTitle}
                            onInput={changTitle} value ={title.value} type="text" className={title.error?`form-control ${title.error}`:"form-control"} aria-describedby="validationServer03Feedback" />
                            <div className="invalid-feedback">
                                Vui lòng nhập tiêu đề!
                            </div>
                        </div>
                        <div className="mt-5">
                            <label  className="form-label">Nhập nội dung liên hệ</label>
                            <textarea onFocus={focusContent}
                            onBlur={blurContent}
                            onInput={changContent} value={content.value} rows={8} className={content.error?`form-control ${content.error}`:"form-control"} placeholder="Nội dung"></textarea>
                            <div className="invalid-feedback">
                                Vui lòng điền nội dung cần liên hệ!
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                    <button conClick={submit} className="btn btn-primary" type="submit">Gửi liên hệ</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default PageContact