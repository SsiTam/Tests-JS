<script>
    // Sélection des éléments HTML
    const bouton = document.getElementById("changerBtn");
    const titre = document.getElementById("titre");

    // Fonction à exécuter au clic
    function changerTexte() {
      titre.textContent = "Tu as cliqué sur le bouton !";
    }

    // Attacher la fonction au clic du bouton
    bouton.addEventListener("click", changerTexte);
  </script>
