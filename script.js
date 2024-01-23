
const titleWebsite = document.title = 'Note App';

const titleBody = document.querySelector('div.container h1');
titleBody.innerHTML = 'Welcome to our Note App';

const divButtons = document.querySelector('.buttons');

const noteInput = document.querySelector('#note-input');

const deleteButton = document.querySelector('.delete');

const addButton = document.querySelector('.add');
const noteList  = document.querySelector('.note-list');

const contextMenu = document.querySelector('.context-menu');

const deleteItemButton = document.querySelector('#deleteItem');

const redButton = document.querySelector('#redButton');
const greenButton = document.querySelector('#greenButton');
const blueButton = document.querySelector('#blueButton');
const whiteButton = document.querySelector('#whiteButton');
const yellowButton = document.querySelector('#yellowButton');


let noteColor = 'white';

let targetElement;


const buttonArrays = [
    {className:'red',innerHtml:'Red'},
    {className:'green',innerHtml:'Green'},
    {className:'yellow',innerHtml:'Yellow'},
    {className:'white',innerHtml:'White'},
    {className:'blue',innerHtml:'Blue'},
]


const setupContextMenu = (element) => {
    const contextMenu = document.getElementById('contextMenu');
    const deleteItemButton = document.getElementById('deleteItemButton');
    const redButton = document.getElementById('redButton');
    const greenButton = document.getElementById('greenButton');
    const blueButton = document.getElementById('blueButton');
    const whiteButton = document.getElementById('whiteButton');
    const yellowButton = document.getElementById('yellowButton');
  
    element.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      contextMenu.style.display = 'inline';
      contextMenu.style.left = event.clientX + 'px';
      contextMenu.style.top = event.clientY + 'px';
  
      const targetElement = event.target;
  
      deleteItemButton.addEventListener('click', () => {
        targetElement.remove();
        contextMenu.style.display = 'none';
      });
  
      redButton.addEventListener('click', () => {
        targetElement.style.backgroundColor = 'red';
        contextMenu.style.display = 'none';
      });
  
      greenButton.addEventListener('click', () => {
        targetElement.style.backgroundColor = 'green';
        contextMenu.style.display = 'none';
      });
  
      blueButton.addEventListener('click', () => {
        targetElement.style.backgroundColor = 'blue';
        contextMenu.style.display = 'none';
      });
  
      whiteButton.addEventListener('click', () => {
        targetElement.style.backgroundColor = 'white';
        contextMenu.style.display = 'none';
      });
  
      yellowButton.addEventListener('click', () => {
        targetElement.style.backgroundColor = 'yellow';
        contextMenu.style.display = 'none';
      });
    });
  };
  

const chagneInputBackground = (inputSelector,color='white')=>{
    inputSelector.style.backgroundColor = color;
}

const changeWidth = (input,width)=>{
    input.style.width = width + 'px';
}


document.addEventListener('click',(event)=>{
    contextMenu.style.display = 'none'
})

const createButtons = ()=>{
    buttonArrays.forEach(button=>{
        const createButton = document.createElement('button');
        createButton.classList.add(button.className);
        createButton.innerHTML = button.innerHtml;
        divButtons.appendChild(createButton);
        createButton.addEventListener('click',(event)=>{
            noteColor = button.className;
            chagneInputBackground(noteInput,noteColor);
        });
    });
}

noteInput.addEventListener('keyup',(event)=>{
    let valueLength = event.target.value.length;
    let width = 100;
    changeWidth(noteInput,width+valueLength*2)
    if(event.key == 'Enter'){
        const createLi = document.createElement('li');
        createLi.classList.add('note-item');
        createLi.innerHTML = noteInput.value;
        createLi.style.backgroundColor = noteColor;
        noteList.appendChild(createLi);
        noteList.appendChild(createSpan);
        createLi.addEventListener('contextmenu',(event)=>{
            event.preventDefault();
            contextMenu.style.display = 'inline';
            contextMenu.style.left = event.clientX + 'px';
            contextMenu.style.right = event.clientY + 'px';
            
            targetElement = event.target;
    
            deleteItemButton.addEventListener('click',(event)=>{
                targetElement.remove();
            })
    
            redButton.addEventListener('click',(event)=>{
                targetElement.style.backgroundColor = 'red';
            })
            greenButton.addEventListener('click',(event)=>{
                targetElement.style.backgroundColor = 'green';
            })
            blueButton.addEventListener('click',(event)=>{
                targetElement.style.backgroundColor = 'blue';
            })
            whiteButton.addEventListener('click',(event)=>{
                targetElement.style.backgroundColor = 'white';
            })
            yellowButton.addEventListener('click',(event)=>{
                targetElement.style.backgroundColor = 'yellow';
            })
    
            noteInput.value = '';
            
        })

        
    }
})

addButton.addEventListener('click',(event)=>{
    const createLi = document.createElement('li');
    createLi.classList.add('note-item');
    createLi.innerHTML = noteInput.value;
    createLi.style.backgroundColor = noteColor;
    noteList.appendChild(createLi);

    createLi.addEventListener('contextmenu',(event)=>{
        event.preventDefault();
        contextMenu.style.display = 'inline';
        contextMenu.style.left = event.clientX + 'px';
        contextMenu.style.right = event.clientY + 'px';
        
        targetElement = event.target;

        deleteItemButton.addEventListener('click',(event)=>{
            targetElement.remove();
        })

        redButton.addEventListener('click',(event)=>{
            targetElement.style.backgroundColor = 'red';
        })
        greenButton.addEventListener('click',(event)=>{
            targetElement.style.backgroundColor = 'green';
        })
        blueButton.addEventListener('click',(event)=>{
            targetElement.style.backgroundColor = 'blue';
        })
        whiteButton.addEventListener('click',(event)=>{
            targetElement.style.backgroundColor = 'white';
        })
        yellowButton.addEventListener('click',(event)=>{
            targetElement.style.backgroundColor = 'yellow';
        })

        
        
    })

})



noteList.addEventListener('click',(event)=>{
    const targetFinder = event.target.className;
    if(targetFinder == 'note-item'){
        event.target.remove();
    }
})

deleteButton.addEventListener('click',(event)=>{
    noteInput.value = '';
})



createButtons();



