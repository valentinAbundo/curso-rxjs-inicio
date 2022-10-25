import { Observable, Observer  } from "rxjs";

const observer: Observer<any> = {
    next: valor =>  console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Complete')
}

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    //Forzar error
   /*  const a = undefined;
    a.name = 'Hola'; */

    subs.complete();
});


/* obs$.subscribe( 
    valor =>  console.log('next: ', valor),
    error => console.log('error: ', error),
    () => console.log('Complete')
 ) */

 obs$.subscribe(observer);




  