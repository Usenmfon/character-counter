const characterEle = document.getElementById('character')
const counterEle = document.getElementById('counter')

characterEle.addEventListener('input', function(e) {
    const target = e.target

    const currentLength = target.value.length
    counterEle.innerHTML = `${currentLength}`
    changeColor(currentLength)
})

const changeColor = (currentCount) => {
    if(currentCount <= 10){
        characterEle.style.background = 'black'
        characterEle.style.color = 'white'
    } else if(currentCount <= 20){
        characterEle.style.background = 'red'
    } else if(currentCount <= 30){
        characterEle.style.background = 'yellow'
        characterEle.style.color = 'black'
    } else {
        characterEle.style.background = 'green'
    }
}