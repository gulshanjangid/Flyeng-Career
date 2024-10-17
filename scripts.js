const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const textArray = [
  "Your Success Roadmap",
  "Achievement Catalysts",
  "Your Educational Partner",
  "Mentors of Success",
  "The Key to Achievement",
  "Gateway to Brilliance",
  "Flyeng Career"
];

let textArrayIndex = 0;
let charIndex = 0;

function fadeIn() {
  cursor.classList.remove("blink");
  typedText.textContent = textArray[textArrayIndex];
  setTimeout(fadeOut, 500); // Adjust the delay for visibility
}

function fadeOut() {
  cursor.classList.add("blink");
  setTimeout(erase, 500); // Adjust the delay before erasing
}

function erase() {
  if (charIndex > 0) {
    charIndex--;
    setTimeout(erase, 100);
  } else {
    cursor.classList.remove("blink");
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(fadeIn, 500); // Adjust the delay before fading in
  }
}

// Start the fade-in animation
setTimeout(fadeIn, 500); // Start after a delay (adjust as needed)

document.addEventListener("DOMContentLoaded", () => {
  type();
});

var tl = gsap.timeline();
tl.from(".nav-links",{
  x:-15,
  scale:1.3,
  opacity:5,
  duration:0.8,
  stagger:0.5
}
);
// var preLoader = document.getElementById('loading');
// function myFunction(){
//   preLoader.style.display = 'none';
// }
const nestedDropdowns = document.querySelectorAll(".nested-dropdown");
        
nestedDropdowns.forEach((dropdown) => {
    const nestedContent = dropdown.querySelector(".nested-dropdown-content");
    const nestedLinks = nestedContent.querySelectorAll("a");
    
    nestedLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");
            if (href) {
                window.location.href = href; 
            }
        });
    });
});