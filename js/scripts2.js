// nodeList es una lista de nodos
//los nodos pueder atributos, pueden ser comentarios,texto 
// [... esto expande los elementos como un array]
// const nodeList = [...document.querySelectorAll('li')];
//segunda forma de transformarlo en array
//creame una lista desde una lista que se pasa por parametros
// const nodeList = Array.from(document.querySelectorAll('li'));
// nodeList.map(el => el.style.background = 'yellow')
//Quitar un elemento que tenga Object
// nodeList.map(el => {
//     if(el.textContent.trim().toUpperCase() == 'OBJECT'){
//         el.remove()
//     }
// })
//seleccionar elementos con el nombre de la etiqueta
// const elementList = document.getElementsByTagName('li');

//otra forma de recorrer un nodeList
const nodeList = document.querySelectorAll('li');
for(let el of nodeList){
    if(el.textContent.trim().toUpperCase() == 'OBJECT'){
                 el.remove()
             }
}

// console.log(nodeList);
// console.log(elementList);
