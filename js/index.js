
var buttonA = document.querySelector('#btn-a')
var buttonB = document.querySelector('#btn-b')
var buttonC = document.querySelector('#btn-c')
var buttonD = document.querySelector('#btn-d')
var buttonE = document.querySelector('#btn-e')

buttonA.addEventListener('click', function(){

    var containerA = document.querySelector('#res1')
    var tituloA = document.querySelector('#pg1') 

    buttonA.classList.toggle('rotate')
    containerA.classList.toggle('hide')
    tituloA.classList.toggle('pg')
})

buttonB.addEventListener('click', function(){

    var containerB = document.querySelector('#res2')
    var tituloB = document.querySelector('#pg2')

    buttonB.classList.toggle('rotate')
    containerB.classList.toggle('hide')
    tituloB.classList.toggle('pg')
})

buttonC.addEventListener('click', function(){

    var containerC = document.querySelector('#res3')
    var tituloC = document.querySelector('#pg3')

    buttonC.classList.toggle('rotate')
    containerC.classList.toggle('hide')
    tituloC.classList.toggle('pg')
})

buttonD.addEventListener('click', function(){

    var containerD = document.querySelector('#res4')
    var tituloD = document.querySelector('#pg4')

    buttonD.classList.toggle('rotate')
    containerD.classList.toggle('hide')
    tituloD.classList.toggle('pg')
})

buttonE.addEventListener('click', function(){

    var containerE = document.querySelector('#res5')
    var tituloE = document.querySelector('#pg5')

    buttonE.classList.toggle('rotate')
    containerE.classList.toggle('hide')
    tituloE.classList.toggle('pg')
})
