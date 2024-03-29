document.addEventListener('DOMContentLoaded', function () {
    const articleBtn = document.getElementById('btnArticle');
    const videoBtn = document.getElementById('btnVideo');
    const temoignageBtn = document.getElementById('btnTemoignages');

    const cards = document.querySelectorAll('.card');


    // Ajouter des écouteurs d'événements aux boutons de catégorie
    articleBtn.addEventListener('click', () => {
        filterCardsByCategory('article');
    });
    videoBtn.addEventListener('click', () => {
        filterCardsByCategory('video');
    });
    temoignageBtn.addEventListener('click', () => {
        filterCardsByCategory('temoignage');
    });

    // Fonction pour afficher toutes les cartes
    function showAllCards() {
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }

    // Fonction pour filtrer les cartes par catégorie
    function filterCardsByCategory(category) {
        showAllCards(); // Réinitialiser l'affichage
        cards.forEach(card => {
            if (!card.classList.contains(category)) {
                card.style.display = 'none';
                changeColor(category)
            }
        });
    }

    function changeColor(category){
        if (category == 'article'){
            articleBtn.style.backgroundColor = "#373CD7";
            articleBtn.style.color = "white";
            videoBtn.style.backgroundColor = "white";
            videoBtn.style.color = "black";
            temoignageBtn.style.backgroundColor = "white";
            temoignageBtn.style.color = "black";
        } else if(category == 'video'){
            articleBtn.style.backgroundColor = "white";
            articleBtn.style.color = "black";
            videoBtn.style.backgroundColor = "#373CD7";
            videoBtn.style.color = "white";
            temoignageBtn.style.backgroundColor = "white";
            temoignageBtn.style.color = "black";
        } else{
            articleBtn.style.backgroundColor = "white";
            articleBtn.style.color = "black";
            videoBtn.style.backgroundColor = "white";
            videoBtn.style.color = "black";
            temoignageBtn.style.backgroundColor = "#373CD7";
            temoignageBtn.style.color = "white";
        }
    }

});
