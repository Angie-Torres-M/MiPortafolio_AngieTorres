// i18n.js
const DEFAULT_LANG = "es";

function getNestedTranslation(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function applyLanguage(lang) {
  if (!translations?.[lang]) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const translation = getNestedTranslation(translations[lang], key);

    if (translation !== undefined && translation !== null) {
      el.innerHTML = translation;
    }
  });

  localStorage.setItem("lang", lang);

  // actualiza texto del botón ES/EN (opcional)
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "es" ? "ES / EN" : "EN / ES";
}

function initLanguage() {
  const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
  applyLanguage(savedLang);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = localStorage.getItem("lang") || DEFAULT_LANG;
      const next = current === "es" ? "en" : "es";
      applyLanguage(next);
    });
  }
}

// OJO: NO vuelvas a llamar applyLanguage(DEFAULT_LANG) fuera de aquí
document.addEventListener("DOMContentLoaded", initLanguage);


// si existe updateThemeToggleText (main.js), re-sincroniza texto del botón tema
if (typeof updateThemeToggleText === "function") {
  const theme = document.documentElement.getAttribute("data-bs-theme") || "light";
  updateThemeToggleText(theme);
}
