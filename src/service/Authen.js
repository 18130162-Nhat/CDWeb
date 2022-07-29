

const APIAuthen = {
    signIn: (sucess ,failure ,object ) =>{
        fetch('http://localhost:8080/login' ,{
            method : 'POST',
            body : object
        })
        .then(res => {
            if(!res.ok) throw new Error(res.status)
            return res.json()
        })
        .then(data =>{
            console.log(data.data)
            if(data.message==='oke') sucess(data)
        })
        .catch(err =>{
            failure()
        })
    },
    signOut : (sucess , failure) =>{

    }
}
export default APIAuthen