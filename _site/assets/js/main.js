// ============================================
// POMAR.PT - JavaScript Principal
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // 1. MENU MOBILE TOGGLE
    // ============================================
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');

            // Animação do ícone hamburger
            this.classList.toggle('active');
        });
    }

    // ============================================
    // 2. BOTÃO VOLTAR AO TOPO
    // ============================================
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        // Mostrar/esconder botão baseado no scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // Scroll suave ao topo
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // 3. SEARCH OVERLAY
    // ============================================
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn && searchOverlay) {
        // Abrir search
        searchBtn.addEventListener('click', function() {
            searchOverlay.classList.add('active');
            if (searchInput) {
                searchInput.focus();
            }
        });

        // Fechar search
        if (searchClose) {
            searchClose.addEventListener('click', function() {
                searchOverlay.classList.remove('active');
            });
        }

        // Fechar com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
        });

        // Fechar ao clicar fora
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }

    // ============================================
    // 4. SMOOTH SCROLL PARA LINKS ÂNCORA
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // 5. LAZY LOADING IMAGENS (Se houver)
    // ============================================
    const images = document.querySelectorAll('img[data-src]');

    if (images.length > 0 && 'IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // 6. ANIMAÇÃO DE ENTRADA (Fade In)
    // ============================================
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(function(el) {
            fadeObserver.observe(el);
        });
    }
});

// ============================================
// 7. BUSCA SIMPLES (Placeholder - expandir depois)
// ============================================
function performSearch(query) {
    // TODO: Implementar busca real
    console.log('Procurando por:', query);

    // Futuramente, integrar com Jekyll search ou Algolia
}

// ============================================
// 8. UTILITÁRIOS
// ============================================

// Debounce para otimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
