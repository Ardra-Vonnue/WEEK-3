function searchItems() {
  const searchItem = document.querySelectorAll("#search-item");
  const searchBar = document.querySelector("#search-bar");
  searchBar.addEventListener("input", (e) => {
    const lowerCase = e.target.value.toLowerCase();
    searchItem.forEach((item) => {
      const text = item.textContent.toLowerCase();

      if (text.includes(lowerCase)) {
        item.style.display = "";
        const regex = new RegExp(lowerCase, "gi");
        let searchtext = item.innerHTML;
        searchtext = searchtext.replace(
          /(<span class="highlight">|<\/span>)/gim,
          "",
        );
        const newText = searchtext.replace(
          regex,
          '<span class="highlight">$&</span>',
        );
        item.innerHTML = newText;
      } else {
        const noResult = document.querySelector("#no-result");
        noResult.innerText = "No match";
        item.style.display = "none";
      }
    });
  });
}
searchItems();
function debounce() {
  setTimeout(() => {
    searchItems();
  }, 300);
}

function highLightText() {
  const box = document.querySelector("#search-bar");
  const search = document.querySelector("#search-item");
  const searchText = event.target.value.toLowerCase();
}
