import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import PageCart from "./screen/Cart/PageCart";
import PageLogin from "./screen/Login/PageLogin";
import FormInformation from "./screen/Register/FormInFor";
import FormTypeEmail from "./screen/Register/FormTypeEmail";
import OTP from "./screen/Register/OTP";
import PageRegister from "./screen/Register/PageRegister";

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      < Route  element ={<Layout/>}>
        <Route path="/" index element ={<PageLogin/>}/>
        <Route path="/register" element ={<PageRegister/>}>
          <Route index path="formInfor" element={<FormInformation/>}/>
          <Route path="formEmail" element ={<FormTypeEmail/>}/>
          <Route path="OTP" element = {<OTP/>}/>
        </Route>
        <Route path="/pagecart"  element = {<PageCart/>}/>
      </Route>
    </Routes>
   
=======
    <Layout/>
    // <Routes>
    //   < Route  element ={<Layout/>}>
    //     <Route path="/" index element ={<PageLogin/>}/>
    //     <Route path="/register" element ={<PageRegister/>}>
    //       <Route index path="formInfor" element={<FormInformation/>}/>
    //       <Route path="formEmail" element ={<FormTypeEmail/>}/>
    //       <Route path="OTP" element = {<OTP/>}/>
    //     </Route>
    //   </Route>
    // </Routes>
>>>>>>> bb7275fab2309ac5ad1b56c14e9b8f00924cfd88
  );
}

export default App;
