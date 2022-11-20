import { from, reduce, scan, map } from 'rxjs';
const numeros = [1,2,3,4,5];

const totalAcumulador = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

//Reduce
from( numeros ).pipe(
    reduce( totalAcumulador, 0)
)
.subscribe(console.log )

//Scan
from( numeros ).pipe(
    scan( totalAcumulador, 0)
)
.subscribe(console.log )

//Redux 
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'hola', autenticado: true, token: null },
    { id: 'hola', autenticado: true, token: 'ABC' },
    { id: 'hola', autenticado: true, token: 'ABC123' },
];

const state$ = from( user ).pipe(
    scan<Usuario>( (acc: Usuario, cur: Usuario) => {
        return {...acc, ...cur}
    })
)

const id$ = state$.pipe(
    map( state => state.id )
)

id$.subscribe( console.log )