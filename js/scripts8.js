const input = document.getElementById('input');

addEventListener('keydown',e =>{
    // console.log(e.key)
    // console.log(e)
    // console.log(e.ctrlKey)
    // console.log(e.altKey)
    // alert(e.key)
    console.log('D')
    if( e.key  === 'a'){
        e.preventDefault()
        alert('CTRL A')
    }
})