import resultView from './resultView.js'

let searchDiv=document.querySelector('.search_value')
class SearchView{
_parentElement=document.querySelector('.search_div')

_searchBtn=document.querySelector('.search_btn')
getQuery(){
return searchDiv.value
// _parentElement.innerHTML=''  

}

addHandlerSearchResults(handler){

     this._searchBtn.addEventListener('click',function(e){
e.preventDefault()
handler()
searchDiv.blur()

})
searchDiv.addEventListener('keypress',function(e){
if(e.key==='Enter'){
   handler()  
     searchDiv.value=''
     

     
}


})
     
}

}

export default new SearchView()