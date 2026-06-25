function expandPanel() {
  const toggleNew=document.querySelector(".inner").classList.toggle("open");
  if(toggleNew){
    document.querySelector(".inner").ariaExpanded = true;
    sessionStorage.setItem("showPanel","true")
  }
  else{
     document.querySelector(".inner").ariaExpanded = false;
     sessionStorage.setItem("showPanel","false")
  }
 
  console.log("success");
}
const firstRadio = document.querySelector(".inner1");
const secondRadio = document.querySelector(".inner2");
firstRadio.style.display = "none";
secondRadio.style.display = "none";
function expandPanel1() {
  firstRadio.style.display = "block";
  secondRadio.style.display = "none";
  document.querySelector(".inner1").ariaExpanded = "true";
}
function expandPanel2() {
  firstRadio.style.display = "none";
  secondRadio.style.display = "block";
  document.querySelector(".inner2").ariaExpanded = "true";
}
const starOne = document.querySelectorAll(".star1");
function showStar(e) {
  for (star of starOne) {
    star.innerHTML = "&#9734;";
  }
  for (star of starOne) {
    if (event.target !== star) {
      star.innerHTML = "&#9733;";
    }
    if (event.target === star) {
      star.innerHTML = "&#9733;";
      break;
    }
  }
}
if(sessionStorage.getItem("showPanel")==="true"){
    document.querySelector('.inner').classList.add('open')
}
else{
   document.querySelector('.inner').classList.remove('open') 
}


const container = document.querySelector("body");
const headerElements = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
const first = 0;
const last = headerElements.length - 1;
headerElements.forEach((e) => {
  e.tabIndex = 0;
});
container.addEventListener("keydown", (e) => {
  let c = 0;
  for (el of headerElements) {
    if (el === document.activeElement) {
      if (e.key == "ArrowUp") {
        if (c === first) {
          c = last;
          headerElements[c].focus();
          break;
        }
        c = c - 1;
        headerElements[c].focus();
      }
      if (e.key == "ArrowDown") {
        if (c === last) {
          c = first;
          headerElements[c].focus();
          break;
        }
        c = c + 1;
        headerElements[c].focus();
      }
      if (e.key == "Home") {
        headerElements[first].focus();
      }
      if (e.key == "End") {
        headerElements[last].focus();
      }
    }
  c++;
  }
});
const toggleButton = document.querySelectorAll("toggleBtn");
toggleButton.forEach(button=>{
  button.addEventListener('keydown',function(event){
     if (event.key === "Enter" || event.key === " ") {
    button.click();
    console.log("success")
  }
  })
})

