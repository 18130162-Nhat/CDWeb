
import Pagination from "./Pagination"
import Filter from "./Filter"
import Shop from "./Shop"
import { useEffect, useState } from "react"
import { useSearchParams} from "react-router-dom"
import Loading from '../../component/Loading'


function PageShop({ list }) {
    const [searchParams] = useSearchParams()
    const [loading,setLoading] = useState(false)
    let search = searchParams.get("search")
    const initObject = {
        itemProduct: 8,
        page: 1,
        sort: "DES",
        list: [{ key: 'branch', operation: 'EQUALID', value: '' }, { key: 'color', operation: 'EQUAL', value: '' }, { key: 'size', operation: 'EQUAL', value: '' }
            , { key: 'typeShoe', operation: 'EQUAL', value: '' }, { key: 'name', operation: 'CONTAIN', value:''}]
    }
    const pagination = {
        offset: 1,
        pageActive: 1,
        sizePage: 5,
        totalPage: 0
    }
    const [objectPagination, setPagination] = useState(pagination)
    const [listItem, setListItem] = useState([])
    const [shopProduct, setShopProduct] = useState(initObject)

    const clickPage  = (pageactive) =>{
            setShopProduct({...shopProduct,page:pageactive})
    }

    const computeOffset = (itemPerPage, itemFiltered, pageActive) => {
        let totalPage = 0
        let mod = itemFiltered % itemPerPage
        if (mod === 0) totalPage = itemFiltered / itemPerPage
        else totalPage = Math.floor(itemFiltered / itemPerPage) + 1
        if (totalPage > objectPagination.sizePage) {
            if ((pageActive) === (objectPagination.sizePage + objectPagination.offset - 1)) {
                if (pageActive + objectPagination.sizePage > totalPage) {
                    return setPagination(
                        {
                            ...objectPagination, pageActive: pageActive, totalPage: totalPage,
                            offset: totalPage - (objectPagination.sizePage - 1)
                        }
                    )
                } else return setPagination({
                    ...objectPagination, pageActive: pageActive, totalPage: totalPage, offset: pageActive
                })
            }
            if(pageActive===objectPagination.offset){
                if(pageActive-objectPagination.sizePage<0) return setPagination({...objectPagination,offset:1,pageActive:pageActive,totalPage:totalPage})
                else return setPagination({...objectPagination,offset:pageActive-objectPagination.sizePage-1,pageActive:pageActive,totalPage:totalPage})
            }
           
            return setPagination({...objectPagination,pageActive:pageActive,totalPage:totalPage})

        }
        else setPagination({...objectPagination,pageActive:pageActive,totalPage:totalPage})


    }
    useEffect(() =>{
        if(search){
          let array = [...shopProduct.list]
          array[4] = { key: 'name', operation: 'CONTAIN', value:search}
          let object = {...shopProduct,list:array}
          setShopProduct(object)
         }
      
    },[search])

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:8080/findProductByfilter", {
            method: "POST",
            body: JSON.stringify(shopProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) throw new Error(res.status)
                return res.json()
            })

            .then(data => {
                setLoading(false)
               setListItem(data.data.list)
               computeOffset(data.data.itemPerPage,data.data.itemFiltered,data.data.pageActive)
               
            })
            .catch(err => {
                setLoading(false)
            })

    }, [shopProduct])

    const changeFilter = (event, index) => {
        let object = { ...shopProduct.list[index], value: event.target.value }
        let arrayCoppy = [...shopProduct.list]
        arrayCoppy[index] = object
        setShopProduct({ ...shopProduct, list: arrayCoppy, page: 1 })
    }
    const sort = (event) =>{
        setShopProduct({...shopProduct,sort:event.target.value})
    }

    const displayItem = (event) =>{
            setShopProduct({...shopProduct,itemProduct:event.target.value,page:1})
    }
    return (

        <div style={{ background: '#f6f9fc', minHeight: '100vh' }} className="pt-5 pb-5">
        <div className="mb-5" style={{width:'80%' ,margin:'auto'}}>
          {
            search &&  <h1 class="display-6">Kết quả tìm kiếm cho : "{search}"</h1>
          }
           </div>
            <Filter displayItem = {displayItem} sort = {sort} func={changeFilter}></Filter>
           
           {loading?<Loading />:
            <Shop list={listItem}></Shop>}
         
            
            <Pagination click = {clickPage} pagination={objectPagination}></Pagination>
           
        </div>
    )

}

export default PageShop 