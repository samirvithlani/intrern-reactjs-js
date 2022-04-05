import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {Navbar} from './components1/Navbar'
import { SubHome } from './components/SubHome';
import {Routes,Route} from 'react-router-dom'
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { ContactUsDetail } from './pages/ContactUsDetail';
import { Electronics } from './pages/Electronics';
import { Fashion } from './pages/Fashion';
import { Groc } from './pages/Groc';
import { SimpleForm } from './components/SimpleForm';
import { EmployeeRegistration } from './components/EmployeeRegistration';
import { ApiDemo } from './api/ApiDemo';
import { ApiDemo2 } from './api/ApiDemo2';
import { ApiDemo3 } from './api/ApiDemo3';
import { FormDemo2 } from './components/FormDemo2';
import { FileUpload } from './components/FileUpload';
import { SelectDemo } from './components/SelectDemo';
import { Login } from './doubt/Login';
import { Profile } from './components/Profile';
import { DeleteData } from './api/DeleteData';
import { UpdateData } from './api/UpdateData';
import { Props1 } from './components/Props1';
import { SimpleFormValidation } from './components/SimpleFormValidation';
import { Header } from './components1/Header';
import { Footer } from './components1/Footer';
import { AddUser } from './components1/AddUser';
import { ViewUsers } from './components1/ViewUsers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from './doubt/Dashboard';
import { DepedentDropdown } from './doubt/DepedentDropdown';
import { Rohithform } from './doubt/Rohithform';
import { FileUploader } from './uploder/FileUploader';



function App() {

  var title = "whatever1"
  var name = "jay1"


  const demo = ()=>{

    console.log("demo called.....")
  }


  return (
    <div className = "App">
      
      {/* <EmployeeRegistration/> */}
      {/* <ApiDemo/> */}
      {/* <ApiDemo2/> */}
      {/* <ApiDemo3/> */}
      {/* <FormDemo2/> */}
      {/* <FileUpload/> */}
      {/* <SelectDemo/> */}
       
       {/* <Props1 title = {title} name ={name} demo = {demo}/> */}
       {/* <SimpleFormValidation/> */}
      {/* <Header/>
      <Navbar/> */}
      
      <FileUploader/>

      <Routes>
        <Route path ="/home" element = {<Home/>}></Route>
        <Route path ="/aboutus" element = {<AboutUs/>}></Route>
        <Route path ="/contactus" element = {<ContactUs/>}></Route>
        <Route path ="/contactus/:id" element = {<ContactUsDetail/>}></Route>
        <Route path ="/eletronics" element = {<Electronics/>}></Route>
        <Route path ="/fashion" element = {<Fashion/>}></Route>
        <Route path ="/g" element = {<Groc/>}></Route>
        <Route path ="/simpleform" element = {<SimpleForm/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/profile" element = {<Profile/>}></Route>
        <Route path = "/table" element = {<ApiDemo3/>}></Route>       
        <Route path = "table/update/:id" element = {<UpdateData/>}></Route>
        <Route path = "/adduser" element = {<AddUser/>}></Route>
        <Route path = "/viewusers" element = {<ViewUsers/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard/>}></Route>
        
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
