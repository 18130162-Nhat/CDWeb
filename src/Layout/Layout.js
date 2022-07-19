import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header";



function Layout(){
    return (
        <div >
           <Header/>
            <Outlet/>
           <Footer/>
        </div>
    )
}
export default Layout