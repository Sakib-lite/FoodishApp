// import { async } from './regenerator-runtime';
import {API_URL,RES_PER_PAGE} from './config.js'
import {GET_JSON} from './helper.js'

export const state = {
recipe:{},
search:{
    query:'',
    results:[] ,
    resultPerPage:RES_PER_PAGE,
    page:1,
},

}

export const loadRecipe =async function(id){
     try{
     
       const data =await GET_JSON(`${API_URL}${id}`)
    
     let {recipe} = data.data
   
     state.recipe={
          id: recipe.id,
          cookingTime:recipe.cooking_time,
          title:recipe.title,
          publisher:recipe.publisher,
          servings:recipe.servings,
          ingredients:recipe.ingredients,
          sourceURL:recipe.source_url,
          image:recipe.image_url,
          
          }
     //  console.log(state.recipe); 
}catch(err){
     throw err //sending the error to the controller 
}
}


export const loadSearchResult=async function(query){
try{
const data = await GET_JSON(`${API_URL}?search=${query}`)
// console.log(data);
state.search.results=data.data.recipes.map(res=> {
     return {id: res.id,
publisher:res.publisher,
image:res.image_url,
title:res.title,}

})

}catch(err){
     throw err //sending the error to the controller

}


}

export const showSearchResult= function(page=state.search.page){
     state.search.page=page
      const  start =(page-1)* state.search.resultPerPage
      const end =page* state.search.resultPerPage

return state.search.results.slice(start,end)

}
export const updateServings= function(newServings){
state.recipe.ingredients.forEach(ingre=> {
     ingre.quantity=(ingre.quantity* newServings)/state.recipe.servings
})
state.recipe.servings=newServings
}
// loadSearchResult('pizza')