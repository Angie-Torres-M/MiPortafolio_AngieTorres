// i18n.js
const DEFAULT_LANG = "es";

function getNestedTranslation(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

// Exponemos applyLanguage para que main.js pueda llamarlo tras inyectar header/footer
function applyLanguage(lang) {
  if (!translations?.[lang]) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const translation = getNestedTranslation(translations[lang], key);

    // OJO: si tu traducción es "", también la aplicamos
    if (translation !== undefined && translation !== null) {
      el.innerHTML = translation;
    }
  });

  localStorage.setItem("lang", lang);

  // Actualiza etiqueta del botón (si existe)
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "es" ? "ES / EN" : "EN / ES";
}

// Conecta el botón de idioma (y evita listeners duplicados)
function bindLangToggle() {
  const toggleBtn = document.getElementById("lang-toggle");
  if (!toggleBtn) return;

  if (toggleBtn.dataset.bound === "true") return;

  toggleBtn.addEventListener("click", () => {
    const current = localStorage.getItem("lang") || DEFAULT_LANG;
    const next = current === "es" ? "en" : "es";
    applyLanguage(next);
  });

  toggleBtn.dataset.bound = "true";
}

// Inicializa idioma + conecta botón
function initLanguage() {
  const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
  applyLanguage(savedLang);
  bindLangToggle();
}

// ✅ Para que main.js pueda llamar esto tras inyectar header/footer
window.applyLanguage = applyLanguage;
window.initLanguage = initLanguage;
window.bindLangToggle = bindLangToggle;

// 1) Primera carga normal
document.addEventListener("DOMContentLoaded", initLanguage);

// 2) Si main.js dispara un refresh, re-conectamos botón y re-aplicamos idioma
document.addEventListener("i18n:refresh", (e) => {
  const lang = e?.detail?.lang || localStorage.getItem("lang") || DEFAULT_LANG;
  applyLanguage(lang);
  bindLangToggle();
});
