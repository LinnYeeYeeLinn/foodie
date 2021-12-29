let menuBar = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");
let darkMode = document.querySelector(".moon");
let element = document.body;
darkMode.addEventListener("click", () => {
    element.classList.toggle("dark-mode");
    if(darkMode.classList.contains('isOpened')){
        darkMode.classList.remove('isOpened');
        darkMode.classList.replace('fa-sun', 'fa-moon');
    }else{
        darkMode.classList.add('isOpened');
        darkMode.classList.replace('fa-moon', 'fa-sun');
    }
})

$(document).ready(function(){
    $("a").click(function(){
        $("a").removeClass("active");
        $(this).addClass("active");
    })
})

menuBar.onclick = () => {
    menuBar.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
window.onscroll = () => {
    menuBar.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 60){
        document.querySelector("#scrollTop").classList.add('active');
    }else{
        document.querySelector("#scrollTop").classList.remove("active");
    }
}
function loader(){
    document.querySelector('.loaderContainer').classList.add('fadeOut');
}
function fadeOut(){
    setInterval(loader, 3000);
}
window.onload = fadeOut();
