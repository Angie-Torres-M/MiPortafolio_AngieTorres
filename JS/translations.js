// translations.js
window.translations = {
  es: {
    nav: {
      about: "Acerca de mí",
      skills: "Habilidades",
      projects: "Proyectos",
      cv: "Resumen",
      blog: "Blog",
    },

    theme: {
      dark: "Modo oscuro",
      light: "Modo claro",
    },

    hero: {
      kicker: "Portafolio · Web Design & Frontend (HTML/CSS/Bootstrap/JS)",
      title: 'Hola, soy <span class="text-accent">Angie Torres</span>',
      description:
        "Me especializo en diseño web y desarrollo frontend, enfocada en crear interfaces limpias, responsivas y accesibles. Disfruto convertir ideas en experiencias claras para el usuario, con atención al detalle visual y un mantenimiento de código cuidadoso.",
      bullets: {
        ui: "UI responsive con Bootstrap (mobile-first)",
        components: "Maquetación y componentes reutilizables",
        js: "Integración con JavaScript (DOM, fetch)",
        git: "Trabajo colaborativo con Git/GitHub y despliegues en GitHub Pages",
      },
      buttons: {
        projects: "Ver proyectos",
        cv: "Ver CV",
        blog: "Blog / Reflexiones",
      },
      contactLabel: "Contacto:",
    },

    about: {
      title: "Acerca de mí",
      p1:
        "Soy desarrolladora web con formación Full Stack y una base sólida en frontend y diseño de interfaces. Me enfoco en construir experiencias claras y consistentes, con componentes reutilizables, buena jerarquía visual y un enfoque mobile-first.",
      p2:
        "He trabajado con HTML, CSS, Bootstrap, JavaScript y React, además de Git/GitHub. Busco seguir creciendo como Web Designer y Frontend Developer, fortaleciendo UI/UX, accesibilidad y buenas prácticas de implementación, con una visión integral del desarrollo web.",
      cards: {
        role: { label: "Rol principal", value: "Web Designer / Frontend Developer" },
        focus: { label: "Enfoques", value: "UI, responsive, accesibilidad" },
        interests: { label: "Intereses", value: "Design systems, UX/UI, performance" },
        fun: { label: "Fun fact", value: "Dog-mom de mi perrito Chewbacca" },
      },
    },

    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y habilidades que utilizo en mis proyectos.",
      cards: {
        frontend: { title: "Frontend", desc: "HTML | CSS | Bootstrap | JS | React", badge: "Responsive & UI" },
        design: { title: "Web Design", desc: "Layouts | Componentes | Tipografía", badge: "Jerarquía visual" },
        backend: { title: "Backend (base)", desc: "Java | C# | POO", badge: "Buenas prácticas" },
        tools: { title: "Tools", desc: "Git/GitHub | GitHub Pages", badge: "Trabajo en equipo" },
      },
    },

    labels: {
      role: "Rol:",
      tech: "Tecnologías:",
      challenges: "Desafíos:",
      learn: "Aprendizajes clave:",
    },

    buttons: {
      more: "Ver más",
      less: "Ver menos",
      github: "Código en GitHub",
      demo: "Ver demo",
    },

    projects: {
      title: "Proyectos",
      subtitle: "Selección de proyectos enfocados en Web Design, frontend e integración con JavaScript.",

      funontrip: {
        title: "FunOnTrip – E-commerce de viajes",
        badge: "Equipo · Web",
        p1: "Plataforma para explorar paquetes de viaje, con UI responsive y componentes reutilizables.",
        role: "UI frontend (Bootstrap), responsive y documentación.",
        tech: "HTML, CSS, Bootstrap, JavaScript, Git/GitHub.",
        challenges: "coordinación del equipo, manejo de ramas en Git e integración de vistas.",
        learn: "flujo de trabajo en equipo, consistencia visual y mantenimiento de UI.",
      },

      maiz: {
        title: "Maíz Fundido – Landing de marca",
        badge: "Freelance · Web",
        p1: "Landing page para marca de impresión 3D, enfocada en presentación de productos y contacto.",
        role: "Diseño UI, maquetado y estilos responsive.",
        tech: "HTML, CSS, Bootstrap, GitHub Pages.",
        challenges: "identidad visual coherente y jerarquía clara de secciones.",
        learn: "diseño centrado en el usuario, layout limpio y optimización móvil.",
      },

      peach: {
        title: "PEACH",
        badge: "Personal · Frontend",
        p1: "Aplicación web sencilla para convertir escalas de temperatura con interfaz clara.",
        role: "UI básica y lógica de conversión.",
        tech: "HTML, CSS, JavaScript.",
        learn: "eventos en JS, validación simple y despliegue en GitHub Pages.",
      },

      fakestore: {
        title: "FakeStore API – Productos con fetch()",
        badge: "Académico · Frontend",
        p1: 'Sitio web que obtiene productos desde la API pública FakeStore usando <code>fetch()</code> y renderiza tarjetas dinámicas.',
        role: "Integración API, render dinámico y estilos con Bootstrap.",
        tech: "JavaScript, Fetch API, HTML, CSS, Bootstrap.",
        learn: "promesas, async/await, DOM y estructura por componentes con JS.",
      },
    },

    cv: {
      title: "Resumen",
      subtitle: "Formación y habilidades enfocadas en frontend y web design.",

      education: {
        title: "Formación",
        items: {
          bootcamp: {
            title: "Bootcamp Full Stack Java",
            meta: "Generation México · 2025",
            desc: "Full Stack con Java + desarrollo web (HTML, CSS, JS). Git/GitHub y trabajo en equipo.",
          },
          webcourse: {
            title: "Curso de Desarrollo Web (Junior)",
            meta: "Mujer Digital · 2024",
            desc: "Frontend (HTML, CSS, Bootstrap, JavaScript) con proyectos web funcionales.",
          },
          python: { title: "Curso de Python · 2022", meta: "Conectadas by IYF" },
          masters: { title: "Maestría · UNAM", meta: "Formación académica previa (UNAM)" },
          bio: { title: "Biología · UNAM", meta: "Formación académica previa (UNAM)" },
        },
      },

      skills: {
        title: "Habilidades destacadas",
        blocks: {
          frontend: { title: "Frontend", mobile: "Mobile-first" },
          tools: { title: "Web & Tools" },
          power: {
            title: "Power skills",
            comm: "Comunicación empática",
            agile: "Colaboración ágil",
            docs: "Documentación técnica",
          },
        },
      },

      download: "Descargar CV en PDF",
    },

    blog: {
      title: "Blog",
      post1: {
        title: "De frontend a full stack: desarrollar software pensando en la experiencia",
        meta: "Reflexión profesional · 2025",
        p1:
          "Mi desarrollo profesional en tecnología ha sido un proceso de profundización y enfoque. Inicié como desarrolladora frontend, y al avanzar hacia una formación Full Stack comprendí el ciclo completo de una aplicación web, desde la lógica hasta la interfaz.",
        p2:
          "Durante este crecimiento técnico, identifiqué que mi mayor fortaleza y aportación se encontraba en el frontend y el diseño web, donde el desarrollo, la estructura y la experiencia del usuario convergen. Trabajé con HTML, CSS, Bootstrap y JavaScript en proyectos desplegados en GitHub Pages, aplicando principios de jerarquía visual, consistencia y diseño responsive.",
        p3:
          "Actualmente me posiciono como desarrolladora Full Stack con enfoque en frontend y web design, interesada en participar en equipos donde el desarrollo técnico y la experiencia del usuario se integran para construir productos claros, mantenibles y centrados en las personas.",
      },
    },


    footer: {
      title: "Contacto",
      p1: "¿Te gustaría colaborar o tienes alguna vacante que encaje con mi perfil?",
      emailLabel: "Escríbeme a:",
      cvBtn: "Ver CV",
      copyright: "© 2025 Angie Torres. Todos los derechos reservados. Ciudad de México",
    },
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      cv: "Summary",
      blog: "Blog",
    },

    theme: {
      dark: "Dark mode",
      light: "Light mode",
    },

    hero: {
      kicker: "PORTFOLIO · WEB DESIGN & FRONTEND (HTML/CSS/BOOTSTRAP/JS)",
      title: `Hi, I'm <span class="text-accent">Angie Torres</span>`,
      description:
        "I specialize in web design and frontend development, focused on building clean, responsive, and accessible interfaces. I enjoy turning ideas into clear user experiences, with strong visual attention and careful code maintenance.",
      bullets: {
        ui: "Responsive UI with Bootstrap (mobile-first)",
        components: "Layout and reusable components",
        js: "JavaScript integration (DOM, fetch)",
        git: "Collaborative Git/GitHub workflow and GitHub Pages deployments",
      },
      buttons: {
        projects: "View projects",
        cv: "View CV",
        blog: "Blog / Notes",
      },
      contactLabel: "Contact:",
    },

    about: {
      title: "About me",
      p1:
        "I’m a web developer with Full Stack training and a solid foundation in frontend and interface design. I focus on building clear and consistent experiences, using reusable components, strong visual hierarchy, and a mobile-first approach.",
      p2:
        "I’ve worked with HTML, CSS, Bootstrap, JavaScript, and React, as well as Git/GitHub. I’m looking to keep growing as a Web Designer and Frontend Developer, strengthening UI/UX, accessibility, and implementation best practices, with a well-rounded view of web development.",
      cards: {
        role: { label: "Main role", value: "Web Designer / Frontend Developer" },
        focus: { label: "Focus", value: "UI, responsive, accessibility" },
        interests: { label: "Interests", value: "Design systems, UX/UI, performance" },
        fun: { label: "Fun fact", value: "Dog mom to my pup Chewbacca" },
      },
    },

    skills: {
      title: "Skills",
      subtitle: "Technologies and skills I use in my projects.",
      cards: {
        frontend: { title: "Frontend", desc: "HTML | CSS | Bootstrap | JS | React", badge: "Responsive & UI" },
        design: { title: "Web Design", desc: "Layouts | Components | Typography", badge: "Visual hierarchy" },
        backend: { title: "Backend (foundation)", desc: "Java | C# | OOP", badge: "Best practices" },
        tools: { title: "Tools", desc: "Git/GitHub | GitHub Pages", badge: "Teamwork" },
      },
    },

    labels: {
      role: "Role:",
      tech: "Tech:",
      challenges: "Challenges:",
      learn: "Key learnings:",
    },

    buttons: {
      more: "Show more",
      less: "Show less",
      github: "View code",
      demo: "Live demo",
    },

    projects: {
      title: "Projects",
      subtitle: "A selection of projects focused on Web Design, frontend, and JavaScript integration.",

      funontrip: {
        title: "FunOnTrip – Travel e-commerce",
        badge: "Team · Web",
        p1: "Platform to explore travel packages, with responsive UI and reusable components.",
        role: "Frontend UI (Bootstrap), responsive implementation, and documentation.",
        tech: "HTML, CSS, Bootstrap, JavaScript, Git/GitHub.",
        challenges: "team coordination, Git branching, and view integration.",
        learn: "team workflow, visual consistency, and UI maintainability.",
      },

      maiz: {
        title: "Maíz Fundido – Brand landing page",
        badge: "Freelance · Web",
        p1: "Landing page for a 3D printing brand, focused on product showcase and contact.",
        role: "UI design, layout, and responsive styling.",
        tech: "HTML, CSS, Bootstrap, GitHub Pages.",
        challenges: "consistent visual identity and clear section hierarchy.",
        learn: "user-centered design, clean layout, and mobile optimization.",
      },

      peach: {
        title: "PEACH",
        badge: "Personal · Frontend",
        p1: "Simple web app to convert temperature scales with a clear interface.",
        role: "Basic UI and conversion logic.",
        tech: "HTML, CSS, JavaScript.",
        learn: "JS events, simple validation, and GitHub Pages deployment.",
      },

      fakestore: {
        title: "FakeStore API – Products with fetch()",
        badge: "Academic · Frontend",
        p1: 'Website that fetches products from the public FakeStore API using <code>fetch()</code> and renders dynamic cards.',
        role: "API integration, dynamic rendering, and Bootstrap styling.",
        tech: "JavaScript, Fetch API, HTML, CSS, Bootstrap.",
        learn: "promises, async/await, DOM, and a component-like JS structure.",
      },
    },

    cv: {
      title: "Summary",
      subtitle: "Training and skills focused on frontend and web design.",

      education: {
        title: "Education",
        items: {
          bootcamp: {
            title: "Full Stack Java Bootcamp",
            meta: "Generation Mexico · 2025",
            desc: "Full Stack with Java + web development (HTML, CSS, JS). Git/GitHub and teamwork.",
          },
          webcourse: {
            title: "Web Development Course (Junior)",
            meta: "Mujer Digital · 2024",
            desc: "Frontend (HTML, CSS, Bootstrap, JavaScript) with functional web projects.",
          },
          python: { title: "Python Course · 2022", meta: "Conectadas by IYF" },
          masters: { title: "Master’s · UNAM", meta: "Previous academic background (UNAM)" },
          bio: { title: "Biology · UNAM", meta: "Previous academic background (UNAM)" },
        },
      },

      skills: {
        title: "Key skills",
        blocks: {
          frontend: { title: "Frontend", mobile: "Mobile-first" },
          tools: { title: "Web & Tools" },
          power: {
            title: "Power skills",
            comm: "Empathetic communication",
            agile: "Agile collaboration",
            docs: "Technical documentation",
          },
        },
      },

      download: "Download CV (PDF)",
    },
    blog: {
      title: "Blog",
      post1: {
        title: "From Frontend to Full Stack: Building Software with User Experience in Mind",
        meta: "Professional reflection · 2025",
        p1:
          "My professional growth in technology has been a process of specialization and depth. I started as a frontend developer, and through Full Stack training I gained a comprehensive understanding of the entire web application lifecycle, from logic and structure to the user interface.",
        p2:
          "As my technical skills expanded, I identified that my strongest impact lies in frontend development and web design, where code, structure, and user experience converge. I have worked with HTML, CSS, Bootstrap, and JavaScript on projects deployed on GitHub Pages, applying principles of visual hierarchy, consistency, and responsive design.",
        p3:
          "Today, I position myself as a Full Stack Developer with a strong focus on frontend and web design, interested in collaborating on teams where technical development and user experience are integrated to build clear, maintainable, and people-centered digital products.",
      },
    },


    footer: {
      title: "Contact",
      p1: "Would you like to collaborate, or do you have a role that fits my profile?",
      emailLabel: "Email me at:",
      cvBtn: "View CV",
      copyright: "© 2025 Angie Torres. All rights reserved. Mexico City",
    },
  },
};
