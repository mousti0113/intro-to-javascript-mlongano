const bottone = document.querySelector('#btn');
const blocco= document.querySelector('#output');
bottone.addEventListener('click', function(event){
    console.log('click');
    console.log(event);
    blocco.innerHTML=      '<h1>ciao mondo</h1>'
    const paragrafo=document.createElement('p');
   
    paragrafo.textContent='Questo è un paragrafo';
    blocco.appendChild(paragrafo);


})