# Programación reactiva con RxJS

Source captura el evento, luego se suscribe pero para ello devemos de tener un observable

```js
   import { of, map } from "rxjs";

   // Capturas el valor
   const process =
      // Una lista estatica of() o puede ser algun elemento del DOM
      // interval(time) => sirve para idicarle cada tiempo se ejecute el evento
      of('agua', 'agua', 'agua', 'mugre')
         // Aplicar filtro antes de suscribirse
         // Podemos aplicar los filtros que queramos
         .pipe(
            // Primer filtro
            filter(aguaSinFiltrar => aguaSinFiltrar === 'agua'),
            // Segundo filtro
            map((aguaFiltrada) => {
               return aguaFiltrada.toUpperCase()
            })
         )
         // Ahora te suscribes
         .subscribe((aguaFiltrada) => {
            console.log(aguaFiltrada)

            // Desuscribirse o dejar de que se ejecute el evento
            // Así evitamos fuga de memoria
            process.unsubscribe()
         })
```

Un observable tiene tres métodos por defecto: next (siguiente), complete (completado) y error (un error).
