console.log("nsdbvn");

import navbar from "../components/navbar.js";
console.log(navbar);

let Navbar_div = document.getElementById("navbarcontainer");
Navbar_div.innerHTML = navbar();

var Inputbar_div = document.getElementById("inputbar");
Inputbar_div.addEventListener("input", () => {
  debounce(callbackfunc, 1000);
});

let timer_ID;
function debounce(callbackfunc, delay) {
  if (timer_ID) {
    clearTimeout(timer_ID);
  }
  timer_ID = setTimeout(function () {
    callbackfunc();
  }, delay);
}

Inputbar_div.addEventListener("keypress", (e) => {
  if ((e.key = "Enter")) {
    let value = Inputbar_div.value;
    localStorage.setItem("SearchBarItem", value);
    window.location.href = "search.html";
  }
});

async function searchmovie() {
  try {
    let inputbar = document.getElementById("inputbar").value;
    let res = await fetch(
      `https://api.unsplash.com/search/photos?&query=${async function searchmovie() {
        try {
          let query = document.getElementById("query").value;
          let res = await fetch(
            `https://api.unsplash.com/search/photos?&query=${query}&client_id=8lBaqc-XJTCXhnwvlftCl7DNmzD3HU9CsGnMNyaHxMo`
          );
          let data = await res.json();
          console.log(data.results);
          return data.results;
        } catch (error) {
          console.log(error);
        }
      }}&client_id=8lBaqc-XJTCXhnwvlftCl7DNmzD3HU9CsGnMNyaHxMo`
    );
    let data = await res.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

async function callbackfunc() {
  let data = await searchmovie();

  if (data == undefined) {
    return;
  }
  // console.log(data)
  append(data);
}
