import { switchMap, of } from "rxjs";
import { fromFetch } from "rxjs/fetch";

/**
 * Función principal
 */
(function() {
   /**
    * Steam: Click
    * Observable: fromEvent ($)
    * subscription: cambiar valor
    */

   const dataHTTP$ = fromFetch('https://jsonplaceholder.typicode.com/todos')
   dataHTTP$
      .pipe(
         switchMap(resp => {
            if (resp.ok) {
               return resp.json()
            } else {
               return of({
                  message: 'Error en la petición...'
               })
            }
         })
      )
      .subscribe((resp) => {
         resp.map((item) => {
            document.querySelector('.data').innerHTML += `
                  <div class="boxing">
                     <div class="id">${item.id}</div>
                     <div class="tittle">${item.title}</div>
                  </div>
               `
         })
      })

})();