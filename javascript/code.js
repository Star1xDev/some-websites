// nav toggle

const nav_toggle = document.querySelector(".nav-toggle");
const nav_hidden = document.querySelector(".nav-hidden");
const nav_ul = document.querySelector(".nav-hidden ul");

nav_toggle.addEventListener("click", () => {
    let height = nav_ul.getBoundingClientRect().height + "px";
    let nav_height =  getComputedStyle(nav_hidden).height;

    if(nav_height !== height){
      nav_hidden.style.height = height;
    }else{
      nav_hidden.style.height = "";
    }
})

// // // // // // // //

