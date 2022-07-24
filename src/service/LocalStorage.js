

 const localStorageApp = {
    setItemStorage : (key , value) =>{
        localStorage.setItem(key, value)
    } ,
    getItemStorage : (key) =>{

        return localStorage.getItem(key)?localStorage.getItem(key):undefined
    }
}
export default localStorageApp