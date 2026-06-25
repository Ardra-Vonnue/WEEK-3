const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) return;
});
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("intersecting");
      addClass(entry.target2);
    }
  });
};
const options = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(callback, options);
document.querySelectorAll(".column, .test").forEach((element) => {
  observer.observe(element);
});
function addClass(element) {
  element.classList.add("visible");
  console.log("intersecting");
}

const filled = document.querySelector("#filled");
function update() {
  filled.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
  requestAnimationFrame(update);
}
update();

const btn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const progressBar = document.querySelector("#filled");
const updateText = document.querySelector("#update");
let ticking = false;
function updateProgress() {
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = Math.floor((scrollTop / scrollHeight) * 100);
  progressBar.textContent = `${progress}%`;
  console.log(progressBar.style.width);
  ticking = false;
  console.log(progress);
}
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateProgress);
    ticking = true;
  }
});
