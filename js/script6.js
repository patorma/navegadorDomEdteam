const title = document.getElementById('title');

//recibe dos parametros el primero es el evento y el segundo un callback
//función que se pasa como parametro
// title.addEventListener('eventName',eventHandler)
const holaMundo = e=> alert(e.target.textContent)

title.addEventListener('click',e =>{
    holaMundo(e) //target muetra el elemento del DOM que origino el evento
   
});

document.querySelector('button').addEventListener('click',e =>{
    holaMundo(e)
});