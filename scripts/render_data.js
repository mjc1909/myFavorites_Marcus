import data from "./fetch_data.js"//Henter hele filen//
import { charTmplGrid,charTmplList } from "./templates.js"

 const listBtn = document.querySelector('.listButton')
 const gridBtn = document.querySelector('.gridButton')

const renderData = {};

renderData.init = async () => { 

    let container = document.querySelector('.container')

const charData = await data.fetchPosts()


gridBtn.addEventListener('click', () => {
    container.replaceChildren();

    charData.forEach(char => {
        container.insertAdjacentHTML('beforeend', charTmplGrid(char));
    })
})

listBtn.addEventListener('click', () => {
    container.replaceChildren();

    charData.forEach(char => { 
        container.insertAdjacentHTML('beforeend', charTmplList(char));
    })
})

}

export default renderData