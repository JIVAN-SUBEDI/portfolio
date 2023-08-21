   // for navbar
   let navbar_button = document.getElementById("navbar-toggle");
   let navbar = document.getElementById("navbar_items");
let navbar_container = document.getElementById("navbar");

   navbar_button.onclick = ()=>{
      navbar.classList.toggle("active");
      // navbar_container.classList.toggle("sticky");
      navbar_container.classList.toggle("active");
   
   }
//for fixed 
document.addEventListener("scroll",()=>{
navbar_container.classList.toggle("sticky",window.scrollY > 0);
});

function navbarchange(){
   // alert("rtes")
   // let navbar = document.getElementById("navbar_items");

   let navbar_container = document.getElementById("navbar");
   
   navbar_container.classList.remove("active");
   navbar.classList.remove("active");
}