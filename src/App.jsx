import { BrowserRouter,Routes,Route } from "react-router"
import ShowOut from "./Components/ShowOut"
import Home from "./Pages/Home"
import Information from "./Pages/Information"
import AboutMe from "./Pages/AboutMe"
import Blog from "./Pages/Blog"



function App() { 
  return (
   <>
   
   <BrowserRouter>
   <Routes>
    
    
    
    <Route path="/" element={<ShowOut/>} >
    <Route index element={<Home/>} />
    
    <Route path="Infor" element={<Information/>} />
    <Route path="AboutMe" element={<AboutMe />} />
    <Route path="Blog" element={<Blog />} />
     
     
    </Route>
    

    
   </Routes>


   </BrowserRouter>
   </>
      
      
  )
}

export default App



