import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import PageCart from "./screen/Cart/PageCart";
import PageContact from "./screen/contact/PageContact";
import Detail from "./screen/detail/detail";
import PageLogin from "./screen/Login/PageLogin";
import Order from "./screen/order/order";
import FormInformation from "./screen/Register/FormInFor";
import FormTypeEmail from "./screen/Register/FormTypeEmail";
import OTP from "./screen/ForgetPass/OTP";
import PageRegister from "./screen/Register/PageRegister";
import PageShop from "./screen/shop/PageShop"
import PageProfile from "./screen/Profile/PageProfile"
import PageChangePass from "./screen/Profile/PageChangePass"
import PageForgetPass from "./screen/ForgetPass/PageForget";
import FormTypeEmailOfPass from "./screen/ForgetPass/FormTypePass";

function App() {
  return (
    <Routes>
      < Route  element ={<Layout/>}>
        <Route path="/" index element ={<PageLogin/>}/>
        <Route path="/register" element ={<PageRegister/>}>
          <Route index path="formInfor" element={<FormInformation/>}/>
          <Route path="formEmail" element ={<FormTypeEmail/>}/>
        </Route>
        <Route path="/forgetpass" element={<PageForgetPass/>}>
       <Route index path="typePass" element = {<FormTypeEmailOfPass/>}/>
       <Route  path="otp" element = {<OTP/>}/>
        </Route>
        <Route path="/pagecart"  element = {<PageCart/>}/>
        <Route path="/shop" element = {<PageShop/>}/>
        <Route path="/contact" element ={<PageContact/>}/>
        <Route path="/order" element ={<Order/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/pageprofile"  element = {<PageProfile/>}/>
        <Route path="/pagechangepass"  element = {<PageChangePass/>}/>
      </Route>
    </Routes>
  );
}

export default App;
