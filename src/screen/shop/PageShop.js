
import Pagination from "./Pagination"
import Filter from "./Filter"
import Shop from "./Shop"
import { useEffect, useState } from "react"


function PageShop({list}){

    const initObject = {
        itemProduct : 2,
        page : 1,
        sort : "DES",
        list : [{key:'branch',operation:'EQUALID',value:''},{key:'color',operation:'EQUAL',value:''},{key:'size',operation:'EQUAL',value:''}
        ,{key:'typeShoe',operation:'EQUAL',value:''},{key:'name',operation:'CONTAIN',value:''}]
    }
    const[listItem,setListItem] = useState([])
    const[shopProduct, setShopProduct] = useState(initObject)

    useEffect(() =>{
        fetch("http://localhost:8080/findProductByfilter" ,{
            method:"POST",
            body: JSON.stringify(shopProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res =>{
            if(!res.ok) throw new Error(res.status)
            return res.json()
        })
        
        .then(data =>{
                console.log(data.data)
        })
        .catch(err =>{

        })

    },[shopProduct])

    const changeFilter = (event,index) =>{
        let object = {...shopProduct.list[index] , value:event.target.value}
        let arrayCoppy = [...shopProduct.list]
        arrayCoppy[index] = object
        setShopProduct({...shopProduct,list:arrayCoppy})
    }


return (

    <div style={ {background :'#f6f9fc' , minHeight :'100vh'}} className="pt-5 pb-5">
       <Filter func = {changeFilter}></Filter>
       <Shop list ={listItem}></Shop>
       <Pagination></Pagination>
    </div>
)
    
}

export default PageShop 