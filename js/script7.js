const title = document.getElementById('title');

//recibe dos parametros el primero es el evento y el segundo un callback
//función que se pasa como parametro
// title.addEventListener('eventName',eventHandler)
const holaMundo = e=> console.log(e.target.textContent)

// title.addEventListener('click',e =>{
//     holaMundo(e) //target muetra el elemento del DOM que origino el evento
   
// });

// document.querySelector('button').addEventListener('click',e =>{
//     holaMundo(e)
// });
//dblclick detecta click doble
//mouseenter (es equivalente al hover de CSS cuando el mouse entra)
//mouseleave (es equivalente al hover de CSS cuando el mouse sale)
//contextmenu (captura el click derecho)
const createMenu = e =>{
    const menu = document.createElement('div');
    const prevMenu = document.getElementById('context-menu')
    menu.id = 'context-menu';
    
    menu.textContent = 'Soy un menu contextual';

    if(prevMenu){
        document.body.removeChild(prevMenu)
    }
    document.body.appendChild(menu);

    menu.style.padding = '1em';
    menu.style.background ='#eee';
    menu.style.position = 'fixed';
    menu.style.top = `${e.pageY}px`
    menu.style.left = `${e.pageX}px`
    document.addEventListener('click', e =>{
        menu.style.display ='none';
    })
}
document.addEventListener('contextmenu',e =>{
    //holaMundo(e) //target muetra el elemento del DOM que origino el evento
    createMenu(e);
    //prevenir acciones por defecto
    e.preventDefault()
   
});