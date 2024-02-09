import charData from "../data/chars.json" assert { type: 'json' };


const app = {};

app.init = () => { const charContainer = document.querySelector('.container');
    
const listBtn = document.querySelector('.listButton')
const gridBtn = document.querySelector('.gridButton')
const outputObjectsInArray = document.querySelector('.outputObjectsInArray')
const outputObjectsInArray2 = document.querySelector('.outputObjectsInArray2')
const container = document.querySelector(".container")


const charTmplGrid = (char) => 
outputObjectsInArray.innerHTML =
`
<div class = characterGrid </div>
<img class ="gridImg" src="${char.img}">
<p class = gridName> ${char.name}</p>
<p class= gridMedia> ${char.media}</p>
    <button href='http://127.0.0.1:5501/index.html' class = grid <p Læs mere </p>
    ${char.button}</button>
    `
    gridBtn.addEventListener('click', () => {
        container.replaceChildren();
    
        charData.forEach(char => {
            container.insertAdjacentHTML('beforeend', charTmplGrid(char));
        })
    })
    
    const charTmplList = (char) => 
    outputObjectsInArray2.innerHTML =
            `
            <div class = characterList </div>
            <img class ="listImg" src="${char.img}">
            <p class = listName> ${char.name}</p>
            <p class= listMedia> ${char.media}</p>
            <button href='http://127.0.0.1:5501/index.html' class = list <p Læs mere  </p>
            ${char.button}</button>
            `
            listBtn.addEventListener('click', () => {
                container.replaceChildren();
        
                charData.forEach(char => { 
                    container.insertAdjacentHTML('beforeend', charTmplList(char));
                })
            })
            
            
            
                
    
            
    
    
    


} 

app.init(); 
























