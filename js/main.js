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