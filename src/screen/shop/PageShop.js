
import Pagination from "./Pagination"
import Filter from "./Filter"
import Shop from "./Shop"


function PageShop(){

return (

    <div style={ {background :'#f6f9fc' , minHeight :'100vh'}} className="pt-5 pb-5">
       <Filter></Filter>
       <Shop></Shop>
       <Pagination></Pagination>
    </div>
)
    
}

export default PageShop 