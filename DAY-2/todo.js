const container=document.querySelector('ul')
// const checkBox=document.getElementById('check')
container.addEventListener("click", (e) => {
    if(event.target.matches('#check')){
        if(event.target.checked){
            event.target.closest('li').style.textDecoration="line-through"
        }
        else{
            event.target.closest('li').style.textDecoration="none"
        }
    }
      if(event.target.matches('button')){
        event.target.closest('li').remove();
    }
      if(event.target.matches('span')){
      event.target.setAttribute("contenteditable", "true");
      }});
function dynamicList(task){
const myUl=document.querySelector('ul');
const myLi=document.createElement('li');
myLi.className='new_li';
const myBox=document.createElement('input');
myBox.type='checkbox';
myBox.className='new_box';
myBox.id='check';
const mySpan=document.createElement('span');
mySpan.className='new_span';
mySpan.innerText=task
const myButton=document.createElement('button');
myButton.className='new_button';
myButton.innerText="Delete"
myLi.appendChild(myBox);
myLi.appendChild(mySpan);
myLi.appendChild(myButton);
myUl.appendChild(myLi);
}
dynamicList("dom manipulation");
dynamicList("dom traversal");
dynamicList("control flow patterns");

    
