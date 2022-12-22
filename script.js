let openNav = document.querySelector('.openNavBtn');
let navLink = document.querySelector('.openedNavLinks');

function OpenNav() {
    openNav.addEventListener("click", (e) => {
    console.log('Nav opened');
    openNav.style.borderColor = "blue"
    navLink.style.marginTop = "62px"
    navLink.style.transition = "2s"
})
}
OpenNav()

// openNav.addEventListener("click", (e) => {
//     // OpenNav.preventDefault()
//     console.log('Nav closed');
//     openNav.style.borderColor = "blue"
//     navLink.style.marginTop = "-100px"
//     navLink.style.transition = "2s"
// })

/* openNav.addEventListener("mouseleave", () => {
    openNav.style.border = "none"
}) */