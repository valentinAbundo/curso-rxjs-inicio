import { map, range, fromEvent, pluck, mapTo } from 'rxjs';


/* range(1, 5).pipe(
    map<number, number>( val => {
        return val * 10
    })
).subscribe(console.log) */

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(
    map(event => event.code)
)

const keyupPluck$ = keyUp$.pipe(
    pluck('key')
)

const keyupPluckObj$ = keyUp$.pipe(
    pluck('target', 'baseURI')
)

const keyupMapTo$ = keyUp$.pipe(
    mapTo('tecla presionada')
)

keyUp$.subscribe(val => console.log('keyup', val));
keyUpCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupPluckObj$.subscribe(code => console.log('pluck obj', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));

