import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import PageLogin from "./screen/Login/PageLogin";
import FormInformation from "./screen/Register/FormInFor";
import FormTypeEmail from "./screen/Register/FormTypeEmail";
import OTP from "./screen/Register/OTP";
import PageRegister from "./screen/Register/PageRegister";
import PageProfile from "./screen/Profile/PageProfile"
import PageChangePass from "./screen/Profile/PageChangePass"

function App() {
  return (
<<<<<<< Updated upstream
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
=======
    <Routes>
      < Route  element ={<Layout/>}>
        <Route path="/" index element ={<PageLogin/>}/>
        <Route path="/register" element ={<PageRegister/>}>
          <Route index path="formInfor" element={<FormInformation/>}/>
          <Route path="formEmail" element ={<FormTypeEmail/>}/>
          <Route path="OTP" element = {<OTP/>}/>
        </Route>
        <Route path="/pagecart"  element = {<PageCart/>}/>
        <Route path="/pageprofile"  element = {<PageProfile/>}/>
        <Route path="/pagechangepass"  element = {<PageChangePass/>}/>
      </Route>
    </Routes>
   
>>>>>>> Stashed changes
  );
}

export default App;
