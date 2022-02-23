import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import './App.css';



const App = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("test-data-2.md")
      .then((res) => res.text())
      .then((text) => setContent(text)); 
               
  },   
  []);

   

  return (
    <div className="App">
       
       <section className="section">
        <div className="container content">
                   
            <ReactMarkdown children= {content}>  
              

  
            </ReactMarkdown>
                 
                        
    
        </div>
    </section>  

    

    </div>
  );
}

export default App;