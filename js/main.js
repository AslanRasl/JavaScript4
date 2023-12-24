var elInp = document.querySelector('.inp')
var elText = document.querySelector('.text')

function fn() {
    if(elInp.value % 3 == 0 && elInp.value % 7 == 0){
        elText.textContent = 'fizzbazz'
    }else if(elInp.value % 7 == 0){
        elText.textContent = 'bazz'
    }else if(elInp.value % 3 == 0){
        elText.textContent = 'fizz'
    }else {
        elText.textContent = '3-ga va 7-ga bolinmaydi'
    }
}   