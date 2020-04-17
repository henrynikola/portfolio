/*-----EXPERIENCE PRO ACCORDEON*/

let myButton = document.querySelectorAll('.pro_dropdown');
//je récupère l'array de boutons dont j'ai besoin pour cliquer

myButton.forEach(element => { //pour chaque bouton...
    element.addEventListener("click", ev=> { //pour chaque bouton cliqué...

        let button = ev.target //le bouton cliqué
        let title = ev.target.parentNode //le parent direct du bouton
        let details = title.nextElementSibling //le frère direct de title

        details.classList.toggle('hidden') //masquer ou afficher details
        button.classList.toggle('rotate') //faire tourner le bouton
    })
});

/*-----DROPDOWN NAV-----*/

let myNav = document.querySelector('.nav_links') //la barre de nav
console.log(myNav)
let myAboutLink = myNav.querySelector('li:nth-of-type(2)') //le li avec dropdown
console.log(myAboutLink)
let myDropdown = myAboutLink.querySelector('.dropdown_menu') //le dropdown menu
console.log(myDropdown)

myAboutLink.addEventListener("mouseenter", e=>{
    console.log(e.target)
    myDropdown.classList.remove('hidden')
})
myAboutLink.addEventListener("mouseleave", ev=>{
    myDropdown.classList.add('hidden')
})
