import { useState } from "react"
import { getListError } from "../Constant/ErrorForm"
import './style/input.css'

function Input({ children, config , refFunc }) {
    const { name, label, listError,  index,  url } = config
    const [input, setInput] = useState({
        value: "", messageError: " ",
        listError: getListError(listError), isErr: false
    })
    const changInput = (event) => {
        setInput({ ...input, value: event.target.value })

    }
    const blurInput = () => {
        if (check() & url) {
            //API
        }
    }
    const check = () => {
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
        setInput({ ...input, isErr: false , messageError : " " })

    }
    // const setRef = () => {
    //     if (refFunc.current.length < total) {
    //         console.log(name)
    //         refFunc.current.push(check)
    //     }
    //     else {
    //         refFunc.current[index] = check;
    //     }
    // }
    // setRef()
    refFunc.current[index] = check
    return (

        <div className={input.isErr ? 'field-form text-err' : 'field-form'}>
            <input
                onFocus={focusInput}
                onBlur={blurInput}
                onChange={changInput}
                className={!input.isErr ? 'input-form' : 'input-form border-err'} placeholder=" " type="text" name={name} id={name} value={input.value} />
            <label className={input.isErr ? 'label-form label-err' : 'label-form'} for={name}>{label}</label>
            {/* <i className="fa-solid fa-envelope-open"></i> */}
            {children}
            <span className="message-error">{input.messageError}</span>
        </div>

    )
}
export default Input
