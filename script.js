const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar-nav");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item");

    burger.addEventListener("click",()=>{

        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
    }
    navSlide();