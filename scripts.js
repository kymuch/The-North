document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section')

  const options = {
    threshold: 0.5,
  }

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, options)

  sections.forEach((section) => {
    observer.observe(section)
  })

  document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      })
    })
  })

  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  const translations = {
    ar: {
      nav_about: 'مـن نـحـن',
      nav_partners: 'شـركـاؤنا',
      nav_contact: 'الاتـصـال بـنـا',
      nav_language: 'الـلـغـة',
      language_ar: 'الـعـربـيـة',
      language_en: 'إنجليزي',
      language_pl: 'بولندي',
      language_de: 'ألماني',
      company_intro:
        'The North - هي واحدة من الشركات الرائدة في مجال السياحة التي تعمل في عدة دول. نحن فخورون بأن شركتنا المتنامية بسرعة، على الرغم من أنها في السوق منذ عام واحد فقط، قد اكتسبت بالفعل ثقة واعتراف العملاء. لدينا <a href="https://x.com/Celebrty_0/status/1731038207674822687" target="_blank">ملايين المشاهدات</a> والعديد من التقييمات الإيجابية من العملاء.',
      company_clients:
        'عملاؤنا هم أشخاص أثرياء من الإمارات العربية المتحدة ومناطق أخرى يقدرون الجودة والمستوى العالي من الخدمة. نحن نقدم جولات حصرية ورحلات فردية، مما يوفر تجارب لا تُنسى وراحة على أعلى مستوى.',
      partners_title: 'شـركـاؤنا',
      contact_title: 'الاتـصـال بـنـا',
      contact_info: 'تواصل معنا:',
      contact_phone: 'هاتف:',
    },
    en: {
      nav_about: 'About Us',
      nav_partners: 'Partners',
      nav_contact: 'Contact',
      nav_language: 'Language',
      language_ar: 'Arabic',
      language_en: 'English',
      language_pl: 'Polish',
      language_de: 'German',
      company_intro:
        'The North is one of the leading companies in the tourism sector, operating in several countries. We are proud that our rapidly growing company, despite being only a year on the market, has already earned the trust and recognition of clients. We have <a href="https://x.com/Celebrty_0/status/1731038207674822687" target="_blank">millions of views</a> and many positive reviews from our clients.',
      company_clients:
        'Our clients are wealthy individuals from the Arab Emirates and other regions who value quality and high level of service. We offer exclusive tours and individual travel, providing unforgettable experiences and top-level comfort.',
      partners_title: 'Partners',
      contact_title: 'Contact',
      contact_info: 'Contact us:',
      contact_phone: 'Phone:',
    },
    pl: {
      nav_about: 'O nas',
      nav_partners: 'Partnerzy',
      nav_contact: 'Kontakt',
      nav_language: 'Język',
      language_ar: 'Arabski',
      language_en: 'Angielski',
      language_pl: 'Polski',
      language_de: 'Niemiecki',
      company_intro:
        'The North jest jedną z wiodących firm w branży turystycznej, działającą w kilku krajach. Jesteśmy dumni, że nasza szybko rozwijająca się firma, mimo że jest na rynku tylko od roku, zdobyła już zaufanie i uznanie klientów. Mamy <a href="https://x.com/Celebrty_0/status/1731038207674822687" target="_blank">miliony wyświetleń</a> i wiele pozytywnych opinii od naszych klientów.',
      company_clients:
        'Nasi klienci to zamożne osoby z Emiratów Arabskich i innych regionów, które cenią sobie jakość i wysoki poziom usług. Oferujemy ekskluzywne wycieczki i podróże indywidualne, zapewniając niezapomniane wrażenia i najwyższy komfort.',
      partners_title: 'Partnerzy',
      contact_title: 'Kontakt',
      contact_info: 'Skontaktuj się z nami:',
      contact_phone: 'Telefon:',
    },
    de: {
      nav_about: 'Über uns',
      nav_partners: 'Partner',
      nav_contact: 'Kontakt',
      nav_language: 'Sprache',
      language_ar: 'Arabisch',
      language_en: 'Englisch',
      language_pl: 'Polnisch',
      language_de: 'Deutsch',
      company_intro:
        'The North ist eines der führenden Unternehmen im Tourismussektor und ist in mehreren Ländern tätig. Wir sind stolz darauf, dass unser schnell wachsendes Unternehmen, trotz dass es erst ein Jahr auf dem Markt ist, bereits das Vertrauen und die Anerkennung der Kunden gewonnen hat. Wir haben <a href="https://x.com/Celebrty_0/status/1731038207674822687" target="_blank">Millionen von Aufrufen</a> und viele positive Bewertungen von unseren Kunden.',
      company_clients:
        'Unsere Kunden sind wohlhabende Personen aus den Arabischen Emiraten und anderen Regionen, die Qualität und ein hohes Maß an Service schätzen. Wir bieten exklusive Touren und individuelle Reisen an, die unvergessliche Erlebnisse und höchsten Komfort bieten.',
      partners_title: 'Partner',
      contact_title: 'Kontakt',
      contact_info: 'Kontaktieren Sie uns:',
      contact_phone: 'Telefon:',
    },
  }

  const defaultLang = 'en'

  const translatePage = (lang) => {
    document.querySelectorAll('[data-translate]').forEach((el) => {
      const key = el.getAttribute('data-translate')
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key]
      }
    })
  }

  document.querySelectorAll('.language').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const lang = el.getAttribute('data-lang')
      localStorage.setItem('selectedLanguage', lang)
      translatePage(lang)
    })
  })

  const selectedLang = localStorage.getItem('selectedLanguage') || defaultLang
  translatePage(selectedLang)
})
