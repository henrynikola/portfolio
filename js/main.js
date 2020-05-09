/*-----GO TOP BUTTON-----*/

let myTop = document.querySelector('.top')
console.log(myTop)

window.addEventListener('scroll', e=> {
    let myScroll = window.scrollY
    //console.log(myScroll)
    if (myScroll >= 2000) {
        myTop.classList.remove('hidden')
    } else {
        myTop.classList.add('hidden')
    }
  })

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


/*-----MOBILE NAV-----*/

let burgerIcon = document.querySelector('.burger-icon')
let largeur = window.outerWidth
console.log(largeur)
let body = document.querySelector('body')


if (largeur <= 360) {
    myNav.classList.add('hidden')
    myDropdown.classList.remove('hidden')
}

burgerIcon.addEventListener("touchend", e=> { //quand je touche la burger icon
    myNav.classList.toggle('hidden') //je toggle la visibilité de la nav
    burgerIcon.classList.toggle('cross') //je toggle l'animation sur la burger icon
    body.classList.toggle('noscroll') //je toggle le scroll sur le body
    e.preventDefault()
})


/*-----HOVER WORKS-----*/

let myWorks = document.querySelector('.my_works')
let projet = myWorks.querySelectorAll('.projet')

projet.forEach(element => {
    element.addEventListener("mouseenter", e=>{
        let thumbnail = element.querySelector('.thumbnail')
        thumbnail.classList.remove('hidden')
    })
    element.addEventListener("mouseleave", e=>{
        let thumbnail = element.querySelector('.thumbnail')
        thumbnail.classList.add('hidden')
    })
});


