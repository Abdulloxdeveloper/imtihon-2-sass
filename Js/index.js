let scootBurger = document.querySelector('.scoot__bottom-burger')
let scootMediaBox = document.querySelector('.scoot__media-box')
let scootBottomShape = document.querySelector('.scoot__bottom-shape')
scootBurger.addEventListener('click',()=>{
    scootBurger.style.display = 'none'
    scootBottomShape.style.display = 'flex'
    scootMediaBox.style.display = 'flex'
})
scootBottomShape.addEventListener('click',()=>{
    scootBottomShape.style.display = 'none'
    scootBurger.style.display = 'flex'
    scootMediaBox.style.display = 'none'
})