// ===============================
// CONFIGURATION
// ===============================
// Remplace uniquement cette valeur par l'ID APPLICATION de ton bot Discord.
// Exemple : "123456789012345678"
const BOT_CLIENT_ID = "REMPLACE_PAR_TON_CLIENT_ID";

const inviteUrl =
  `https://discord.com/oauth2/authorize?client_id=${encodeURIComponent(BOT_CLIENT_ID)}&permissions=8&integration_type=0&scope=bot%20applications.commands`;

document.querySelectorAll("[data-invite]").forEach((link) => {
  link.href = inviteUrl;

  link.addEventListener("click", (event) => {
    if (BOT_CLIENT_ID === "REMPLACE_PAR_TON_CLIENT_ID") {
      event.preventDefault();
      alert("Configure d'abord BOT_CLIENT_ID dans script.js avec l'ID de ton application Discord.");
    }
  });
});
