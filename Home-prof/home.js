let btn=document.querySelector(".view-mode");
let css_mode=document.querySelector("#css-style");
let mode_icon=document.querySelector("#mode");
const navbar = document.querySelector(".hamburger");
const list = document.querySelectorAll(".Nevigation-action-title");
const list1 = document.querySelector(".Nevigation-action-title");
const list_set = document.querySelector(".Nevigation-panal");
const list_set1 = document.querySelector(".Nevigation-panal div");
css="flex-direction:column;float:right;position:absolute;top:3rem;right:-1rem;width:25%;margine:5rem 0rem 0rem 0rem;text-align:center;padding:0rem 0rem;border-radius:1rem;";
// btn.addEventListener('click',()=>{
//     if(css_mode.getAttribute("href")=="lightMode.css"){
//         css_mode.setAttribute("href","darkMode.css")
//         mode_icon.setAttribute('src','light-mode.png')
//         return;
//     }
//     if(css_mode.getAttribute("href")=="darkMode.css"){
//         css_mode.setAttribute("href","lightMode.css");
//         mode_icon.setAttribute('src','dark-mode.png')
//         return;
//     }
// })
navbar.addEventListener("click", () => {
    if(window.getComputedStyle(list1).display=="none"){
    console.log();
    list.forEach(item => {
        item.setAttribute("style","display:inline;");
    });
        
    list_set.setAttribute("style",css);
    list_set1.setAttribute("style","text-align:right;margin:0rem 0rem 2rem 0rem;");
    navbar.innerText="✖";
}
else{
    list.forEach(item => {
        item.setAttribute("style","display:none;");
    });
    list_set.setAttribute("style","flex-direction:row;position:static;");
    list_set1.setAttribute("style","margin:0rem;background-color:transparent;border:none;");
    navbar.innerText="☰";
}
});