class Pagination{
_parentElement=document.querySelector('.pagination')
clickedDiv
_data;

render(data) {
  this._data = data;
  const recipeHtml = this._generateMarkUp();
  this._parentElement.insertAdjacentHTML("beforeend", recipeHtml);

}
_clearSiblingElement() {
  this._parentElement.children? document.querySelectorAll('.clickedDiv').forEach(element=> element.remove()):''
  // console.log(this.clickedDiv)
 
}
addHandlerPagination(handler){

this._parentElement.addEventListener('click',function(e){

  let btn=e.target.closest('.lgbtn')
if (!btn) return;

const goToPage = +btn.dataset.goto;
handler(goToPage)

})

}
_generateMarkUp(){
const numPages=Math.ceil(this._data.results.length / this._data.resultPerPage);

const currentPage=this._data.page

// at first page among others page 
if(currentPage===1&& numPages>1 ) {return `

    
<div class="sm:hidden lg:block clickedDiv">
  <button class="lgbtn btn bg-gradient-to-r from-green-100 to-blue-300 rounded-l-full rounded-r-full h-10 w-28 flex items-center ml-44 " data-goto='${currentPage+1}'>
   
   Page ${currentPage+1}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button></div>

<div class="lg:hidden clickedDiv">
</button>
<button class="lgbtn btn bg-gray-300 sm:ml-auto  hover:text-white hover:bg-gray-900" data-goto='${currentPage+1}'>
  <p class=""> ${currentPage+1}</p>
</button>
</div>

`}

// last page 
if(currentPage===numPages&& numPages>1 ) {return `


    <div class="sm:hidden lg:block clickedDiv">
  <button class="lgbtn  btn bg-gradient-to-r from-green-100 to-blue-300 rounded-l-full rounded-r-full h-10 w-28 flex items-center ml-5 text-xs  " data-goto='${currentPage-1}'>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg>
    Page ${currentPage-1}
   
  </button>

</div>
<div class="clickedDiv">
<button class="lgbtn btn bg-gray-300 ml-2 lg:hidden hover:text-white hover:bg-gray-900 " data-goto='${currentPage-1}'>
  <p class="">${currentPage-1}</p>
</button>

</div>

`}

// middle of nowhere
if(currentPage<numPages ) {return `
<div class='clickedDiv'>

<div class=" flex">
    <div class="sm:hidden lg:block">
  <button class="lgbtn  btn bg-gradient-to-r from-green-100 to-blue-300 rounded-l-full rounded-r-full h-10 w-28 flex items-center ml-5 text-xs " data-goto='${currentPage-1}'>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg>
    Page ${currentPage-1}
   
  </button></div>
<div class="sm:hidden lg:block">
  <button class="lgbtn  btn bg-gradient-to-r from-green-100 to-blue-300 rounded-l-full rounded-r-full h-10 w-28 flex items-center ml-10  " data-goto='${currentPage+1}'>
   
    Page ${currentPage+1}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button></div>
</div>
<div class="">
<button class="lgbtn btn bg-gray-300 ml-2 lg:hidden hover:text-white hover:bg-gray-900 " data-goto='${currentPage-1}'>
  <p class="">${currentPage-1}</p>
</button>
<button class="lgbtn btn bg-gray-300 ml-8 lg:hidden hover:text-white hover:bg-gray-900" data-goto='${currentPage+1}'>
  <p class="">${currentPage+1}</p>
</button>
</div>
</div>
`}

// only 1 page 
return ''
}



}
export default new Pagination()