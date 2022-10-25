import { of } from "rxjs";


//const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 7, 8);
// const obs$ = of([1,2], {a:1}, true, function(){}, Promise.resolve('hola'));
const obs$ = of(1, 2, 3, 4, 5, 6);

console.log('inicio obs');
obs$.subscribe(({
    next: (next) => console.log('next', next),
    error: null,
    complete: () => console.log('Terminamos la secuencia')
}));

console.log('fin obs');

