import { useState } from "react"
import { getListError } from "../Constant/ErrorForm"
import './style/input.css'
import { TEXT_REPEAT_PASS } from '../Constant/ErrorForm'

function Input({ children, config, refFunc, funcParent }) {
    const { name, label, listError, index, repeat, type,url } = config
    const [eye, setEye] = useState(true)
    const [input, setInput] = useState({
        value: "", messageError: " ",
        listError: getListError(listError), isErr: false
    })
    const changInput = (event) => {
        if (repeat) {
            repeat.value === event.target.value ? 
            setInput({ ...input, value : event.target.value,messageError: " " }) :
             setInput({ ...input, value:event.target.value , messageError: TEXT_REPEAT_PASS })
        }
        else setInput({ ...input, value: event.target.value })
        function setValueForParent() {
            funcParent(() => {
              
                return event.target.value
            })
        }
        funcParent && setValueForParent()
    }
    const blurInput = () => {
        if (check() & url) {
            //API
        }
    }
    const check = () => {
        if(type &&repeat && input.value.length!==0) {
            repeat.value === input.value ? 
            setInput({ ...input,messageError: " " }) :
             setInput({ ...input, messageError: TEXT_REPEAT_PASS })
             return repeat.value === input.value
        }
        if (listError.length === 0) return true
        let check = false
        input.listError.forEach(func => {
            if (func(input.value) === undefined) {
                check = true
                setInput({ ...input, messageError: " " })
            }
            else {
                check = false
                setInput({ ...input, messageError: func(input.value), isErr: true })
                return
            }
        });
        return check
    }
    const focusInput = () => {
        setInput({ ...input, isErr: false, messageError: " " })
    }
    refFunc.current[index] = check
    if(type){
        return(
            <div className={input.isErr ? 'field-form text-err' : 'field-form'}>
            <input
                onFocus={focusInput}
                onBlur={blurInput}
                onChange={changInput}
                className={!input.isErr ? 'input-form' : 'input-form border-err'} placeholder=" " type={eye?"password" : "text"} name={name} id={name} value={input.value} />
            <label className={input.isErr ? 'label-form label-err' : 'label-form'} htmlFor={name}>{label}</label>
            {children}
            <span className="message-error">{input.messageError}</span>
         
         
               {
                   eye?  <div onClick={() => setEye(!eye)}  className="eye"><i className="fa-solid fa-eye-slash"></i></div> : 
                   <div onClick={() => setEye(!eye)} className="eye"><i className="fa-solid fa-eye"></i></div>
               }
               
        </div>
            
        )
    }
    return (
        <div className={input.isErr ? 'field-form text-err' : 'field-form'}>
            <input
                onFocus={focusInput}
                onBlur={blurInput}
                onChange={changInput}
                className={!input.isErr ? 'input-form' : 'input-form border-err'} placeholder=" " type="text" name={name} id={name} value={input.value} />
            <label className={input.isErr ? 'label-form label-err' : 'label-form'} htmlFor={name}>{label}</label>
            {children}
                <span className="message-error">{input.messageError}</span>
        </div>
    )
}
export default Input
