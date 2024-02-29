const outputObjectsInArray = document.querySelector('.outputObjectsInArray')
const outputObjectsInArray2 = document.querySelector('.outputObjectsInArray2')
const outputObjectInArray = document.querySelector('.outputObjectInArray')

export const charTmplGrid = (char) => 
outputObjectsInArray.innerHTML =
`
<div class= "characterGrid"</div>
<img class="gridImg" src="${char.img}">
<p class ="gridName"> ${char.name}</p>
<p class="gridMedia"> ${char.media}</p>
    <button class ="grid"> <a href ="character.html?id=${char.id}">Læs mere</>
    </button>
    `
  





export const charTmplList = (char) => 
outputObjectsInArray2.innerHTML =
        `
        <div class ="characterList" </div>
        <img class ="listImg" src="${char.img}">
        <p class ="listName"> ${char.name}</p>
        <p class="listMedia"> ${char.media}</p>
        <button class ="list"> <a href ="character.html?id=${char.id}">Læs mere</a>
        </button>
        `

export const singlePostTmpl = (char) => 
outputObjectInArray.innerHTML =
        `
        <div class ="char" </div>
        <img class ="charImg" src="${char.img}">
        <p class ="charName"> ${char.name}</p>
        <p class="charMedia"> ${char.media}</p>
        
        `
        ;