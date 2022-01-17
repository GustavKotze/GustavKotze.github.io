/* scrol animation */
window.addEventListener("scroll", () => {
      document.body.style.setProperty
      ("--scroll",window.pageYOffset / (document.body.offsetHeight - window.innerHeight));},false);
 
/* burgermenu*/

function openMenu() {
      const toggle = document.getElementById("toggle");
      const cross = document.getElementById("crossMain");
      const burger = document.getElementById("burgerMain");
      const cross1 = document.getElementById("cross1");
      const cross2 = document.getElementById("cross2");
      const color = document.getElementById("topnav");
      if( toggle.checked == 0){
        cross.style.display = "block";
        burger.style.display = "none";
        cross1.classList.add("cross1");
        cross2.classList.add("cross2");
        cross1.classList.remove("crossreverse1");
        cross2.classList.remove("crossreverse2");
        color.style.backgroundColor = "rgba(0,0,0,0.8)";
      } else {
        cross.style.display = "none";
        burger.style.display = "block";
        cross1.classList.add("crossreverse1");
        cross2.classList.add("crossreverse2");
        cross1.classList.remove("cross1");
        cross2.classList.remove("cross2");
        color.style.backgroundColor = "transparent";
      }
      
    }
function closeMenu() {
  const toggle = document.getElementById("toggle").checked = 1;
  const cross = document.getElementById("crossMain");
  const burger = document.getElementById("burgerMain");
  const cross1 = document.getElementById("cross1");
  const cross2 = document.getElementById("cross2");
  const color = document.getElementById("topnav");
      cross.style.display = "none";
      burger.style.display = "block";
      cross1.classList.add("crossreverse1");
      cross2.classList.add("crossreverse2");
      cross1.classList.remove("cross1");
      cross2.classList.remove("cross2");
      color.style.backgroundColor = "transparent";
    }
       
/*mobile message*/

function mobileAlert() {
  const but = document.getElementById("continue");
  const mobileDiv = document.getElementById("mobile");
  if(mobileDiv.style.display == "flex") {
    mobileDiv.style.display = "none";
  } else {
  mobileDiv.style.display = "flex";
}
}
