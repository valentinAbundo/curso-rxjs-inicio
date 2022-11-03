import { interval, timer } from "rxjs"


const observer = {
    next: val => console.log('next:' , val),
    complete: () => console.log('Complete')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const interval$ = interval(1000)
// const timer$ = timer(2000)
//const timer$ = timer(2000, 1000) //despues de 2 seg empieza a ejecutarde cada seg
const timer$ = timer(hoyEn5); // se ejecuta en la fecha indicada

console.log('inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('fin');
