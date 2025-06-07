document.addEventListener('DOMContentLoaded', () => {
    // Elementos del header
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const missionBtn = document.getElementById('missionBtn');
    const visionBtn = document.getElementById('visionBtn');
    const socialBtn = document.getElementById('socialBtn');
    const homeBtn = document.getElementById('homeBtn');
    const footer = document.querySelector('footer');
    const logo = document.getElementById('logoCona'); // Logo CONA

    // Secciones
    const visionSection = document.getElementById('vision');
    const misionSection = document.getElementById('mision');
    const redesSection = document.getElementById('redes');

    let currentSection = null;

    // Animación inicial
    const headerElements = [title, subtitle, logo, missionBtn, socialBtn, visionBtn, footer, homeBtn];

    headerElements.forEach((el, index) => {
        if (el) {
            setTimeout(() => {
                el.classList.remove('hidden');
                if (el === logo) {
                    el.classList.add('rise-left'); // Animación específica del logo
                } else {
                    el.classList.add('rise-up');
                }
            }, index * 300);
        }
    });

    // Función para mostrar sección
    function showSection(section) {
        if (currentSection === section) return;

        // Ocultar todas las secciones
        [visionSection, misionSection, redesSection].forEach(sec => {
            if (sec) {
                sec.classList.remove('active');
                sec.style.display = 'none';
            }
        });

        // Mostrar sección seleccionada
        if (section) {
            section.style.display = 'block';
            setTimeout(() => section.classList.add('active'), 50);
            section.scrollIntoView({ behavior: 'smooth' });

            // Mostrar botón "Inicio"
            if (homeBtn) homeBtn.style.display = 'inline-block';
        } else {
            // Volver al inicio
            if (homeBtn) homeBtn.style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        currentSection = section;
    }

    // Mostrar misión
    if (missionBtn) {
        missionBtn.addEventListener('click', () => {
            showSection(misionSection);
            animateButton(missionBtn);
        });
    }

    // Mostrar visión
    if (visionBtn) {
        visionBtn.addEventListener('click', () => {
            showSection(visionSection);
            animateButton(visionBtn);
        });
    }

    // Mostrar redes sociales
    if (socialBtn) {
        socialBtn.addEventListener('click', () => {
            showSection(redesSection);
            animateButton(socialBtn);
        });
    }

    // Volver al inicio
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            showSection(null);
            animateButton(homeBtn);
        });
    }

    // Animación de botones
    function animateButton(btn) {
        btn.style.transform = 'translateY(2px)';
        btn.style.boxShadow = btn.classList.contains('btn-social') 
            ? '0 2px 5px rgba(76, 175, 80, 0.3)' 
            : '0 2px 5px rgba(255, 107, 0, 0.3)';

        setTimeout(() => {
            btn.style.transform = 'translateY(-3px)';
            btn.style.boxShadow = btn.classList.contains('btn-social') 
                ? '0 6px 15px rgba(76, 175, 80, 0.4)' 
                : '0 6px 15px rgba(255, 107, 0, 0.4)';
        }, 200);
    }

    // Oculta botón de inicio al cargar
    if (homeBtn) homeBtn.style.display = 'none';
});
