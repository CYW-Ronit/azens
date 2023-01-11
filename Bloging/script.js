var n = 1;
var menu = document.getElementById('menu');

function toggleMenu(){

         if(n==0){
            menu.style.transform = "translateX(-300px)";
            menu.style.boxShadow = "none";
            n++;
         }

         else{
            menu.style.transform = "translateX(0px)";
            menu.style.boxShadow = "10px 5px 20px rgba(10,10,10,0.3)";
            n--;
         }
         
}