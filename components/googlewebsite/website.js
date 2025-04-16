// // Array with suggestions
// const suggestions = ["JavaScript", "HTML", "CSS", "Frontend Development", "Google Clone"];



// Elements
// const searchBar = document.getElementById('search-bar');
// const suggestionList = document.getElementById('suggestion-list');

// // Show suggestions when search bar is clicked
// searchBar.addEventListener('click', () => {
//   suggestionList.classList.remove('hidden');
//   displaySuggestions();
// });

// // Populate list with array items
// function displaySuggestions() {
//   suggestionList.innerHTML = ''; // Clear previous suggestions
//   suggestions.forEach(item => {
//     const listItem = document.createElement('li');
//     listItem.textContent = item;
//     suggestionList.appendChild(listItem);
//   });
// }

// // Hide suggestions when clicking outside
// document.addEventListener('click', (event) => {
//   if (!searchBar.contains(event.target) && !suggestionList.contains(event.target)) {
//     suggestionList.classList.add('hidden');
//   }
// });

// const suggestions = ["JavaScript", "HTML", "CSS", "Frontend Development", "Google Clone"];

// const searchBar = document.getElementById('search-bar');
// const suggestionList = document.getElementById('suggestion-list');
// let show = false;

// function searchShow() {
//   show = !show; // Toggle the value of show
//   suggestionList.classList.toggle("hidden", !show); // Show or hide based on `show`

//   // Clear previous suggestions
//   suggestionList.innerHTML = "";

//   if (show) {
//     suggestions.forEach((item) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = item;
//       suggestionList.appendChild(listItem);
//     });
//   }
// }

const suggestions = ["JavaScript", "HTML", "CSS", "Frontend Development", "Google Clone"];

const searchBar = document.getElementById('search-bar');

const suggestionList = document.getElementById('suggestion-list');

let show=false;

function searchShow(){

  show=!show;
  suggestionList.classList.toggle("hidden",!show);
  suggestionList.innerHTML="";
  suggestions.forEach((item)=>{
    let listItem=document.createElement("li");
    listItem.textContent=item;
    suggestionList.appendChild(listItem);
  })
  
}

// let log=document.querySelector(".logo");
// let gogNote=document.querySelector("#googleNote");
// let x= false;
// function note(){
//   x=!x;
// gogNote.classList.toggle("classGoogle", !x);
// if(x)
// {
//   gogNote.innerText="This Is Google";
// }
// }
