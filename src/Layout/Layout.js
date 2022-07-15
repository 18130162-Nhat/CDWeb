import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header";


function Layout(){
    return (
        <div>
           <Header/>
          {/* <Outlet/> */}
<PageCart/>
           <Footer/>
        </div>
    )
}
export default Layout