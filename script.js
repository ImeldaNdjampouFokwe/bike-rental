document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi classique du formulaire
    
    // Récupérer les valeurs saisies
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let service = document.getElementById("service").value;
    let specialiste = document.getElementById("specialiste").value;
    let heure = document.getElementById("heure").value;

    // Sauvegarder dans localStorage
    localStorage.setItem("nom", nom);
    localStorage.setItem("email", email);
    localStorage.setItem("date", date);
    localStorage.setItem("service", service);
    localStorage.setItem("specialiste", specialiste);
    localStorage.setItem("heure", heure);

    // Rediriger vers la page de confirmation
    window.location.href = "confirmation.html";
});


document.addEventListener("DOMContentLoaded", function() {
    // Charger les informations enregistrées
    document.getElementById("confirmNom").textContent = localStorage.getItem("nom") || "Non spécifié";
    document.getElementById("confirmEmail").textContent = localStorage.getItem("email") || "Non spécifié";
    document.getElementById("confirmDate").textContent = localStorage.getItem("date") || "Non spécifié";
    document.getElementById("confirmService").textContent = localStorage.getItem("service") || "Non spécifié";
    document.getElementById("confirmSpecialiste").textContent = localStorage.getItem("specialiste") || "Non spécifié";
    document.getElementById("confirmHeure").textContent = localStorage.getItem("heure") || "Non spécifié";
});


document.addEventListener("DOMContentLoaded", function() {
    // Charger les informations enregistrées
    document.getElementById("confirmNom").textContent = localStorage.getItem("nom") || "Non spécifié";
    document.getElementById("confirmEmail").textContent = localStorage.getItem("email") || "Non spécifié";
    document.getElementById("confirmDate").textContent = localStorage.getItem("date") || "Non spécifié";
    document.getElementById("confirmService").textContent = localStorage.getItem("service") || "Non spécifié";
    document.getElementById("confirmSpecialiste").textContent = localStorage.getItem("specialiste") || "Non spécifié";
    document.getElementById("confirmHeure").textContent = localStorage.getItem("heure") || "Non spécifié";
});

