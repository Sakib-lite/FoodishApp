import {TIMEOUT_SEC} from "./config.js";

export const timeout = function (TIMEOUT_SEC) {
     return new Promise(function (_, reject) {
       setTimeout(function () {
        
         reject(new Error(`Request took too long! Timeout after ${TIMEOUT_SEC} second`));
       }, TIMEOUT_SEC * 1000);
     });
   };

   export const GET_JSON =async function(url){
try{
  const fetchVar=fetch(url)
     let res=await Promise.race([fetchVar,timeout(TIMEOUT_SEC)])
     if(!res.ok) throw new Error(`${res.message} and ${res.status}`)
     // console.log(res);
     
     let data=await res.json()
return data
}catch(err){
throw err

}
   }