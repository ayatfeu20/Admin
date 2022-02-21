import './App.css';
import processMd from './component/process-md';
import { Link } from "react-router-dom";



function App() {
  function loadMd() {
    fetch('test-data-2.md')
        .then(response => response.text()) 
        .then(csvString => {
            //Split the csv into rows
            const rows = csvString.split('\n');
            //console.log(rows);
            let html = processMd(rows);
            document.getElementById('content').innerHTML = html;
        });
    }
loadMd();




  return (
    <div className="App">
       
       <section class="section">
        <div class="container content">
        
            <div class="columns">
            
              
                <div class="column" id="content"></div>
                
            </div>
        </div>
    </section>  

    

    </div>
  );
}

export default App;
