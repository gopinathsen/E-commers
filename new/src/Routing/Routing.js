import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Details from '../Topic/Details/Details'
import Different_topic from '../Topic/Different_topic/Different_topic'
import Sub_topic from '../Topic/Sub_topic/Sub_topic'
export default function Routing() {
  return (
    
    <Router>
        <Routes>
            <Route path="Details" element={<Details/>}/>
            <Route path="Different_topic" element={<Different_topic/>}/>
            <Route path="Sub_topic" element={<Sub_topic/>}/>
        </Routes>
    </Router>
  )
}
