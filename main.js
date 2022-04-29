let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let img = document.getElementsByClassName('.img')
let benzin = document.querySelector('.benzin')
let h1 = document.querySelector('.h1')


var benzinBor = false
var benzinYoq = false


btn.addEventListener('click', function () {
    if(benzinBor === benzinYoq){
        img.style.marginLeft = '500px'
    }
})
btn2.addEventListener('click', function() {
    img.style.marginLeft = '300px'
})