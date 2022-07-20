// DOM ELEMENTS

const firstWatch = document.querySelector('#watch-1')
const secondWatch = document.querySelector('#watch-2')
const thirdWatch = document.querySelector('#watch-3')

const firstImage = document.querySelector('.img-1')
const secondImage = document.querySelector('.img-2')
const thirdImage = document.querySelector('.img-3')

// DOM IMPLEMENTATIONS
// if (firstWatch == true){
//     firstImage.style.display = 'block'
//     firstImage.style.display = 'none'
//     thirdImage.style.display = 'none'
// }

// if (secondWatch == true){
//     firstImage.style.display = 'none'
//     secondImage.style.display = 'block'
//     thirdImage.style.display = 'none'
// }

// if (thirdWatch == true){
//     firstImage.style.display = 'none'
//     secondImage.style.display = 'none'
//     thirdImage.style.display = 'block'
// }

function firstCarousel(){
    firstImage.style.display = 'initial'
    secondImage.style.display = 'none'
    thirdImage.style.display = 'none'
}

firstWatch.addEventListener('click', firstCarousel)


function secondCarousel(){
    firstImage.style.display = 'none'
    secondImage.style.display = 'initial'
    thirdImage.style.display = 'none'
}

secondWatch.addEventListener('click', secondCarousel)


function thirdCarousel(){
    firstImage.style.display = 'none'
    secondImage.style.display = 'none'
    thirdImage.style.display = 'initial'
}

thirdWatch.addEventListener('click', thirdCarousel)




