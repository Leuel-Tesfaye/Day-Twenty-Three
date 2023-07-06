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
