const navbar = document.getElementById("hamburger");
const navlist = document.getElementById("wrapper");
const sidebar = document.querySelector(".sidebar");

navbar.addEventListener("click", function () {
    navbar.classList.toggle("is-active");
    navlist.classList.toggle("nav-active");
    sidebar.classList.toggle("sidebar-active");
    console.log("ok");
});
