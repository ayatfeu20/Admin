import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function ProcessMd() {

    const [content, setContent] = useState("");
    
    
    const getContent = async () => {
        const instructionsPath = require("./test-data-2.md");

        try {
            const instructionsFile = await fetch(instructionsPath);

            const instructionsText = await instructionsFile.text();  

        
            
            setContent(instructionsText);

            var row = setContent;
            for (var i=0; i<row.length; i++);{
            var line = row[i].trim();
            if (line.substring(0, 5) == '[bild')  {
                line = line.substring(5);
                line = line.trim();
                line = line.slice(0, -1)
                       
                instructionsText = '<div><image src="./images' +  + '" alt="">';
            } 
        }
        } catch (err) {
            console.error('Problem reading markdown file', err);
        }
    };

    

    

    useEffect(() => {

        
        getContent();
    }, [getContent]);


       

    


    



    return(
    <ReactMarkdown children= {content} /> 
    )

    }
 
    export default ProcessMd;


