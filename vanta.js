// =======================
// j'ai pensé a une fonction js qui gere ca pour eviter de dupliquer le code
// =======================
function appliquerEffetVanta(selecteurs) {
    const effets = []; // Pour stocker les instances créées

    window.addEventListener('DOMContentLoaded', () => {
        selecteurs.forEach(sel => {
            const element = document.querySelector(sel);
            if (!element) return; // si le sélecteur n'existe pas, on ignore

            const effet = VANTA.NET({
                el: sel,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x212687,           // Bleu tech
                backgroundColor: 0x070043, // Fond sombre
                points: 20.00,
                maxDistance: 40.00,
                spacing: 20.00
            });

            effets.push(effet);
        });
    });

    // Nettoyage avant de quitter la page
    window.addEventListener('beforeunload', () => {
        effets.forEach(effet => effet.destroy());
    });
}

// =======================
// ici le tableau des sélecteurs à appliquer
// =======================
appliquerEffetVanta([
    ".collaboration-section",
    ".projects-hero",
    ".cta",
    ".hero",

]);



// Animation pour les cartes de projet
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });

    // Gestion des boutons d'action
    const actionButtons = document.querySelectorAll('.project-actions .btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectTitle = this.closest('.project-card').querySelector('h3').textContent;
            alert(`Action déclenchée pour : ${projectTitle}`);
        });
    });
});



function contact() {
    const contactSection = document.querySelector('.contact-section');
    contactSection.style.display = contactSection.style.display === 'none' ? 'block' : 'none';
}