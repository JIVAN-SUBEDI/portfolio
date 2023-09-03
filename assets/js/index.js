   // for navbar
   let navbar_button = document.getElementById("navbar-toggle");
   let navbar = document.getElementById("navbar_items");
let navbar_container = document.getElementById("navbar");
navbar.style.width =
   navbar_button.onclick = ()=>{
      navbar.classList.toggle("active");
      // navbar_container.classList.toggle("sticky");
      navbar_container.classList.toggle("active");
   
   }
   var loading = document.getElementsByClassName("loading");
//for fixed 
document.addEventListener("scroll",()=>{

navbar_container.classList.toggle("sticky",window.scrollY > 0);
if(window.scrollY == 0){
   navbar_container.classList.remove("hide");
}
if(window.scrollY > 1380 || window.scrollY < 2000){
   for(let i=0; i<loading.length; i++){
      let text = loading[i].innerText;
      loading[i].style.width = text;


   }
  
}
});
document.onclick = ()=>{
   if(window.scrollY > 0){
      navbar_container.classList.add("sticky");
      navbar_container.classList.toggle("hide");
   }
  
}

function navbarchange(){
   // alert("rtes")
   // let navbar = document.getElementById("navbar_items");

   let navbar_container = document.getElementById("navbar");
  
   
   navbar_container.classList.remove("active");
   navbar.classList.remove("active");
}
