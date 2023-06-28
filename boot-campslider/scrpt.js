
let forward = document.querySelector('#forward')
let back = document.querySelector('#back')
forward.addEventListener('click', ()=>{
    document.querySelector('#cont-2').style.display = 'block'
    document.querySelector('#cont-1').style.display = 'none'
    document.querySelector('#nam-2').style.display = 'block'
    document.querySelector('#nam-1').style.display = 'none'
    document.querySelector('#img-2').style.display = 'block'
    document.querySelector('#img-1').style.display = 'none'
})
back.addEventListener('click', ()=>{
    document.querySelector('#cont-2').style.display = 'none'
    document.querySelector('#cont-1').style.display = 'block'
    document.querySelector('#nam-2').style.display = 'none'
    document.querySelector('#nam-1').style.display = 'block'
    document.querySelector('#img-2').style.display = 'none'
    document.querySelector('#img-1').style.display = 'block'
})