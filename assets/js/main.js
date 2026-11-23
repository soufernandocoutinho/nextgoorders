/* Documentação: comportamento e interações da página. */

document.getElementById("anoAtual").textContent = new Date().getFullYear();
// Evento simples para facilitar integração futura com GA4/GTM.
document.querySelectorAll("[data-cta]").forEach(function (button) {
  button.addEventListener("click", function () {
    if (typeof window.gtag === "function") {
      window.dataLayer.push({
        event: "cta_click",
        cta_location: button.dataset.cta,
        cta_text: button.textContent.trim(),
      });
      gtag("event", "cta_click", {
        cta_location: button.dataset.cta,
        cta_text: button.textContent.trim(),
      });
    }
  });
});
