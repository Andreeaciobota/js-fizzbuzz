const lista = document.querySelector('.container');
console.log(lista);

/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

for( i=1; i<101 ; i++ ){
    const numero = document.createElement('div');
    
    numero.classList.add('box');
    if( (i%3 == 0) && ( i%5 ==0 ) )
    {
        numero.classList.add('box-brown');
        numero.append('fizzbuzz');
    }else if( i%3 == 0 ){
        numero.classList.add('box-acquamarine');
        numero.append('fizz');
    } else if( i%5 == 0){
        numero.classList.add('box-yellow');
        numero.append('Buzz');
    }else{
    numero.append(i);
    }
    lista.append(numero);
}