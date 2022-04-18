import React,{Suspense} from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'

import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Home from '../Components/Home/Home'
import PNG from '../Components/PageNotFound/PNG'
// import PCat from '../Components/Product/PCatagory/PCat'
import Header from '../Layout/Header'
// import PSCat from '../Components/Product/PSubCatagory/PSCat'
// import PDet from '../Components/Product/PDetails/PDet'
import Registration from '../Authentication/Registration/Registration'
import Login from '../Authentication/Login/Login'
// import Feedback from '../Components/Feedback/Feedback'
const Feedback=React.lazy(()=>import('../Components/Feedback/Feedback'))


export default function RootRoute() {
  return (
   <Router>
     <Header/>
     <Suspense fallback={<h2>loading...</h2>}>
      <Routes>
        <Route path="" element={<Home/>}/>
        {/* default path setup */}
        <Route path="AboutPage/:value" element={<About/>}/>
        <Route path="ContactPage" element={<Contact/>}/>
        <Route path="Feedback" element={<Feedback/>}/>
        
        {/* <Route path="PCatpage" element={<PCat/>}/> */}
        {/* <Route path='subcat/:prodname' element={<PSCat/>}/> */}
        {/* <Route path="PDet/:p_name/:s_name" element={<PDet/>}/> */}
        
        <Route path="Feedback" element={<Feedback/>}/>
        {/* <Route path="Registration" element={<Registration/>}/>
        <Route path="Login" element={<Login/>}/> */}
         {/* PNG= page not found will always be at the end  */}
         <Route path="*" element={<PNG/>}/>


      </Routes>
      </Suspense>
</Router>
        
    
  )
}
