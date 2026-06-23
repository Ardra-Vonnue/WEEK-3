// const myImage=document.querySelector('.icon')
// const myDrawer=document.querySelector('nav')
// myImage.addEventListener("click",() => {
   
//     myDrawer.classList.add('open')
    
    
// })
const drawer = document.querySelector('.drawer');
const openImage = document.querySelector('.icon');

function showDrawer(){
    document.querySelector('.drawer').classList.toggle('open');
    document.querySelector('.drawer').ariaExpanded=true
}
document.addEventListener('keydown',(event)=>{
    if(event.key == "Escape"){
         document.querySelector('.drawer').ariaExpanded=false
         document.querySelector('.drawer').classList.remove('open');
    }
})
document.body.style.overflow="hidden";

const focus = document.getElementById('drawer');
const focusElements = container.querySelectorAll('a');
const firstElement = focusElements[0];
const lastElement = focusElements[focusElements.length - 1];

container.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              
                lastElement.focus(); 
            }
        } else { 
            if (document.activeElement === lastElement) {
            
                firstElement.focus(); 
            }
        }
    }
});
