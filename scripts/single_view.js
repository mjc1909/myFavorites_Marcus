import data from "./fetch_data.js"//Henter hele filen//
import { singlePostTmpl} from "./templates.js"

const singleView = {}

singleView.init = async () => {

    let pagePost = document.querySelector('.single-post-container')
    
    const chars = await data.fetchPosts()
    
    
    if(pagePost) {
        //hiver alt ud efter '?'// Bruges til at få fat i query string//
    const search = location.search;
    
    
    const charID = new URLSearchParams(search).get('id') 
    //trækker specifikke væredier ud - 'id' giver os det der står efter = tegnet//
    const foundChar = chars.find ((char) => char.id == charID)
    
    let singlePostContainer = document.querySelector('.single-post-container')
    singlePostContainer.insertAdjacentHTML('beforeend',singlePostTmpl(foundChar) )
    }
}

export default singleView;
  