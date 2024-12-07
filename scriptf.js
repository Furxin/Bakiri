// Highlight the current navigation link
document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.topnav a');
  
    // Get the current page's file name
    const currentPage = window.location.pathname.split('/').pop();
  
    // Loop through links to find the matching one
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

const plus = document.querySelector(".plus"),
        minus = document.querySelector(".minus"),
         num = document.querySelector(".num");

         let a = 1;

         plus.addEventListener("click", ()=> {
          a++;
          num.innerHTML = a;
          a = (a<100) ? "0" + a:a;
         });

         minus.addEventListener("click", ()=> {
          a--;
          num.innerHTML = a;
          a = (a<100) ? "0" + a:a;
         });
  
const btn = document.getElementById("AddToCart");

btn.addEventListener("click", ()=> {
  alert("Items are added in the cart!");
});
