// ==========================================
// KTR/IA — CONFIGURATION DU SITE
// ==========================================

// ID de l'application Discord KTR/IA
const BOT_CLIENT_ID = "1551628175421870091";

// ==========================================
// LIEN D'AJOUT DU BOT
// ==========================================

const INVITE_URL =
    `https://discord.com/oauth2/authorize?client_id=${BOT_CLIENT_ID}&permissions=8&integration_type=0&scope=bot%20applications.commands`;


// ==========================================
// BOUTONS "AJOUTER À DISCORD"
// ==========================================

document.querySelectorAll("[data-invite]").forEach((link) => {

    link.href = INVITE_URL;

    link.addEventListener("click", (event) => {

        if (!BOT_CLIENT_ID || BOT_CLIENT_ID === "REMPLACE_PAR_TON_CLIENT_ID") {
            event.preventDefault();

            alert(
                "❌ L'ID de KTR/IA n'est pas configuré."
            );

            return;
        }

        // Ouvre le lien Discord
        // dans le même onglet
        window.location.href = INVITE_URL;
    });

});


// ==========================================
// ANIMATION DES CARTES
// ==========================================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-6px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});


// ==========================================
// APPARITION DES ÉLÉMENTS AU SCROLL
// ==========================================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


// Éléments à observer
document
    .querySelectorAll(
        ".section, .card, .terminal, .command-list, .cta"
    )
    .forEach((element) => {

        element.classList.add("scroll-hidden");

        observer.observe(element);

    });


// ==========================================
// SCROLL FLUIDE
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ==========================================
// EFFET TERMINAL
// ==========================================

const cursor = document.querySelector(".cursor");

if (cursor) {

    setInterval(() => {

        cursor.style.opacity =
            cursor.style.opacity === "0"
                ? "1"
                : "0";

    }, 550);

}


// ==========================================
// ANNÉE AUTOMATIQUE DANS LE FOOTER
// ==========================================

const yearElement =
    document.querySelector("[data-year]");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ==========================================
// CONSOLE
// ==========================================

console.log(
    "%cKTR/IA 🤖",
    "font-size:25px;font-weight:bold;"
);

console.log(
    "%cTon bot Discord IA est bien chargé.",
    "font-size:14px;"
);

console.log(
    "🚀 Installation :",
    INVITE_URL
);
