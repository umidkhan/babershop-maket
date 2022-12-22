let openNav = document.querySelector('.openNavBtn');
let navLink = document.querySelector('.openedNavLinks');

openNav.addEventListener("click", OpenNav)
function OpenNav() {
    console.log('Nav opened');
    navLink.style.marginTop = "62px"
    navLink.style.transition = "2s"
}
openNav.addEventListener("click", OpenNav)
function CloseNav() {
    console.log('Nav closed');
    navLink.style.marginTop = "-62px"
    navLink.style.transition = "2s"
}

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