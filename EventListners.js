/** Event listeners : common html events onClick, onChange, onMouseHover, onMouseOut, onKeyDown, onKeyUp, onLoad.
 * 
 */

// selectedElement.addEventListeners ('eventListener' , e=>{
//     //   // the activity you want to occur after the event will be in here

// })

// click : before we listen an event we select an element from the html 

const button = document.querySelector('button')

button.addEventListener('click', e =>{
    button.textContent = 'Clicked'
})

// An event can be also attached directly to the HTML element as inline script.

const button1 = document.querySelector('.submit')
const clickMe = () => {
    alert('Message submitted ')
}

//  double click 

const download = document.querySelector('#double');

download.addEventListener('dblclick', e => {
    console.log('Downloaded', e);
});

// mouse Enter , mouseHover etc are the same as the above just change the event listener to mouse enter or hover


// Getting value from an input element  
// we usually fill forms and accept data. form fields are created using input HTML 
//Let us build a small application which allow us to calculate body mas index of a person using two input fields, one button and one p tag.

const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const calculate = document.querySelector('.calculate')

let bmi 
calculate.addEventListener('click', e =>{
    bmi = mass.value / height.value ** 2
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})

// exercising the above example with adding two numbers 

const numOne = document.querySelector('#num1')
const numTwo = document.querySelector('#num2')
const add = document.querySelector('.sum')

let sum 
add.addEventListener('click', e =>{
    sum = Number(numOne.value )+ Number(numTwo.value)
    alert(`The sum of the numbers is: ${sum}`)
    console.log(sum)
})

const input = document.querySelector('#input')
const p = document.querySelector('p')

input.addEventListener('input' , e =>{
    p.textContent = e.target.value
})

=