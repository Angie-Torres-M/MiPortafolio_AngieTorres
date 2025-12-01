// ======================================================
// main.js - Lógica global del portafolio
// Angie del futuro:
// - Inyecta header.html y footer.html
// - Controla tema claro/oscuro (desktop + móvil)
// - Maneja "Ver más / Ver menos"
// - Activa menú hamburguesa en móvil
// ======================================================


// ==============================
// 0. Inicialización global
// ==============================
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM listo");

  // 1) Inyectar header y footer primero (así los elementos existen en el DOM)
  await includeHTML("#site-header", "./header.html");
  await includeHTML("#site-footer", "./footer.html");
  console.log("Header y footer cargados");

  // 2) Ahora que header/footer YA existen:
  initTheme();         // aplicar tema guardado
  initThemeButtons();  // conectar botones (desktop + móvil)
  initHeader();        // activar menú hamburguesa en móvil
  initVerMasButtons(); // botones "Ver más / Ver menos"
});

// ==============================
// 1. Incluir fragmentos HTML (header y footer)
// ==============================
async function includeHTML(selector, url) {
  const host = document.querySelector(selector);
  if (!host) return;

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    console.error(`No se pudo cargar ${url}`);
    return;
  }

  host.innerHTML = await res.text();
}


// ==============================
// 2. Tema claro / oscuro
// ==============================

// Aplica el tema guardado o "light" por defecto
function initTheme() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("preferredTheme");
  const currentTheme = savedTheme || "light";

  root.setAttribute("data-bs-theme", currentTheme);
  updateThemeToggleText(currentTheme);
}

// Actualiza icono y texto de TODOS los botones de tema
function updateThemeToggleText(theme) {
  // Botón de desktop (hero) y botón de móvil (header)
  const buttons = document.querySelectorAll("#theme-toggle, #theme-toggle-mobile");

  buttons.forEach((toggleBtn) => {
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector("i");
    const textSpan = toggleBtn.querySelector("span"); // solo existe en desktop

    if (!icon) return;

    if (theme === "dark") {
      // icono sol
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      if (textSpan) textSpan.textContent = "Modo claro";
    } else {
      // icono luna
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      if (textSpan) textSpan.textContent = "Modo oscuro";
    }
  });
}

// Alterna tema y actualiza todos los botones
function toggleTheme() {
  const root = document.documentElement;
  const current = root.getAttribute("data-bs-theme") || "light";
  const next = current === "light" ? "dark" : "light";

  root.setAttribute("data-bs-theme", next);
  localStorage.setItem("preferredTheme", next);
  updateThemeToggleText(next);
}

// Conectar listeners a los botones de tema
function initThemeButtons() {
  const btnDesktop = document.getElementById("theme-toggle");          // hero
  const btnMobile  = document.getElementById("theme-toggle-mobile");   // header

  if (btnDesktop) btnDesktop.addEventListener("click", toggleTheme);
  if (btnMobile)  btnMobile.addEventListener("click", toggleTheme);
}


// ==============================
// Header: SOLO menú hamburguesa
// ==============================
function initHeader() {
  const toggle = document.getElementById("navToggle");
  const menu   = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
}


// ==============================
// 4. Ver más / Ver menos
// ==============================
function initVerMasButtons() {
  const buttons = document.querySelectorAll('[data-toggle="ver-mas"]');

  buttons.forEach((btn) => {
    const targetId = btn.getAttribute("data-target");
    const target = document.getElementById(targetId);
    if (!target) return;

    btn.addEventListener("click", () => {
      const isHidden = target.classList.contains("d-none");

      if (isHidden) {
        target.classList.remove("d-none");
        btn.textContent = "Ver menos";
      } else {
        target.classList.add("d-none");
        // Si el botón originalmente decía "Leer más", respetamos eso
        btn.textContent = btn.textContent.toLowerCase().includes("leer")
          ? "Leer más"
          : "Ver más";
      }
    });
  });
}
// AJUSTA este valor según la altura real de tu header fijo
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-fijo");
  const main = document.querySelector("main");

  if (header && main) {
    const headerHeight = header.offsetHeight;
    main.style.marginTop = headerHeight + "px";
  }
});


