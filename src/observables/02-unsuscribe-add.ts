import { Observable, Observer  } from "rxjs";

const observer: Observer<any> = {
    next: valor =>  console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}


  const intervalo$ = new Observable<number>( subscriber => {

    let counter = 1;

    const interval = setInterval(()=> {
        subscriber.next(counter);
        counter += 1;
        console.log(counter); 
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => { 
        clearInterval(interval);
        console.log('Intervalo Destruido')
    }
  })

  const subs = intervalo$.subscribe(num => console.log('Num: ', num));
  const subs2 = intervalo$.subscribe(num => console.log('Num: ', num));
  const subs3 = intervalo$.subscribe(num => console.log('Num: ', num));

  subs.add(subs2);
  subs.add(subs3);


  setTimeout(() => {
    subs.unsubscribe();
    /* subs2.unsubscribe();
    subs3.unsubscribe(); */

    console.log('Completado timeout');
  }, 3000);