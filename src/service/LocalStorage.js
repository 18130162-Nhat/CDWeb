

 const localStorageApp = {
    setItemStorage : (key , value) =>{
        sessionStorage.setItem(key, value)
    } ,
    getItemStorage : (key) =>{

        return sessionStorage.getItem(key)?localStorage.getItem(key):undefined
    }
}
export default localStorageApp