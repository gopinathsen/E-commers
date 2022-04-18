
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Contact from '../Components/Contact/Contact'
import Header from '../Layout/Header'
import PNF from '../Components/PageNotFound/PNF'
import Feedback from '../Components/Feedback/Feedback'
import Login from '../Authentication/Login/Login'
import SignUp from '../Authentication/SignUp/SignUp'
import PCat from '../Components/Product/PCatagory/PCat'
import PSCat from '../Components/Product/PSubCatagory/PSCat'
import PDet from '../Components/Product/PDetails/PDet'





export default function RootRoute() {
  return (
   <Router>
   
     <Header/>
     <Routes>
       <Route path="*" element={<Home/>}/>
       <Route path="ContactPage" element={<Contact/>}/>
       
       <Route path="Feedback" element={<Feedback/>}/>
    
       <Route path="LoginPage" element={<Login/>}/>
       <Route path="SignUpPage" element={<SignUp/>}/>
       <Route path="Product" element={<PCat/>}/>
       <Route path="subcat/:prodname" element={<PSCat/>}/>
       <Route path="Details/:prodname/:subname" element={<PDet/>}/> 

       <Route path="*" element={<PNF/>}/>
     </Routes>
    
   </Router>

  )
}
