

class RecipeView {
  _parentElement = document.querySelector(".right-first-empty-div");
  bookmarkBtn=document.querySelector('.bookmarkBtn')
  _data;

  render(data) {
    this._data = data;
    const recipeHtml = this._generateMarkUp();

    this._parentElement.insertAdjacentHTML("afterbegin", recipeHtml);
  }

  renderSpinner() {
    const spinnerHtml = `
    <svg xmlns="http://www.w3.org/2000/svg" class=" h-32 w-36 absolute top-40 left-72 motion-safe:animate-spin   text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  `;
    this._parentElement.insertAdjacentHTML("beforebegin", spinnerHtml);
  }

  
renderError(message="We couldn't find the recipe , try another one"){
const errorHtml = `
<div class="flex items-center  absolute md:top-40 md:left-36 top-10 ">
<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-20 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p class="text-xl text-red-500">${message}</p>
</div>
`
this._parentElement.insertAdjacentHTML("beforebegin", errorHtml);

}

  _clearSiblingElement() {
    this._parentElement.previousElementSibling
      ? this._parentElement.previousElementSibling.remove()
      : ''
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
  addHandlerRender(handler) {
    //
    let events = ["hashchange",'load'];
    events.forEach((element) => window.addEventListener(element, handler));
  }

addHandlerUpdateServings(handler){
  this._parentElement.addEventListener('click',function(e) {
    e.preventDefault()
let btn =e.target.closest('.inc_dec_btn')
if(!btn) return
let servingNumber=Number(btn.dataset.serving)
if(servingNumber>0) handler(servingNumber)
})


}


// 
  _generateMarkUp() {
    return `
     <div class="right-element-div">
     <div class="">
     <div class="this._data-img-tittle relative">
       <img src="${
         this._data.image
       }" alt="" class="md:h-96 sm:h-60 w-full cover">
      
         <p class='md:text-4xl text-white bg-gradient-to-r from-green-500 to-blue-300 md:w-56 sm:w-48 py-4  transform -skew-x-12 absolute -bottom-8 left-1/3 sm:text-xl text-center'>${
           this._data.title
         }</p>
     </div> 
     <div class="my-20 "> </div>
     <div class="flex relative mt-20 md:ml-11 sm:ml-1">
       <div class="flex items-center">
         <svg xmlns="http://www.w3.org/2000/svg" class="md:h-10 md:w-10 sm:h-6 sm:w-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
         <p class="md:text-2xl sm:text-lg">${
           this._data.cookingTime
         } <span class='opacity-80'>Minutes</span></p>
       </div>
       <div class="flex md:ml-11 sm:ml-6 items-center">
         <svg xmlns="http://www.w3.org/2000/svg" class="md:h-10 md:w-10 sm:h-6 sm:w-6  text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
           <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
         </svg>
         <p class="md:text-2xl sm:text-lg">${
           this._data.servings
         } <span class="opacity-80">Servings</span></p>
       </div>
     
       <div class="flex ml-10 inc_dec_div">
        <button  class="inc_dec_btn transform hover:scale-110 focus:outline-none" data-serving='${this._data.servings+1}'> <svg xmlns="http://www.w3.org/2000/svg" class="md:h-10 md:w-10 sm:h-6 sm:w-6  text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
         </svg></button>
       <button  class="inc_dec_btn transform hover:scale-110 focus:outline-none" data-serving='${this._data.servings-1}'>  <svg xmlns="http://www.w3.org/2000/svg" class="md:h-10 md:w-10 sm:h-6 sm:w-6  text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
         </svg></button>
       </div>
     
      
     </div>
     
     <div class="md:mt-16 sm:mt-8">
       <p class='uppercase md:mx-64 sm:mx-32  md:text-transparent bg-gradient-to-r bg-clip-text from-red-600 md:text-2xl sm:text-lg to-blue-600'>Recipe ingredients</p>
       <div class="">
         <ul class='flex flex-wrap '>
       ${this._data.ingredients
         .map((ingre) => {
           return `    <li class='flex gap-2 sm:gap-0 py-4 mr-auto ml-4'>
     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
     </svg>
     <span class="ingredients-quantity mr-1">${
       ingre.quantity ? ingre.quantity : ""
     } </span>
     <span class="ingredients-unit mr-1"> ${ingre.unit} </span>
     <span class="ingredients-description "> ${ingre.description} </span>
     
     </li>`;
         })
         .join("")}
     
           
         </ul>
     
       </div>
     </div>
     </div>
     
     <div class=" absolute bottom-36 ">
       <div class="relative">
         <p class='uppercase md:mx-64 sm:mx-32  text-transparent bg-gradient-to-r bg-clip-text from-red-600 text-2xl to-blue-600'>How to cook</p>
       </div>
       <div class="">
     
         <p class="text-center text-xl opacity-90 font-mono
          mt-11">This recipe was carefully designed and tested by ${
            this._data.publisher
          }. Please check out directions at their website.</p>
       </div>
       <div class="absolute left-60 mt-10">
     <a class='btn bg-gradient-to-r from-green-500 to-blue-300 rounded-l-full rounded-r-full h-16 w-48 flex items-center' href='${
       this._data.sourceURL
     }' >Direction
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-auto mr-6 transform hover:translate-x-2 duration-200 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg>
     </a>
     
       </div>
     </div>
     </div>      `;
  }
}
export default new RecipeView();

// ${ingre.quantity ? new Fraction(ingre.quantity).toString() :''}
