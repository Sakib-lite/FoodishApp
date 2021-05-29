import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultView from "./views/resultView.js";
import pagination from "./views/pagination.js";


// import './core-js/stable';
// import './regenerator-runtime/runtime';
// import { async } from './regenerator-runtime';

let getRecipe = async function () {
  try {
    //rendering spinner
    recipeView._clearSiblingElement();
    recipeView._clear();
    recipeView.renderSpinner();

    //generating id
    const id = window.location.hash.slice(1);
    if (!id) return;

    //loading recipe
    await model.loadRecipe(id);
    // rendering  recipes
    recipeView.render(model.state.recipe);
    // recipeView.toggleBookmarkBtn()
    recipeView.addHandlerUpdateServings(controllServings)
    recipeView._clearSiblingElement();
  } catch (err) {
    
    recipeView._clearSiblingElement();
    recipeView.renderError();
  }
};

let searchController = async function () {
  try {
   resultView._searchList.innerHTML =''
   pagination._parentElement.innerHTML =''
    resultView._clearSiblingElement();
    resultView._clear();
    resultView.renderSpinner();

const query=searchView.getQuery()
if(!query) resultView._clearSiblingElement()||resultView.renderError()
 await model.loadSearchResult(query);
resultView.render(model.showSearchResult()) 
// resultView.render(model.state.search.results)
pagination.render(model.state.search)

if(query.length>0) resultView._clearSiblingElement();
  } catch (err) {
alert(err);
resultView._clearSiblingElement();
    resultView.renderError();
  }
};


let controllPagination=function(GoTo){
  resultView._clearNextSiblingElement()
  pagination._clearSiblingElement()
  resultView.render(model.showSearchResult(GoTo)) 
  pagination.render(model.state.search)
}


let controllServings=function(servingNumber){
  recipeView._parentElement.removeChild(recipeView._parentElement.firstElementChild)
  model.updateServings(servingNumber)
  recipeView.render(model.state.recipe);
}

const init = function () {
  recipeView.addHandlerRender(getRecipe);
  searchView.addHandlerSearchResults(searchController)
  pagination.addHandlerPagination(controllPagination)
  recipeView.addHandlerUpdateServings(controllServings)
};
init();