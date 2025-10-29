// =======================
// j'ai pensé a une fonction js qui gere ca pour eviter de dupliquer le code
// =======================
function appliquerEffetVanta(selecteurs) {
  const effets = []; // Pour stocker les instances créées

  window.addEventListener("DOMContentLoaded", () => {
    selecteurs.forEach((sel) => {
      const element = document.querySelector(sel);
      if (!element) return; // si le sélecteur n'existe pas, on ignore

      const effet = VANTA.NET({
        el: sel,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x212687, // Bleu tech
        backgroundColor: 0x070043, // Fond sombre
        points: 20.0,
        maxDistance: 40.0,
        spacing: 20.0,
      });

      effets.push(effet);
    });
  });

  // Nettoyage avant de quitter la page
  window.addEventListener("beforeunload", () => {
    effets.forEach((effet) => effet.destroy());
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
  ".header",
]);

// Animation pour les cartes de projet
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("fade-in");
  });

  // Gestion des boutons d'action
  const actionButtons = document.querySelectorAll(".project-actions .btn");
  actionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const projectTitle =
        this.closest(".project-card").querySelector("h3").textContent;
      alert(`Action déclenchée pour : ${projectTitle}`);
    });
  });
});

function contact() {
  const contactSection = document.querySelector(".contact-section");
  contactSection.style.display =
    contactSection.style.display === "none" ? "block" : "none";
}

// Effet d'apparition progressive des articles
const articles = document.querySelectorAll(".article");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // éviter de répéter l'effet
      }
    });
  },
  { threshold: 0.2 }
);

articles.forEach((article) => observer.observe(article));



        // Logique JavaScript pour le défilement du carrousel avec les boutons
        const track = document.getElementById('teamCarousel').querySelector('.team-carousel-track');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const cardWidth = 300 + 32; // Largeur de la carte + gap de 2rem (32px)

        // Fonction de défilement pour les boutons
        function scrollCarousel(direction) {
            const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
            track.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }

        // Ajout des écouteurs d'événements
        if (prevBtn) {
            prevBtn.addEventListener('click', () => scrollCarousel('prev'));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => scrollCarousel('next'));
        }

        // Masquer/Afficher les boutons si le carrousel est tout à fait au début ou à la fin (pour une meilleure UX)
        function checkScrollPosition() {
            if (prevBtn) {
                prevBtn.style.opacity = track.scrollLeft > 0 ? '1' : '0';
                prevBtn.style.pointerEvents = track.scrollLeft > 0 ? 'auto' : 'none';
            }
            if (nextBtn) {
                const maxScroll = track.scrollWidth - track.clientWidth;
                nextBtn.style.opacity = track.scrollLeft < maxScroll - 5 ? '1' : '0';
                nextBtn.style.pointerEvents = track.scrollLeft < maxScroll - 5 ? 'auto' : 'none';
            }
        }

        // Vérifier au chargement et à chaque défilement
        window.onload = checkScrollPosition;
        track.addEventListener('scroll', checkScrollPosition);
        window.addEventListener('resize', checkScrollPosition);
        
        // Initialiser pour s'assurer que les boutons sont bien positionnés dès le départ
        if (typeof checkScrollPosition === 'function') {
            checkScrollPosition();
        }
