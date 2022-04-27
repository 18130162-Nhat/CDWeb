
const FIELD_EMPTY = 'FIELD_EMPTY'
const REQUIRE_EMAIL = 'REQUIRE_EMAIL'
const REQUIRE_PHONE = 'REQUIRE_PHONE'
const TEXT_ERROR_EMPTY = "Trường này không được trống !"
const TEXT_REQUIRE_EMAIL = "Trường này phải là email !"
const TEXT_REQUIRE_PHONE = "Trường này phải là số điện thoại !"

const getListError = (listNameError) =>{
    let listError = []
    listNameError.forEach(err => {
        switch(err){
            case FIELD_EMPTY:
                let empty = (value) =>{
                    return (value.trim().length===0)? TEXT_ERROR_EMPTY : undefined
                }
                listError.push(empty)
            break ;
            case REQUIRE_EMAIL:
            let email = (value) =>{
                let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
                    return regex.test(value.trim()) ? undefined : TEXT_REQUIRE_EMAIL
            }
            listError.push(email)
            break ;

            case REQUIRE_PHONE :
               let phone = (value) =>{
                let regex  = new RegExp('/((09|03|07|08|05)+([0-9]{8})\b)/g')
                return regex.test(value.trim()) ? undefined : TEXT_REQUIRE_PHONE
               }
               listError.push(phone)

            break ;

            default : throw new Error("Name error invalid") 
        }
        
    });
    return listError

}
export {FIELD_EMPTY , REQUIRE_EMAIL , REQUIRE_PHONE , 
        TEXT_ERROR_EMPTY ,TEXT_REQUIRE_EMAIL ,TEXT_REQUIRE_PHONE,
        getListError}