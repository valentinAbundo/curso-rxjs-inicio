import { asyncScheduler } from "rxjs"


// setTimeout(k() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

asyncScheduler.schedule(saludar, 2000 ); // as seTimeout
asyncScheduler.schedule(saludar2, 2000, 'VS' ); 


const subs = asyncScheduler.schedule( function(state){
    console.log('state', state);

    this.schedule(state + 1, 1000); //as setInterval
}, 3000, 0);

/* setTimeout(() => {
    subs.unsubscribe();
}, 6000); */

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);