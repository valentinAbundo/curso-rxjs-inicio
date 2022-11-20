import { fromEvent, map, tap } from 'rxjs';
const texto = document.createElement('div');

texto.innerHTML = `
Tempor culpa ea incididunt sit.
<br><br>
Sit occaecat officia esse nisi labore veniam magna aute ea pariatur nostrud nulla exercitation. Velit duis ex eiusmod proident laborum commodo eiusmod qui laboris officia. Labore ullamco ipsum deserunt nulla labore proident adipisicing proident aliqua aliquip labore. Tempor tempor adipisicing ullamco consequat pariatur eu sit ea excepteur cupidatat excepteur incididunt.
<br><br>
Culpa qui eu ea Lorem consectetur.
<br><br>
Ea commodo consequat eu excepteur magna officia. Ea tempor aliqua mollit ea in et mollit. Aliqua laboris minim laboris ut.
<br><br>
Tempor culpa ea incididunt sit.
<br><br>
Sit occaecat officia esse nisi labore veniam magna aute ea pariatur nostrud nulla exercitation. Velit duis ex eiusmod proident laborum commodo eiusmod qui laboris officia. Labore ullamco ipsum deserunt nulla labore proident adipisicing proident aliqua aliquip labore. Tempor tempor adipisicing ullamco consequat pariatur eu sit ea excepteur cupidatat excepteur incididunt.
<br><br>
Culpa qui eu ea Lorem consectetur.
<br><br>
Ea commodo consequat eu excepteur magna officia. Ea tempor aliqua mollit ea in et mollit. Aliqua laboris minim laboris ut.
`;

const body = document.querySelector('body');

body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//función que haga el calculo
const calcularPorcentajeScroll = ( event ) => {
    const { 
        scrollTop,
        scrollHeight,
        clientHeight
     } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight)) * 100;

}

//Streams
const scroll$ = fromEvent( document, 'scroll' );

const progress$ =scroll$.pipe(
    //map( event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`
}); 