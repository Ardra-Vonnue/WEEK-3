const myElement=document.getElementById("name")
myElement.style.color="blue";
function outFunction(){
    alert('These are my experience')
}

const myClass = document.getElementsByClassName('experience');
for (let i = 0; i < myClass.length; i++) {
  myClass[i].onmouseout = outFunction; 
}
 
const myTag=document.getElementsByTagName('img');
for (let i = 0; i < myTag.length; i++) {
myTag[i].style.border="3px solid green";
}

const query = document.querySelector('h4');
query.style.color = 'orange';

const myQuery=document.querySelectorAll('h3');
myQuery.forEach(heading => {
heading.style.color='brown'
});

const parentOfFeatured= document.querySelector('.featured').parentElement;
console.log(parentOfFeatured)

const firstChildOfMid= document.querySelector('.mid').firstChild;
console.log(firstChildOfMid)

const lastChildOfContainer= document.querySelector('.container').lastChild;
console.log(lastChildOfContainer)

const nextSiblingOfFeatured= document.querySelector('.featured').nextSibling;
console.log(nextSiblingOfFeatured)

function addCard(title, body, imageUrl){
const container=document.querySelector('.experience');
const card=document.createElement('section')
card.className='card_container'
const myImg=document.createElement('img')
myImg.src=imageUrl;
myImg.alt="image1"
card.appendChild(myImg);
container.appendChild(card);
const myText=document.createElement('p');
myText.textContent="Look in to the beautiful view"
card.appendChild(myImg);
card.appendChild(myText);
container.appendChild(card);
}
addCard("card1","body",'card1.jpeg')
addCard("card2","body",'card2.jpeg')

function removeCard(card_container){
    const card=document.querySelector('.card_container');
if(card){
  card.remove()
}
}
removeCard("card_container")

function clearAllCards(card_container){
    const cards=document.querySelectorAll('.card_container');
cards.forEach(card=>{card.remove();});
}
clearAllCards("card_container")