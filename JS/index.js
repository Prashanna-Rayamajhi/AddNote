//making flex container div as parent element for adding elements
let parentElement = document.querySelector('.flex-container');
// getting add button
document.querySelector('.add').addEventListener('click', () => {
    
    //getting the text from input box
    let userNotes = document.querySelector('input[type=text]').value;

    if (userNotes != "") {
        //create an element div with class output
        let childElement = document.createElement('div');
        childElement.setAttribute('class', 'output');

        //creating li elements to append in child elemnt
        let li = document.createElement('li');
        li.setAttribute('class', 'notes')
        //creating button 
        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('class', 'btnDelete');
        let txtNd = document.createTextNode('X');
        btnDelete.appendChild(txtNd);

        //adding child elements into the list
        let text = document.createTextNode(userNotes);
        li.appendChild(text);
        li.appendChild(btnDelete);

        //appending child elements into the  parentElement
        childElement.appendChild(li);
        parentElement.appendChild(childElement);

        
    } else{
        alert("Notes cannot be empty");
    }
    let btnLists= document.querySelectorAll('.btnDelete')
    
    //looping thorugh nodeLists of buttons
    btnLists.forEach(element => { element.addEventListener('click', (e)=>{
        //getting the child element ie 'li'    
       let childElement =  e.target.parentElement;
        //removing parent elemnt ie 'div' (created)
       childElement.parentElement.remove();
    })
        
    });
   
})