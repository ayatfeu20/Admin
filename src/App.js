import './App.css';
import Kunskaper from './component/Kunskaper';
import AboutUs from './component/AboutUs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
 

  

   

  return (
    <div className="App">
       
       <section className="section">
        <div className="container content">
                   
    <Router>
           
              
     
     <Routes>
     <Route   path="/aboutus" element={<AboutUs/>} /> 
     <Route   path="/" element={<Kunskaper/>} />
     </Routes>
     
     </Router>
            
                 
                        
    
        </div>
    </section>  

    

    </div>
  );
}

export default App;