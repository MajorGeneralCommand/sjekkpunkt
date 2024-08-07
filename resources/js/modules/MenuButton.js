class MenuButton {
    constructor() {
        this.listen()
    }
    listen() {
        const menuButton = document.querySelector("#menu-button")
        const mainNav = document.querySelector("#main-nav")
        const mainHeader = document.querySelector("#main-header")
        const mainHeaderSearch = document.querySelector("#main-header-search")
        const mainHeaderServices = document.querySelector("#main-header-services")
        const menuBurger = document.querySelector("#menu-burger")
        menuButton.addEventListener("click", (ev) => {
            // Meny skal vises
            mainNav.classList.toggle("main-nav--open")
            // Header skal få hvit bakgrunn
            mainHeader.classList.toggle("main-header--menu-open")
            // Burger skal bli til kryss
            // Skjul "våre tjenester"-knapp
            mainHeaderServices.classList.toggle("main-header--closed")
            // Vis søkefelt
            mainHeaderSearch.classList.toggle("main-header__search--open")
            menuBurger.classList.toggle("menu-burger--open")
        })
    }
}

export default MenuButton;
