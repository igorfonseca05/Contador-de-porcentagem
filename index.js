
const circle = document.querySelector(".circle")
const text = document.querySelector(" text")
const form = document.querySelector("form")
const input = document.querySelector('input')
let circumference = null;
let value;




const porcentInPixel = (porcentageValue, circleRadius) => {
    value = porcentageValue;
    circumference = Math.round(2 * Math.PI * circleRadius)
    return Math.round(circumference - (porcentageValue * circumference) / 100);
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const inputValue = input.valueAsNumber;
    const porcentage = porcentInPixel(`${inputValue}`, 70);
    
    let count = circumference;
    let countScore = 0;

if (value > 100) {
    alert('Insira um valor entre 0 e 100')

} else {
    const timer = setInterval(() => {
        circle.style.strokeDashoffset = [`${--count}px`];
        if (count === porcentage) clearInterval(timer)
    }, 5)


    const showScore = setInterval(() => {
        if (countScore <= value) text.innerHTML = `${countScore++}%`
    }, 23)
}

form.reset()
})








