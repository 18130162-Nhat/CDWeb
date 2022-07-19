import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header";
import ApplicationProvider from "../context/ApplicationProvider";


function Layout(){
    return (
      
            <div >
           <ApplicationProvider>
           <Header/>
            <Outlet/>
           <Footer/>
           </ApplicationProvider>
        </div>
       
    )
}
export default Layout