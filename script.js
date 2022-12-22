let openNav = document.querySelector('.openNavBtn');
let navLink = document.querySelector('.navLinks');

openNav.addEventListener("click", (e) => {
    console.log('Nav opened');
    openNav.style.borderColor = "blue"
    openNav.style.border = "solid"
    navLink.style.display = "block"
})

/* openNav.addEventListener("mouseleave", () => {
    openNav.style.border = "none"
}) */