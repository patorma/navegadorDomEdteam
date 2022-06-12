const form =document.getElementById('form');
const rememberPassword = document.getElementById('remember-password')

form.addEventListener('submit',()=>{
    console.log("Ha enviado el formulario")
})

rememberPassword.addEventListener('change',e =>{
    if(e.target.checked){
        console.log('El usuario quiere recordar su contraseña')
    }else {
        console.log('El usuario NO quiere recordar su contraseña')
    }
})