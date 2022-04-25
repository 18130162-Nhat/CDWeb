import Footer from "../component/footer";
import Header from "../component/header";
import PageLogin from "../screen/Login/PageLogin";


function Layout(){
    return (
        <div style={{height : '100vh'}} className="container">
           <Header/>
           <PageLogin/>
           <Footer/>
        </div>
    )
}
export default Layout