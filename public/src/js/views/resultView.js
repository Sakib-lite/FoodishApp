

class ResultView {
     _parentElement = document.querySelector(".left-first-empty-div");
_searchList=document.querySelector('.search_list')
     _data;
emptyList= document.querySelectorAll('.search-item')
     render(data) {
          this._data = data;
          const recipeHtml = this._generateMarkUp();
      
          this._searchList.insertAdjacentHTML("afterbegin", recipeHtml);
        }
        renderSpinner() {
          const spinnerHtml = `
          <svg xmlns="http://www.w3.org/2000/svg" class=" h-20 w-20 absolute top-20 md:left-28 left-10  motion-safe:animate-spin   text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        `;
          this._parentElement.insertAdjacentHTML("beforebegin", spinnerHtml);
        }

        renderError(message="Please search a valid recipe"){
          const errorHtml = `
          <div class="flex items-center  absolute top-20 left-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-20 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-sm text-red-500">${message}</p>
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
             _clearNextSiblingElement(){
              this._searchList.children? document.querySelectorAll('.search-item').forEach(element=> element.remove()):''



             }
        _generateMarkUp() {
          return   this._data.map(res=> {
              return `
              <li class="search-item">
                     <a href="#${res.id}" class="search-a flex bg-gray-100 transform duration-500 hover:-translate-y-1 lg:py-4 sm:py-2">
              
                      <div class="lg:ml-6 sm:ml-0">
                        <img src="${res.image}" alt="" class='lg:w-16 rounded-full sm:w-12'>
                        
                        
                                </div>
                                <div class="lg:ml-4 w-48 sm:ml-1">
                        <p class="uppercase text-transparent bg-gradient-to-r bg-clip-text from-green-600  to-blue-600 opacity-80 font-medium font-mono line-clamp-1 sm:text-sm lg:text-xl">${res.title} </p>
                        <p class="capitalize text-xs mt-1 opacity-80 font-semibold ">${res.publisher}</p>
                        
                                </div>
                               
                     </a>
                    </li>
              
              `


             }).join('')




        }
}
export default new ResultView();
