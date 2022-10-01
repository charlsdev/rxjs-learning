import { fromEvent, throttleTime } from "rxjs";

/**
 * Función principal
 */
(function() {
   const btn = document.getElementById('btn-main')
   const cuadrado = document.querySelector('.cuadrado')

   // btn?.addEventListener('click', () => {
   //    cuadrado.style.background = "blue";
   // })

   /**
    * Steam: Click
    * Observable: fromEvent ($)
    * subscription: cambiar valor
    */

   const observableButton$ = fromEvent(btn, 'click')
   observableButton$
      // .pipe(throttleTime(500)) //Ignorar cierto tiempo
      .subscribe(() => {
         console.log('Cambiamos el color');
         cuadrado.style.background = "blue";
      })

})();