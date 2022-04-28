

const APIResgister = {
    // ham nay 2 callback laf sucess vaf failure
    // khi thanh cong thi se goi ham sucess de thuc hien 1 action nao do
    // khi that bai thi thuc hien ham failure de thuc hien 1 action nao do 
    checkEmail : (sucess , failure) =>{

        setTimeout(() =>{
            failure()
        })

    } ,

    

}