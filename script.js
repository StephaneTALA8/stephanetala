// Script simple pour des interactions (ex. : alerte lors de l'ajout au panier)
document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.snipcart-add-item');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Produit ajouté au panier ! Cliquez sur le bouton Panier pour voir.');
        });
    });
});