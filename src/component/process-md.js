import React from 'react';

function processMd (content)   {
    
    var row = content;
    let bulletOn = false; 
    var html = '';
    for (var i=0; i<row.length; i++) {
        var line = row[i].trim();

        while (line.indexOf('**') >=0) {
            line = line.replace('**', '<b>');
            line = line.replace('**', '</b>');
        }

        while (line.indexOf('*') >0) {
            line = line.replace('*', '<i>');
            line = line.replace('*', '</i>');
        }
        if (line.indexOf('[länk') >=0) {
            let posStart = line.indexOf('[länk');
            let posEnd = line.indexOf(']', posStart);
            let link = line.slice(posStart +1 , posEnd);
            let paramLink = link.split(':');
            if (paramLink.length == 4) {
                line = line.replace('[' + link + ']', '<a class="' + paramLink[3] + '" href="' + paramLink[1] + '">' + paramLink[2] + '</a>');
            }
            else {
                line = line.replace('[' + link + ']', '<a href="' + paramLink[1] + '">' + paramLink[2] + '</a>');
            }
        }
            
        if (bulletOn && line.substring(0, 1) != '*') {
            html += '</ul>';
            bulletOn = false;
        }

        if (line.substring(0, 1) == '*') {
            if (bulletOn == false) {
                html += '<ul>';
                bulletOn = true;
            } 
            line = line.substring(1);
            line = line.trim();
            html += '<li>' + line + '</li>';
        }
        
        else if (line.substring(0, 5) == '#####')  {
            line = line.substring(5);
            line = line.trim();
            if (line.indexOf(']') > 0) {
                let classes = line.substring(1, line.indexOf(']'));
                line = line.replace('[' + classes + ']', '');
                html += '<h5 class="' + classes + '">' + line + '</h5>';
            }
            else {
                html += '<h5>' + line + '</h5>';
            }
        }

        else if (line.substring(0, 4) == '####')  {
            line = line.substring(4);
            line = line.trim();
            if (line.indexOf(']') > 0) {
                let classes = line.substring(1, line.indexOf(']'));
                line = line.replace('[' + classes + ']', '');
                html += '<h4 class="' + classes + '">' + line + '</h4>';
            }
            else {
                html += '<h4>' + line + '</h4>';
            }
        }

        else if (line.substring(0, 3) == '###')  {
            line = line.substring(3);
            line = line.trim();
            if (line.indexOf(']') > 0) {
                let classes = line.substring(1, line.indexOf(']'));
                //alert(classes);
                line = line.replace('[' + classes + ']', '');
                //alert(line);
                html += '<h3 class="' + classes + '">' + line + '</h3>';
            }
            else {
                html += '<h3>' + line + '</h3>';
            }
        }

        else if (line.substring(0, 2) == '##')  {
            line = line.substring(2);
            line = line.trim();
            if (line.indexOf(']') > 0) {
                let classes = line.substring(1, line.indexOf(']'));
                line = line.replace('[' + classes + ']', '');
                html += '<h2 class="' + classes + '">' + line + '</h2>';
            }
            else {
                html += '<h2>' + line + '</h2>';
            }
        }

        else if (line.substring(0, 1) == '#')  {
            line = line.substring(1);
            line = line.trim();
            if (line.indexOf(']') > 0) {
                let classes = line.substring(1, line.indexOf(']'));
                line = line.replace('[' + classes + ']', '');
                html += '<h1 class="' + classes + '">' + line + '</h1>';
            }
            else {
                html += '<h1>' + line + '</h1>';
            }
        }

        else if (line.substring(0, 5) == '[bild')  {
            line = line.substring(5);
            line = line.trim();
            line = line.slice(0, -1)
            html += '<div><image src="images/' + line + '" alt="">';
        } 

        else if (line.substring(0, 3) == '---') {
            html += '<hr>';
        } 
        
        else {
            html += '<p>' + line + '&nbsp;</p>';
        }
    }
    return html;

}








export default processMd;