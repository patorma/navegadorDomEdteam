const profesor = document.createElement('p');
const profesorContainer = document.getElementById('teacher')

profesor.textContent = 'Alexis Lozada'
profesor.classList.add('teacher')

if(profesorContainer && profesorContainer.querySelector('span')){
    profesorContainer.querySelector('span').appendChild(profesor)
}
// document.body.appendChild(profesor)