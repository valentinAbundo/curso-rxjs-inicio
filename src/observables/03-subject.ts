import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: valor => console.log('next: ', valor),
  error: error => console.warn('error: ', error),
  complete: () => console.info('complete')
}

const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(
    () => subs.next(Math.round(Math.random() * 100)), 1000
  );

  return () => {
    clearInterval( intervalID );
    console.log('intervalo destruido');
  };
});

/* 
1- Casteo múltiple
2- También es un observer
3- Next, error y complete 
*/

const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(999);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);