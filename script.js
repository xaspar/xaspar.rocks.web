/*
 * WORKFLOW-HINWEIS: i18n / Übersetzungen
 * ----------------------------------------
 * Deutsche Texte werden ausschließlich in der index.html gepflegt (data-i18n-Attribute).
 * Änderungen am deutschen Text: nur in index.html vornehmen.
 * Danach den KI-Agenten beauftragen, die Übersetzungen in dieser Datei (script.js)
 * entsprechend anzugleichen — sowohl im 'de'-Block als auch im 'en'-Block.
 *
 * DO NOT manually edit translation strings in this file.
 */

const translations = {
    de: {
        'about-title': 'Wer ist XasPar?',
        'about-lead': 'XasPar ist der außergew\u00f6hnliche Live-Act für dein Event — ein Saxophonist und Rapper, der plötzlich auftaucht und alle zum tanzen, singen und träumen bringt. Mit vielen Jahren Bühnenerfahrung, mitreißender Energie und echter Leidenschaft fürs Publikum und die Musik. Flash-Mob-Feeling und Gänsehaut garantiert.',
        'perf-title': 'Die Performance',
        'perf-card1-title': 'Spontane Magie',
        'perf-card1-body': 'XasPar taucht plötzlich auf, bezieht alle ein und nimmt Musikwünsche vom Publikum an. Kein Auftritt ist wie der andere. Sogar Karaoke-Momente mit dem Publikum sind möglich.',
        'perf-card2-title': 'Vielfältiges Repertoire',
        'perf-card2-body': 'Pop, Rock, Funk, Soul, Hip-Hop, Disco und mehr. Von kraftvoll bis romantisch. Was auch immer dein Publikum braucht, XasPar liefert.',
        'perf-card3-title': 'Jede Note kommt von Herzen',
        'perf-card3-body': 'Authentisch, energiegeladen und leidenschaftlich. XasPar erzeugt unvergessliche Momente f\u00fcr das Publikum.',
        'perf-highlight': '<strong>Setup:</strong> Dank leichtem, akkubetriebenen Equipment und blitzschnellem Aufbau kann XasPar \u00fcberall auftreten und die Position auf dem Gel\u00e4nde sofort wechseln, um genau dort aufzutauchen, wo die Energie gebraucht wird.',
        'gallery-title': 'Galerie',
        'gallery-note': '',
        'gallery-placeholder': 'Performance-Clips & Crowd-Momente — Coming soon.',
        'connect-title': "Let's Rock",
        'booking-title': 'XasPar buchen',
        'booking-intro': 'Bereit, deinem Event die richtige Energie zu geben?',
        'booking-instruction': '<strong>Schreib uns auf Instagram:</strong>',
        'booking-email-label': '<strong>Oder per E-Mail:</strong>',
        'booking-note': 'Erz\u00e4hl uns von deiner Veranstaltung, Datum, Ort und der erwarteten Publikumsgr\u00f6\u00dfe. Konditionen und Verf\u00fcgbarkeit besprechen wir direkt.',
        'social-title': 'XasPar folgen',
        'social-desc': 'Neuer Content jede Woche. Behind-the-scenes, Performance-Clips und spontane Stra\u00dfenmomente.',
        'footer-location': 'S\u00fcddeutschland',
        'footer-links-title': 'Schnelllinks',
        'footer-about': '\u00dcber XasPar',
        'footer-performance': 'Performance',
        'footer-book': 'Kontakt',
        'footer-social': 'Social Media',
        'footer-copyright': '\u00a9 2026 XasPar. Alle Rechte vorbehalten.',
    },
    en: {
        'about-title': 'Who is XasPar?',
        'about-lead': "XasPar is the extraordinary live act for your event \u2014 a saxophone player and rapper who suddenly appears and gets everyone dancing, singing, and dreaming. With many years of stage experience, infectious energy, and genuine passion for the crowd and the music. Flash mob feeling and goosebumps guaranteed.",
        'perf-title': 'The Performance',
        'perf-card1-title': 'Spontaneous Magic',
        'perf-card1-body': 'XasPar suddenly appears, gets everyone involved, takes music requests from the audience. No two performances are the same. Even karaoke moments with the crowd are possible.',
        'perf-card2-title': 'Diverse Repertoire',
        'perf-card2-body': 'Pop, rock, funk, soul, hip-hop, disco and more. Everything from powerful to romantic. Whatever your crowd needs, XasPar delivers.',
        'perf-card3-title': 'Every Note Comes from the Heart',
        'perf-card3-body': 'Authentic, energetic, and passionate. XasPar creates unforgettable moments for the audience.',
        'perf-highlight': '<strong>Setup:</strong> Thanks to lightweight, battery-powered equipment and a lightning-fast setup, XasPar can perform anywhere and shift position across the venue in an instant to appear exactly where the energy is needed.',
        'gallery-title': 'Gallery',
        'gallery-note': '',
        'gallery-placeholder': 'Performance-Clips & Crowd-Momente — Coming soon.',
        'connect-title': "Let's Rock",
        'booking-title': 'Book XasPar',
        'booking-intro': 'Ready to bring the energy to your event?',
        'booking-instruction': '<strong>Send a message on Instagram:</strong>',
        'booking-email-label': '<strong>Or via email:</strong>',
        'booking-note': "Tell us about your event, date, location, and expected crowd size. We'll discuss rates and availability directly.",
        'social-title': 'Follow XasPar',
        'social-desc': 'Get all the content! Behind-the-scenes, performance clips, and spontaneous street moments.',
        'footer-location': 'South Germany',
        'footer-links-title': 'Quick Links',
        'footer-about': 'About',
        'footer-performance': 'Performance',
        'footer-book': 'Contact',
        'footer-social': 'Social',
        'footer-copyright': '\u00a9 2026 XasPar. All rights reserved.',
    }
};

function setLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang]?.[key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    localStorage.setItem('xaspar-lang', lang);
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            setLang(this.getAttribute('data-lang'));
        });
    });

    const savedLang = localStorage.getItem('xaspar-lang') || 'de';
    setLang(savedLang);

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Hamburger menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerNav = document.getElementById('hamburgerNav');
    const hamburgerOverlay = document.getElementById('hamburgerOverlay');

    if (hamburgerBtn) {
        function openMenu() {
            hamburgerBtn.classList.add('open');
            hamburgerNav.classList.add('open');
            hamburgerOverlay.classList.add('open');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
            hamburgerNav.setAttribute('aria-hidden', 'false');
        }

        function closeMenu() {
            hamburgerBtn.classList.remove('open');
            hamburgerNav.classList.remove('open');
            hamburgerOverlay.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            hamburgerNav.setAttribute('aria-hidden', 'true');
        }

        hamburgerBtn.addEventListener('click', function () {
            this.classList.contains('open') ? closeMenu() : openMenu();
        });

        hamburgerOverlay.addEventListener('click', closeMenu);

        hamburgerNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
        });
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Email obfuscation
    document.querySelectorAll('.js-email').forEach(function(el) {
        var email = el.getAttribute('data-u') + '\u0040' + el.getAttribute('data-d');
        if (el.tagName === 'A') { el.href = 'mailto:' + email; }
        el.textContent = email;
    });

    // Fix hero height on mobile (prevents next section peeking below the fold)
    const hero = document.querySelector('.hero');
    if (hero) {
        function setHeroHeight() {
            hero.style.minHeight = window.innerHeight + 'px';
        }
        setHeroHeight();
        window.addEventListener('resize', setHeroHeight);
    }
});
