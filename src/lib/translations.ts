import type { Language } from "./storyblok";

const translations = {
  // ── Navbar ──
  "nav.angebote": {
    de: "Angebote",
    en: "Offerings",
    es: "Ofertas",
  },
  "nav.about": {
    de: "Über mich",
    en: "About me",
    es: "Sobre mí",
  },
  "nav.kontakt": {
    de: "Kontakt",
    en: "Contact",
    es: "Contacto",
  },
  "nav.kontaktAnfahrt": {
    de: "Kontakt & Anfahrt",
    en: "Contact & Directions",
    es: "Contacto y Dirección",
  },
  "nav.individuell": {
    de: "Individuelle Anfragen",
    en: "Individual Inquiries",
    es: "Consultas Individuales",
  },
  "nav.individuellDesc": {
    de: "Das passende Angebot für dich, individuell abgestimmt auf deine Bedürfnisse",
    en: "The right offer for you, individually tailored to your needs",
    es: "La oferta adecuada para ti, adaptada individualmente a tus necesidades",
  },
  "nav.jetztAnfragen": {
    de: "Jetzt anfragen",
    en: "Inquire now",
    es: "Consultar ahora",
  },

  // Navbar – Angebote dropdown categories
  "nav.cat.taoyin": {
    de: "Tao Yin & Qigong",
    en: "Tao Yin & Qigong",
    es: "Tao Yin & Qigong",
  },
  "nav.cat.psycho": {
    de: "Ganzheitliche Psychotherapie",
    en: "Holistic Psychotherapy",
    es: "Psicoterapia Holística",
  },
  "nav.item.taoyin": {
    de: "Tao Yin",
    en: "Tao Yin",
    es: "Tao Yin",
  },
  "nav.item.taoyinDesc": {
    de: "Sanfte Bewegung, tiefe Entspannung.",
    en: "Gentle movement, deep relaxation.",
    es: "Movimiento suave, relajación profunda.",
  },
  "nav.item.qigong": {
    de: "Qigong",
    en: "Qigong",
    es: "Qigong",
  },
  "nav.item.qigongDesc": {
    de: "Lebensenergie stärken, Balance finden.",
    en: "Strengthen life energy, find balance.",
    es: "Fortalecer la energía vital, encontrar el equilibrio.",
  },
  "nav.item.cnt": {
    de: "Chi Nei Tsang",
    en: "Chi Nei Tsang",
    es: "Chi Nei Tsang",
  },
  "nav.item.cntDesc": {
    de: "Bauchmassage für innere Harmonie.",
    en: "Abdominal massage for inner harmony.",
    es: "Masaje abdominal para la armonía interior.",
  },
  "nav.item.praxis": {
    de: "Zur Praxis",
    en: "Visit Practice",
    es: "Visitar Consulta",
  },
  "nav.item.praxisDesc": {
    de: "Ganzheitliche Praxis für Psychotherapie",
    en: "Holistic practice for psychotherapy",
    es: "Consulta holística de psicoterapia",
  },
  "nav.item.therapien": {
    de: "Therapien",
    en: "Therapies",
    es: "Terapias",
  },
  "nav.item.therapienDesc": {
    de: "Meine verschiedenen Therapie Angebote",
    en: "My various therapy offerings",
    es: "Mis diferentes ofertas terapéuticas",
  },
  "nav.item.behandlung": {
    de: "Behandlung",
    en: "Treatment",
    es: "Tratamiento",
  },
  "nav.item.behandlungDesc": {
    de: "Welche Möglichkeiten gibt es",
    en: "What options are available",
    es: "Qué opciones hay disponibles",
  },

  // ── Hero ──
  "hero.eyebrow": {
    de: "Taoyin Zentrum Ingolstadt",
    en: "Taoyin Center Ingolstadt",
    es: "Centro Taoyin Ingolstadt",
  },
  "hero.title": {
    de: "Willkommen im Taoyin Zentrum Ingolstadt",
    en: "Welcome to the Taoyin Center Ingolstadt",
    es: "Bienvenido al Centro Taoyin Ingolstadt",
  },
  "hero.subtitle": {
    de: "Willkommen in deinem Raum für Achtsamkeit, Heilung und innere Balance. Entdecke sanfte taoistische Praktiken, die Körper, Geist und Seele verbinden – für mehr Energie, Gelassenheit und Wohlbefinden im Alltag.",
    en: "Welcome to your space for mindfulness, healing and inner balance. Discover gentle Taoist practices that connect body, mind and soul – for more energy, serenity and well-being in everyday life.",
    es: "Bienvenido a tu espacio de atención plena, sanación y equilibrio interior. Descubre prácticas taoístas suaves que conectan cuerpo, mente y alma – para más energía, serenidad y bienestar en la vida cotidiana.",
  },
  "hero.btn1": {
    de: "Mehr erfahren",
    en: "Learn more",
    es: "Saber más",
  },
  "hero.btn2": {
    de: "Angebote entdecken",
    en: "Explore offerings",
    es: "Descubrir ofertas",
  },
  "hero.imgAlt1": {
    de: "Spa-Ambiente im Taoyin Zentrum Ingolstadt",
    en: "Spa atmosphere at Taoyin Center Ingolstadt",
    es: "Ambiente spa en el Centro Taoyin Ingolstadt",
  },
  "hero.imgAlt2": {
    de: "Estela Fuchs – Taoyin Zentrum Ingolstadt",
    en: "Estela Fuchs – Taoyin Center Ingolstadt",
    es: "Estela Fuchs – Centro Taoyin Ingolstadt",
  },

  // ── Angebote ──
  "angebote.title": {
    de: "Meine Angebote für dich",
    en: "My offerings for you",
    es: "Mis ofertas para ti",
  },
  "angebote.subtitle": {
    de: "Individuell abgestimmt auf deine Bedürfnisse – finde das passende Angebot für deinen Weg zu mehr Balance und Wohlbefinden.",
    en: "Individually tailored to your needs – find the right offering for your path to more balance and well-being.",
    es: "Adaptado individualmente a tus necesidades – encuentra la oferta adecuada para tu camino hacia más equilibrio y bienestar.",
  },
  "angebote.phone": {
    de: "Anfragen per Telefon",
    en: "Inquire by phone",
    es: "Consultar por teléfono",
  },
  "angebote.mail": {
    de: "Anfragen per Mail",
    en: "Inquire by email",
    es: "Consultar por correo",
  },

  // Angebote card 1 – Tao Basis
  "angebote.c1.title": {
    de: "Tao Basis (Einführung)",
    en: "Tao Basics (Introduction)",
    es: "Tao Básico (Introducción)",
  },
  "angebote.c1.note": {
    de: "(3,5 - 4 Std.)",
    en: "(3.5 - 4 hrs)",
    es: "(3,5 - 4 hrs)",
  },
  "angebote.c1.desc": {
    de: "„TaoBasis – Qi Gong Kurse & Chi Nei Tsang Bauchmassage. Finden Sie Ruhe, Energie & innere Balance.",
    en: "\"TaoBasics – Qi Gong courses & Chi Nei Tsang abdominal massage. Find calm, energy & inner balance.",
    es: "\"TaoBásico – Cursos de Qi Gong y masaje abdominal Chi Nei Tsang. Encuentra calma, energía y equilibrio interior.",
  },
  "angebote.c1.f1": {
    de: "Tao Grundlagen",
    en: "Tao fundamentals",
    es: "Fundamentos del Tao",
  },
  "angebote.c1.f2": {
    de: "Einsteigerkurs Qi Gong",
    en: "Beginner Qi Gong course",
    es: "Curso de Qi Gong para principiantes",
  },
  "angebote.c1.f3": {
    de: "Grundlagen der Chi Nei Tsang Massage",
    en: "Basics of Chi Nei Tsang massage",
    es: "Fundamentos del masaje Chi Nei Tsang",
  },

  // Angebote card 2 – Medizinisches Qi Gong
  "angebote.c2.title": {
    de: "Medizinisches Qi Gong",
    en: "Medical Qi Gong",
    es: "Qi Gong Médico",
  },
  "angebote.c2.note": {
    de: "(Zehnerkarte)",
    en: "(10-session card)",
    es: "(Tarjeta de 10 sesiones)",
  },
  "angebote.c2.desc": {
    de: "Dreimal pro Woche treffen wir uns zur gemeinsamen Übungsstunde. Regelmäßiges Qi Gong wirkt wie Medizin für Körper und Geist.",
    en: "Three times a week we meet for a joint practice session. Regular Qi Gong works like medicine for body and mind.",
    es: "Tres veces por semana nos reunimos para una sesión de práctica conjunta. El Qi Gong regular funciona como medicina para el cuerpo y la mente.",
  },
  "angebote.c2.f1": {
    de: "Stärkung des Immunsystems",
    en: "Strengthening the immune system",
    es: "Fortalecimiento del sistema inmunológico",
  },
  "angebote.c2.f2": {
    de: "Verbesserung von Haltung und Beweglichkeit",
    en: "Improvement of posture and flexibility",
    es: "Mejora de la postura y la flexibilidad",
  },
  "angebote.c2.f3": {
    de: "Reduzierung von Stress, Müdigkeit und Schmerzen",
    en: "Reduction of stress, fatigue and pain",
    es: "Reducción del estrés, la fatiga y el dolor",
  },
  "angebote.c2.f4": {
    de: "mehr Energie im Alltag",
    en: "more energy in everyday life",
    es: "más energía en la vida cotidiana",
  },

  // Angebote card 3 – CNT Behandlung
  "angebote.c3.title": {
    de: "Chi Nei Tsang Behandlung",
    en: "Chi Nei Tsang Treatment",
    es: "Tratamiento Chi Nei Tsang",
  },
  "angebote.c3.note": {
    de: "(Einführungspreis)",
    en: "(Introductory price)",
    es: "(Precio introductorio)",
  },
  "angebote.c3.desc": {
    de: "Chi Nei Tsang ist eine taoistische Massagekunst, die die inneren Organe harmonisiert und den Energiefluss (Qi) im Körper aktiviert.",
    en: "Chi Nei Tsang is a Taoist massage art that harmonizes the internal organs and activates the energy flow (Qi) in the body.",
    es: "Chi Nei Tsang es un arte de masaje taoísta que armoniza los órganos internos y activa el flujo de energía (Qi) en el cuerpo.",
  },
  "angebote.c3.f1": {
    de: "Blockaden in den Meridianen lösen",
    en: "Release blockages in the meridians",
    es: "Liberar bloqueos en los meridianos",
  },
  "angebote.c3.f2": {
    de: "Schmerzen und Verspannungen lindern",
    en: "Relieve pain and tension",
    es: "Aliviar el dolor y la tensión",
  },
  "angebote.c3.f3": {
    de: "Ihre Selbstheilungskräfte aktivieren",
    en: "Activate your self-healing powers",
    es: "Activar tus poderes de autocuración",
  },
  "angebote.c3.f4": {
    de: "Körper, Geist und Emotionen ins Gleichgewicht bringen",
    en: "Bring body, mind and emotions into balance",
    es: "Equilibrar cuerpo, mente y emociones",
  },

  // Angebote card 4 – CNT Ausbildung (wide)
  "angebote.c4.title": {
    de: "Chi Nei Tsang Ausbildung",
    en: "Chi Nei Tsang Training",
    es: "Formación Chi Nei Tsang",
  },
  "angebote.c4.note": {
    de: "(Jahresausbildung mit offizieller Zertifizierung)",
    en: "(Annual training with official certification)",
    es: "(Formación anual con certificación oficial)",
  },
  "angebote.c4.desc": {
    de: "Lernen Sie die Kunst der Selbstheilung durch Berührung.\nIn der Ausbildung erfahren Sie Schritt für Schritt.",
    en: "Learn the art of self-healing through touch.\nIn the training you will learn step by step.",
    es: "Aprende el arte de la autosanación a través del tacto.\nEn la formación aprenderás paso a paso.",
  },
  "angebote.c4.f1": {
    de: "wie Sie Qi-Blockaden erkennen und lösen",
    en: "how to recognize and release Qi blockages",
    es: "cómo reconocer y liberar bloqueos de Qi",
  },
  "angebote.c4.f2": {
    de: "die Meridiane öffnen und Ihre Lebensenergie stärken",
    en: "open the meridians and strengthen your life energy",
    es: "abrir los meridianos y fortalecer tu energía vital",
  },
  "angebote.c4.f3": {
    de: "mit gezielten Massagegriffen Körper und Seele in Balance bringen",
    en: "bring body and soul into balance with targeted massage techniques",
    es: "equilibrar cuerpo y alma con técnicas de masaje específicas",
  },
  "angebote.c4.f4": {
    de: "Techniken, die Sie für sich selbst und andere anwenden können",
    en: "techniques you can apply for yourself and others",
    es: "técnicas que puedes aplicar para ti y para otros",
  },

  // ── FAQ ──
  "faq.title": {
    de: "Raum für Achtsamkeit & Balance",
    en: "Space for Mindfulness & Balance",
    es: "Espacio para la Atención Plena y el Equilibrio",
  },
  "faq.subtitle": {
    de: "Antworten auf häufige Fragen zu unseren taoistischen Angeboten, Methoden und deinem Weg zu mehr Wohlbefinden.",
    en: "Answers to frequently asked questions about our Taoist offerings, methods and your path to more well-being.",
    es: "Respuestas a preguntas frecuentes sobre nuestras ofertas taoístas, métodos y tu camino hacia más bienestar.",
  },
  "faq.q1": {
    de: "Was ist Tao Yin und wie wirkt es?",
    en: "What is Tao Yin and how does it work?",
    es: "¿Qué es Tao Yin y cómo funciona?",
  },
  "faq.a1": {
    de: "Tao Yin verbindet sanfte Bewegung, Atmung und innere Präsenz. Die Praxis stärkt deine Wirbelsäule, löst Verspannungen und bringt deine Lebensenergie (Chi) in Fluss. Du findest so zu mehr Ruhe, Flexibilität und innerer Balance.",
    en: "Tao Yin combines gentle movement, breathing and inner presence. The practice strengthens your spine, releases tension and brings your life energy (Chi) into flow. This helps you find more calm, flexibility and inner balance.",
    es: "Tao Yin combina movimiento suave, respiración y presencia interior. La práctica fortalece tu columna vertebral, libera tensiones y pone tu energía vital (Chi) en flujo. Así encuentras más calma, flexibilidad y equilibrio interior.",
  },
  "faq.q2": {
    de: "Für wen sind die Kurse geeignet?",
    en: "Who are the courses suitable for?",
    es: "¿Para quién son adecuados los cursos?",
  },
  "faq.a2": {
    de: "Unsere Angebote richten sich an alle – egal ob Anfänger*in, Fortgeschrittene, jung oder alt. Besonders profitieren Menschen mit Stress, Rückenschmerzen oder dem Wunsch nach mehr innerer Ruhe und Selbstfürsorge.",
    en: "Our offerings are for everyone – whether beginners, advanced practitioners, young or old. People with stress, back pain or the desire for more inner calm and self-care particularly benefit.",
    es: "Nuestras ofertas son para todos – ya sean principiantes, practicantes avanzados, jóvenes o mayores. Las personas con estrés, dolor de espalda o el deseo de más calma interior y autocuidado se benefician especialmente.",
  },
  "faq.q3": {
    de: "Was ist das Besondere an Chi Nei Tsang?",
    en: "What is special about Chi Nei Tsang?",
    es: "¿Qué tiene de especial Chi Nei Tsang?",
  },
  "faq.a3": {
    de: "Chi Nei Tsang ist eine tiefgehende Bauchmassage, die emotionale und energetische Blockaden löst. Sie unterstützt die Verdauung, stärkt die Organe und hilft dir, dich mit deinem Zentrum zu verbinden.",
    en: "Chi Nei Tsang is a deep abdominal massage that releases emotional and energetic blockages. It supports digestion, strengthens the organs and helps you connect with your center.",
    es: "Chi Nei Tsang es un masaje abdominal profundo que libera bloqueos emocionales y energéticos. Apoya la digestión, fortalece los órganos y te ayuda a conectar con tu centro.",
  },
  "faq.q4": {
    de: "Wie kann ich einen Termin buchen?",
    en: "How can I book an appointment?",
    es: "¿Cómo puedo reservar una cita?",
  },
  "faq.a4": {
    de: "Du kannst ganz einfach per WhatsApp, E-Mail oder Telefon einen Termin vereinbaren. Wir beraten dich gerne persönlich und finden gemeinsam das passende Angebot für dich.",
    en: "You can easily book an appointment via WhatsApp, email or phone. We are happy to advise you personally and find the right offering for you.",
    es: "Puedes reservar fácilmente una cita por WhatsApp, correo electrónico o teléfono. Estaremos encantados de asesorarte personalmente y encontrar la oferta adecuada para ti.",
  },

  // ── Testimonials ──
  "testimonials.eyebrow": {
    de: "Erfahrungen aus unserer Gemeinschaft",
    en: "Experiences from our community",
    es: "Experiencias de nuestra comunidad",
  },
  "testimonials.title": {
    de: "Stimmen, die berühren",
    en: "Voices that touch",
    es: "Voces que conmueven",
  },
  "testimonials.subtitle": {
    de: "Unsere Teilnehmer*innen teilen, wie die taoistischen Praktiken ihr Leben bereichern – mit mehr Ruhe, innerer Balance und neuer Lebensenergie. Lass dich inspirieren und finde deinen eigenen Weg in die Mitte.",
    en: "Our participants share how Taoist practices enrich their lives – with more calm, inner balance and new life energy. Be inspired and find your own path to the center.",
    es: "Nuestros participantes comparten cómo las prácticas taoístas enriquecen sus vidas – con más calma, equilibrio interior y nueva energía vital. Inspírate y encuentra tu propio camino al centro.",
  },
  "testimonials.google": {
    de: "Mehr Rezensionen auf Google",
    en: "More reviews on Google",
    es: "Más reseñas en Google",
  },

  // ── CTA ──
  "cta.title": {
    de: "Finde deine Mitte. Spüre dein Chi.",
    en: "Find your center. Feel your Chi.",
    es: "Encuentra tu centro. Siente tu Chi.",
  },
  "cta.desc": {
    de: "Tauche ein in einen Raum für Achtsamkeit, Heilung und innere Balance. Entdecke sanfte taoistische Praktiken, die Körper, Geist und Seele verbinden. Hier findest du Ruhe, neue Energie und Inspiration für deinen Alltag – unabhängig von Erfahrung oder Lebensphase. Komm an, atme durch und lass dich begleiten auf deinem Weg zu mehr Wohlbefinden.",
    en: "Immerse yourself in a space for mindfulness, healing and inner balance. Discover gentle Taoist practices that connect body, mind and soul. Here you will find calm, new energy and inspiration for your everyday life – regardless of experience or life phase. Arrive, breathe and let yourself be accompanied on your path to more well-being.",
    es: "Sumérgete en un espacio de atención plena, sanación y equilibrio interior. Descubre prácticas taoístas suaves que conectan cuerpo, mente y alma. Aquí encontrarás calma, nueva energía e inspiración para tu vida cotidiana – sin importar la experiencia o la fase de la vida. Llega, respira y déjate acompañar en tu camino hacia más bienestar.",
  },
  "cta.imgAlt": {
    de: "Hintergrund",
    en: "Background",
    es: "Fondo",
  },
  "cta.phone": {
    de: "Telefon",
    en: "Phone",
    es: "Teléfono",
  },
  "cta.email": {
    de: "E-Mail",
    en: "Email",
    es: "Correo electrónico",
  },
  "cta.whatsapp": {
    de: "WhatsApp",
    en: "WhatsApp",
    es: "WhatsApp",
  },

  // ── Psychotherapie ──
  "psycho.title": {
    de: "Ganzheitliche Psychotherapie",
    en: "Holistic Psychotherapy",
    es: "Psicoterapia Holística",
  },
  "psycho.desc": {
    de: "Ich arbeite mit klassischen Verfahren wie Entspannungstechniken und Verhaltenstherapie sowie mit alternativen Methoden aus den Bereichen der Meditation, des Qigong, des Tai Chi und der Ernährung nach den 5 Elementen.",
    en: "I work with classical methods such as relaxation techniques and behavioral therapy as well as alternative methods from the areas of meditation, Qigong, Tai Chi and nutrition according to the 5 elements.",
    es: "Trabajo con métodos clásicos como técnicas de relajación y terapia conductual, así como con métodos alternativos de las áreas de meditación, Qigong, Tai Chi y nutrición según los 5 elementos.",
  },
  "psycho.btn": {
    de: "Mehr erfahren",
    en: "Learn more",
    es: "Saber más",
  },

  // ── Persönliches Angebot ──
  "personal.title": {
    de: "✨ Mein persönliches Angebot – das Besondere bei TaoBasis",
    en: "✨ My personal offering – what makes TaoBasics special",
    es: "✨ Mi oferta personal – lo especial de TaoBásico",
  },
  "personal.f1": {
    de: 'Individuelle Abstimmung: Ich gehe auf die Bedürfnisse jedes einzelnen Menschen ein – kein "Schema F", sondern eine Begleitung, die wirklich passt.',
    en: "Individual alignment: I respond to the needs of each individual person – no one-size-fits-all, but guidance that truly fits.",
    es: "Alineación individual: Respondo a las necesidades de cada persona individual – sin soluciones genéricas, sino una guía que realmente se adapta.",
  },
  "personal.f2": {
    de: "Ganzheitliche Verbindung: Die Kombination von Qi Gong und Chi Nei Tsang verstärkt die Wirkung und schafft nachhaltige Heilimpulse.",
    en: "Holistic connection: The combination of Qi Gong and Chi Nei Tsang enhances the effect and creates sustainable healing impulses.",
    es: "Conexión holística: La combinación de Qi Gong y Chi Nei Tsang potencia el efecto y crea impulsos de sanación sostenibles.",
  },
  "personal.f3": {
    de: "Authentische Begleitung: Ich lebe, was ich unterrichte. Meine Arbeit ist getragen von Achtsamkeit, Liebe zur Berührung und dem Wunsch, Heilung zu fördern.",
    en: "Authentic guidance: I live what I teach. My work is carried by mindfulness, love of touch and the desire to promote healing.",
    es: "Guía auténtica: Vivo lo que enseño. Mi trabajo está guiado por la atención plena, el amor al contacto y el deseo de promover la sanación.",
  },
  "personal.btn": {
    de: "Kontakt aufnehmen",
    en: "Get in touch",
    es: "Contactar",
  },

  // ── Footer ──
  "footer.heading": {
    de: "In deine Mitte finden",
    en: "Find your center",
    es: "Encuentra tu centro",
  },
  "footer.tagline": {
    de: "Raum für Achtsamkeit & Balance",
    en: "Space for mindfulness & balance",
    es: "Espacio para la atención plena y el equilibrio",
  },
  "footer.angebote": {
    de: "Angebote",
    en: "Offerings",
    es: "Ofertas",
  },
  "footer.service": {
    de: "Service",
    en: "Service",
    es: "Servicio",
  },
  "footer.anfahrt": {
    de: "Anfahrt & Kontakt",
    en: "Directions & Contact",
    es: "Dirección y Contacto",
  },
  "footer.impressum": {
    de: "Impressum & Datenschutz",
    en: "Legal Notice & Privacy",
    es: "Aviso Legal y Privacidad",
  },
  "footer.psychotherapie": {
    de: "Psychotherapie",
    en: "Psychotherapy",
    es: "Psicoterapia",
  },
  "footer.cntMassage": {
    de: "Chi Nei Tsang Massage",
    en: "Chi Nei Tsang Massage",
    es: "Masaje Chi Nei Tsang",
  },

  // ── Detail sections fallback ──
  "details.s1.eyebrow": {
    de: "Ganzheitlich. Achtsam. Verbunden.",
    en: "Holistic. Mindful. Connected.",
    es: "Holístico. Consciente. Conectado.",
  },
  "details.s1.heading": {
    de: "Tao Basis",
    en: "Tao Basics",
    es: "Tao Básico",
  },
  "details.s1.text": {
    de: "„TaoBasis – Qi Gong Kurse & Chi Nei Tsang Bauchmassage. Finden Sie Ruhe, Energie & innere Balance.",
    en: "\"TaoBasics – Qi Gong courses & Chi Nei Tsang abdominal massage. Find calm, energy & inner balance.",
    es: "\"TaoBásico – Cursos de Qi Gong y masaje abdominal Chi Nei Tsang. Encuentra calma, energía y equilibrio interior.",
  },
  "details.s1.btn1": {
    de: "Mehr erfahren über Tao Yin",
    en: "Learn more about Tao Yin",
    es: "Saber más sobre Tao Yin",
  },
  "details.s1.btn2": {
    de: "Jetzt Angebote entdecken",
    en: "Explore offerings now",
    es: "Descubrir ofertas ahora",
  },

  "details.s2.eyebrow": {
    de: "Tao Yin & Qigong",
    en: "Tao Yin & Qigong",
    es: "Tao Yin & Qigong",
  },
  "details.s2.heading": {
    de: "Einführung in Qi Gong",
    en: "Introduction to Qi Gong",
    es: "Introducción al Qi Gong",
  },
  "details.s2.text": {
    de: `„Qi Gong Kurs für Anfänger: Lernen Sie sanfte Übungen, Atemtechniken & Energiearbeit für Vitalität, Entspannung & mehr Lebensbalance."`,
    en: `"Qi Gong course for beginners: Learn gentle exercises, breathing techniques & energy work for vitality, relaxation & more life balance."`,
    es: `"Curso de Qi Gong para principiantes: Aprende ejercicios suaves, técnicas de respiración y trabajo energético para vitalidad, relajación y más equilibrio vital."`,
  },
  "details.s2.btn1": {
    de: "Mehr erfahren über Qi Gong",
    en: "Learn more about Qi Gong",
    es: "Saber más sobre Qi Gong",
  },
  "details.s2.btn2": {
    de: "Kurse ansehen",
    en: "View courses",
    es: "Ver cursos",
  },

  "details.s3.eyebrow": {
    de: "Tao Yin & Qigong",
    en: "Tao Yin & Qigong",
    es: "Tao Yin & Qigong",
  },
  "details.s3.heading": {
    de: "Medizinisches Qi Gong",
    en: "Medical Qi Gong",
    es: "Qi Gong Médico",
  },
  "details.s3.text": {
    de: `„Medizinisches Qi Gong – dreimal pro Woche: stärken Sie Ihr Immunsystem, bauen Sie Stress ab & finden Sie Energie für Körper & Geist."`,
    en: `"Medical Qi Gong – three times a week: strengthen your immune system, reduce stress & find energy for body & mind."`,
    es: `"Qi Gong Médico – tres veces por semana: fortalece tu sistema inmunológico, reduce el estrés y encuentra energía para cuerpo y mente."`,
  },
  "details.s3.btn1": {
    de: "Kurse ansehen",
    en: "View courses",
    es: "Ver cursos",
  },

  "details.s4.eyebrow": {
    de: "Chi Nei Tsang",
    en: "Chi Nei Tsang",
    es: "Chi Nei Tsang",
  },
  "details.s4.heading": {
    de: "Chi Nei Tsang Behandlung",
    en: "Chi Nei Tsang Treatment",
    es: "Tratamiento Chi Nei Tsang",
  },
  "details.s4.text": {
    de: `„Chi Nei Tsang Bauchmassage: lösen Sie Blockaden, aktivieren Sie Selbstheilung & erleben Sie tiefe Entspannung für Körper & Seele."`,
    en: `"Chi Nei Tsang abdominal massage: release blockages, activate self-healing & experience deep relaxation for body & soul."`,
    es: `"Masaje abdominal Chi Nei Tsang: libera bloqueos, activa la autosanación y experimenta una relajación profunda para cuerpo y alma."`,
  },
  "details.s4.btn1": {
    de: "Mehr erfahren über Chi Nei Tsang",
    en: "Learn more about Chi Nei Tsang",
    es: "Saber más sobre Chi Nei Tsang",
  },
  "details.s4.btn2": {
    de: "Jetzt Behandlung buchen",
    en: "Book treatment now",
    es: "Reservar tratamiento ahora",
  },

  "details.s5.eyebrow": {
    de: "Chi Nei Tsang",
    en: "Chi Nei Tsang",
    es: "Chi Nei Tsang",
  },
  "details.s5.heading": {
    de: "Chi Nei Tsang Ausbildung",
    en: "Chi Nei Tsang Training",
    es: "Formación Chi Nei Tsang",
  },
  "details.s5.text": {
    de: `„Chi Nei Tsang Ausbildung: lernen Sie die taoistische Bauchmassage & Selbstbehandlung, kombiniert mit Qi Gong für maximale Heilwirkung."`,
    en: `"Chi Nei Tsang training: learn Taoist abdominal massage & self-treatment, combined with Qi Gong for maximum healing effect."`,
    es: `"Formación Chi Nei Tsang: aprende el masaje abdominal taoísta y el autotratamiento, combinado con Qi Gong para el máximo efecto curativo."`,
  },
  "details.s5.btn1": {
    de: "Ausbildung buchen",
    en: "Book training",
    es: "Reservar formación",
  },

  "details.s6.eyebrow": {
    de: "Ich berate und unterstütze Sie gerne",
    en: "I am happy to advise and support you",
    es: "Estaré encantada de asesorarte y apoyarte",
  },
  "details.s6.heading": {
    de: "Praxis für ganzheitliche Psychotherapie",
    en: "Practice for holistic psychotherapy",
    es: "Consulta de psicoterapia holística",
  },
  "details.s6.text": {
    de: "Lernen Sie die Kraft der Integration von Körper, Geist und Seele für Sich zu nutzen.",
    en: "Learn to harness the power of integration of body, mind and soul for yourself.",
    es: "Aprende a aprovechar el poder de la integración de cuerpo, mente y alma para ti.",
  },
  "details.s6.btn1": {
    de: "zur Praxis",
    en: "Visit practice",
    es: "Visitar consulta",
  },

  "details.s7.eyebrow": {
    de: "Estela Fuchs",
    en: "Estela Fuchs",
    es: "Estela Fuchs",
  },
  "details.s7.heading": {
    de: "Meine Geschichte",
    en: "My story",
    es: "Mi historia",
  },
  "details.s7.text": {
    de: "Nach einer langen Pause kehre ich mit neuer Kraft und Dankbarkeit zurück. Ein schwerer Bruch am Fußgelenk hat mich gezwungen, innezuhalten – und zugleich gezeigt, wie heilsam Qi Gong und taoistische Praktiken wirklich sind.\n\nSie haben mir geholfen, schneller zu regenerieren, wieder fest auf den Beinen zu stehen und tiefer in meine Praxis einzutauchen. Seit über 30 Jahren übe ich den Weg des Taoismus – heute mit noch mehr Überzeugung und dem Wunsch, diese Schätze mit anderen zu teilen.\n\nMeine Angebote sind mehr als Kurse – sie sind eine Einladung, die eigene Lebenskraft neu zu entdecken.",
    en: "After a long break, I return with new strength and gratitude. A severe ankle fracture forced me to pause – and at the same time showed how healing Qi Gong and Taoist practices truly are.\n\nThey helped me regenerate faster, stand firmly on my feet again and dive deeper into my practice. For over 30 years I have been practicing the way of Taoism – today with even more conviction and the desire to share these treasures with others.\n\nMy offerings are more than courses – they are an invitation to rediscover your own life force.",
    es: "Después de una larga pausa, regreso con nueva fuerza y gratitud. Una fractura grave de tobillo me obligó a parar – y al mismo tiempo me mostró cuán sanadoras son realmente las prácticas de Qi Gong y taoístas.\n\nMe ayudaron a regenerarme más rápido, a pararme firmemente de nuevo y a sumergirme más profundamente en mi práctica. Durante más de 30 años he practicado el camino del taoísmo – hoy con aún más convicción y el deseo de compartir estos tesoros con otros.\n\nMis ofertas son más que cursos – son una invitación a redescubrir tu propia fuerza vital.",
  },
  "details.s7.btn1": {
    de: "Mehr erfahren",
    en: "Learn more",
    es: "Saber más",
  },

  // ── News (hidden section) ──
  "news.eyebrow": {
    de: "Raum für dich",
    en: "Space for you",
    es: "Espacio para ti",
  },
  "news.title": {
    de: "Neuigkeiten und Interessantes",
    en: "News and Interesting Topics",
    es: "Noticias y Temas Interesantes",
  },
  "news.subtitle": {
    de: "Hier findest du alle Neuigkeiten unseres Tao Yin Zentrums und interessante Artikel zum Lesen.",
    en: "Here you will find all news from our Tao Yin Center and interesting articles to read.",
    es: "Aquí encontrarás todas las noticias de nuestro Centro Tao Yin y artículos interesantes para leer.",
  },
  "news.placeholder": {
    de: "Hier steht ein Titel zu einer News",
    en: "News title placeholder",
    es: "Título de la noticia",
  },
  "news.placeholderDesc": {
    de: "Hier steht eine kurze Beschreibung zu einer Neuigkeit",
    en: "Short description of a news item",
    es: "Breve descripción de una noticia",
  },
  "news.more": {
    de: "Mehr dazu",
    en: "Read more",
    es: "Leer más",
  },
  "news.backHome": {
    de: "Zurück zur Startseite",
    en: "Back to home",
    es: "Volver al inicio",
  },
  "news.notFound": {
    de: "Artikel nicht gefunden",
    en: "Article not found",
    es: "Artículo no encontrado",
  },

  // ── 404 Not Found ──
  "notFound.title": {
    de: "404",
    en: "404",
    es: "404",
  },
  "notFound.text": {
    de: "Diese Seite wurde leider nicht gefunden.",
    en: "Sorry, this page could not be found.",
    es: "Lo sentimos, esta página no se pudo encontrar.",
  },
  "notFound.link": {
    de: "Zur Startseite",
    en: "Go to homepage",
    es: "Ir a la página de inicio",
  },

  // ── Kontakt ──
  "kontakt.title": {
    de: "Anfahrt & Kontakt",
    en: "Directions & Contact",
    es: "Dirección y Contacto",
  },
  "kontakt.phone": {
    de: "Sie erreichen mich telefonisch unter der Nummer:",
    en: "You can reach me by phone at:",
    es: "Puede contactarme por teléfono al:",
  },
  "kontakt.emailIntro": {
    de: "Anfragen für das Taoyin Zentrum schicken Sie an:",
    en: "Send inquiries for the Taoyin Center to:",
    es: "Envíe consultas para el Centro Taoyin a:",
  },
  "kontakt.emailPraxis": {
    de: "und für meine Praxis für Psychotherapie an:",
    en: "and for my psychotherapy practice to:",
    es: "y para mi consulta de psicoterapia a:",
  },
  "kontakt.whatsapp": {
    de: "Sie können mich auch über",
    en: "You can also reach me via",
    es: "También puede contactarme por",
  },
  "kontakt.whatsappEnd": {
    de: "erreichen.",
    en: ".",
    es: ".",
  },
  "kontakt.directions": {
    de: "So finden Sie in unser Taoyin Zentrum in Ingolstadt ( Bei der Schleifmühle 34b, 85049 Ingolstadt).",
    en: "How to find our Taoyin Center in Ingolstadt (Bei der Schleifmühle 34b, 85049 Ingolstadt).",
    es: "Cómo encontrar nuestro Centro Taoyin en Ingolstadt (Bei der Schleifmühle 34b, 85049 Ingolstadt).",
  },
  "kontakt.mapTitle": {
    de: "Taoyin Zentrum Ingolstadt auf Google Maps",
    en: "Taoyin Center Ingolstadt on Google Maps",
    es: "Centro Taoyin Ingolstadt en Google Maps",
  },

  // ── About ──
  "about.heroName": {
    de: "Estela Fuchs",
    en: "Estela Fuchs",
    es: "Estela Fuchs",
  },
  "about.heroSubtitle": {
    de: "Lernen Sie mich kennen und erfahren Sie mehr über mich und meinen Überzeugungen.",
    en: "Get to know me and learn more about me and my beliefs.",
    es: "Conóceme y aprende más sobre mí y mis convicciones.",
  },
  "about.articleTitle": {
    de: "Über mich – mein Weg mit TaoBasis",
    en: "About me – my path with TaoBasics",
    es: "Sobre mí – mi camino con TaoBásico",
  },
  "about.p1": {
    de: "Nach einer längeren Pause und einer herausfordernden Heilungszeit möchte ich mich neu vorstellen.\nVor einiger Zeit erlitt ich einen Bruch am Fußgelenk. Dieser Unfall brachte mich aus dem Gleichgewicht und verlangte viel Geduld und Achtsamkeit. Doch gerade in dieser Phase durfte ich erfahren, wie tiefgreifend Qi Gong und die taoistischen Heilmethoden wirken.",
    en: "After a longer break and a challenging healing period, I would like to reintroduce myself.\nSome time ago I suffered a broken ankle. This accident threw me off balance and demanded a lot of patience and mindfulness. But it was precisely in this phase that I was able to experience how profoundly Qi Gong and Taoist healing methods work.",
    es: "Después de una pausa más larga y un período de curación desafiante, me gustaría presentarme de nuevo.\nHace algún tiempo sufrí una fractura de tobillo. Este accidente me desequilibró y exigió mucha paciencia y atención plena. Pero fue precisamente en esta fase cuando pude experimentar cuán profundamente funcionan el Qi Gong y los métodos de curación taoístas.",
  },
  "about.li1": {
    de: "Sie unterstützten meine körperliche Regeneration.",
    en: "They supported my physical regeneration.",
    es: "Apoyaron mi regeneración física.",
  },
  "about.li2": {
    de: "Sie gaben mir Kraft, wieder sicher auf meinen Beinen zu stehen.",
    en: "They gave me strength to stand firmly on my feet again.",
    es: "Me dieron fuerza para volver a ponerme firmemente de pie.",
  },
  "about.li3": {
    de: "Sie öffneten mir die Tür zu einer noch tieferen Erfahrung von Heilung und Vertrauen.",
    en: "They opened the door to an even deeper experience of healing and trust.",
    es: "Me abrieron la puerta a una experiencia aún más profunda de sanación y confianza.",
  },
  "about.p2": {
    de: "Seit über 30 Jahren gehe ich den Weg des Taoismus. Viele Jahre habe ich Qi Gong geübt, weitergegeben und Menschen begleitet. Doch diese persönliche Erfahrung hat meine Überzeugung vertieft: Taoistische Praktiken sind nicht nur Bewegungen, sondern lebendige Werkzeuge für Heilung, Balance und innere Stärke.",
    en: "For over 30 years I have been walking the path of Taoism. For many years I have practiced Qi Gong, passed it on and accompanied people. But this personal experience has deepened my conviction: Taoist practices are not just movements, but living tools for healing, balance and inner strength.",
    es: "Desde hace más de 30 años recorro el camino del taoísmo. Durante muchos años he practicado Qi Gong, lo he transmitido y he acompañado a personas. Pero esta experiencia personal ha profundizado mi convicción: las prácticas taoístas no son solo movimientos, sino herramientas vivas para la sanación, el equilibrio y la fuerza interior.",
  },
  "about.p3": {
    de: "Parallel dazu habe ich mich intensiv mit Psychotherapie beschäftigt. In meiner heutigen Arbeit fließen diese beiden Wege zusammen: die tiefgehende innere Arbeit der Psychotherapie und die körperlich-seelische Dimension der taoistischen Praxis. Diese Verbindung ermöglicht es, nicht nur auf einer geistigen Ebene Themen zu bearbeiten, sondern Heilung und Veränderung ganzheitlich zu erfahren.",
    en: "At the same time, I have been intensively involved with psychotherapy. In my work today, these two paths come together: the deep inner work of psychotherapy and the physical-spiritual dimension of Taoist practice. This combination makes it possible not only to work on issues on a mental level, but to experience healing and change holistically.",
    es: "Paralelamente, me he dedicado intensamente a la psicoterapia. En mi trabajo actual, estos dos caminos se unen: el trabajo interior profundo de la psicoterapia y la dimensión físico-espiritual de la práctica taoísta. Esta combinación permite no solo trabajar temas a nivel mental, sino experimentar la sanación y el cambio de manera holística.",
  },
  "about.p4": {
    de: "Heute möchte ich das, was mir selbst so viel geschenkt hat, weitergeben – authentisch, mitfühlend und voller Hingabe.",
    en: "Today I want to pass on what has given me so much – authentically, compassionately and with full dedication.",
    es: "Hoy quiero transmitir lo que tanto me ha dado – de manera auténtica, compasiva y con plena dedicación.",
  },
  "about.p5title": {
    de: "✨ Mein Angebot an Sie:",
    en: "✨ My offering to you:",
    es: "✨ Mi oferta para ti:",
  },
  "about.p5": {
    de: "Nicht nur Techniken zu lernen, sondern eine lebendige Praxis zu erfahren, die Körper, Geist und Seele verbindet – und die Ihnen im Alltag neue Energie, Vertrauen und innere Ruhe schenkt. Gleichzeitig biete ich einen geschützten psychotherapeutischen Raum, in dem persönliche Themen angeschaut, verarbeitet und in neue Stärke verwandelt werden können.",
    en: "Not just to learn techniques, but to experience a living practice that connects body, mind and soul – and that gives you new energy, confidence and inner peace in everyday life. At the same time, I offer a protected psychotherapeutic space where personal issues can be looked at, processed and transformed into new strength.",
    es: "No solo aprender técnicas, sino experimentar una práctica viva que conecta cuerpo, mente y alma – y que te regala nueva energía, confianza y paz interior en la vida cotidiana. Al mismo tiempo, ofrezco un espacio psicoterapéutico protegido donde los temas personales pueden ser observados, procesados y transformados en nueva fuerza.",
  },

  // ── TaoYin Page ──
  "taoyin.heroTitle": {
    de: "Taoyin: was bedeutet es?",
    en: "Taoyin: what does it mean?",
    es: "Taoyin: ¿qué significa?",
  },
  "taoyin.heroText": {
    de: "Tao Yin ist eine jahrtausendealte chinesische Bewegungs- und Atempraxis zur Förderung von Gesundheit und innerer Balance. Sanfte Dehnungen, fließende Bewegungen und gezielte Atemtechniken helfen, Körper und Geist zu harmonisieren. Diese Übungen stärken die Lebensenergie (Qi), lösen Verspannungen und unterstützen ein ganzheitliches Wohlbefinden.",
    en: "Tao Yin is an ancient Chinese movement and breathing practice for promoting health and inner balance. Gentle stretches, flowing movements and targeted breathing techniques help harmonize body and mind. These exercises strengthen life energy (Qi), release tension and support holistic well-being.",
    es: "Tao Yin es una práctica milenaria china de movimiento y respiración para promover la salud y el equilibrio interior. Estiramientos suaves, movimientos fluidos y técnicas de respiración dirigidas ayudan a armonizar cuerpo y mente. Estos ejercicios fortalecen la energía vital (Qi), liberan tensiones y apoyan el bienestar holístico.",
  },
  "taoyin.taoTitle": {
    de: "TAO",
    en: "TAO",
    es: "TAO",
  },
  "taoyin.taoP1": {
    de: "Das Wort \u201eDaoismus\u201c leitet sich ab von \u201eDao\u201c (Tao), einem Begriff der chinesischen Philosophie, der bereits vor dem Daodejing verwendet wurde, aber erst in diesem Text seine zentrale Stellung und besondere, universale Bedeutung erhielt. \u201eDao\u201c bedeutete ursprünglich \u201eWeg\u201c, im klassischen Chinesisch aber bereits \u201eMethode\u201c, \u201ePrinzip\u201c, \u201eder rechte Weg\u201c. Bei Laozi nimmt dann der Begriff des Dao die Bedeutung eines der ganzen Welt zugrunde liegenden, alldurchdringenden Prinzips an. Es ist die höchste Wirklichkeit und das höchste Mysterium, die uranfängliche Einheit, das kosmische Gesetz und Absolute. Aus dem Dao entstehen die \u201ezehntausend Dinge\u201c, also der Kosmos, und auch die Ordnung der Dinge entsteht aus ihm, ähnlich einem Naturgesetz, doch ist dem Dao selbst kein omnipotentes Wesen zuzuschreiben, sondern es ist Ursprung und Vereinigung der Gegensätze, womit es letztlich undefinierbar ist.",
    en: "The word 'Daoism' derives from 'Dao' (Tao), a concept of Chinese philosophy that was already used before the Daodejing, but only received its central position and special, universal meaning in this text. 'Dao' originally meant 'way', but in classical Chinese already meant 'method', 'principle', 'the right path'. With Laozi, the concept of Dao takes on the meaning of an all-pervading principle underlying the whole world. It is the highest reality and the highest mystery, the primordial unity, the cosmic law and the absolute. From the Dao arise the 'ten thousand things', i.e. the cosmos, and the order of things also arises from it, similar to a natural law, but the Dao itself is not to be attributed an omnipotent being, but is the origin and unification of opposites, making it ultimately indefinable.",
    es: "La palabra 'taoísmo' se deriva de 'Dao' (Tao), un concepto de la filosofía china que ya se utilizaba antes del Daodejing, pero solo recibió su posición central y significado especial y universal en este texto. 'Dao' originalmente significaba 'camino', pero en chino clásico ya significaba 'método', 'principio', 'el camino correcto'. Con Laozi, el concepto de Dao adquiere el significado de un principio omnipresente que subyace en todo el mundo. Es la realidad más alta y el misterio más grande, la unidad primordial, la ley cósmica y lo absoluto. Del Dao surgen las 'diez mil cosas', es decir, el cosmos, y el orden de las cosas también surge de él, similar a una ley natural, pero al Dao en sí no se le puede atribuir un ser omnipotente, sino que es el origen y la unificación de los opuestos, lo que lo hace en última instancia indefinible.",
  },
  "taoyin.taoP2": {
    de: "Philosophisch könnte man das Dao als jenseits aller Begrifflichkeit fassen, weil es der Grund des Seins, die transzendente Ursache ist und somit alles, auch den Gegensatz von Sein und Nicht-Sein, enthält. In diesem Sinne kann nichts über das Dao ausgesagt werden, weil jede Definition eine Begrenzung enthält. Das Dao ist aber sowohl unbegrenzte Transzendenz, als auch das dem Kosmos, dem All immanente Prinzip.",
    en: "Philosophically, one could grasp the Dao as beyond all concepts, because it is the ground of being, the transcendent cause and thus contains everything, including the opposition of being and non-being. In this sense, nothing can be said about the Dao, because every definition contains a limitation. But the Dao is both unlimited transcendence and the principle immanent in the cosmos, the universe.",
    es: "Filosóficamente, se podría entender el Dao como más allá de toda conceptualización, porque es el fundamento del ser, la causa trascendente y por lo tanto contiene todo, incluida la oposición entre ser y no ser. En este sentido, nada se puede decir sobre el Dao, porque toda definición contiene una limitación. Pero el Dao es tanto trascendencia ilimitada como el principio inmanente en el cosmos, el universo.",
  },
  "taoyin.taoQuote": {
    de: "\u201eDas Tao, das sich mit Worten beschreiben lässt, ist nicht das wahre Tao.\u201c",
    en: "\"The Tao that can be described in words is not the true Tao.\"",
    es: "\"El Tao que puede describirse con palabras no es el verdadero Tao.\"",
  },
  "taoyin.taoQuoteAuthor": {
    de: "– Lao Tse: Tao Te King",
    en: "– Lao Tzu: Tao Te Ching",
    es: "– Lao Tse: Tao Te King",
  },
  "taoyin.taoP3": {
    de: "Durch das Wirken des Dao wird die Schöpfung durch Zweiheit, das Yin und das Yang, Licht und Schatten, hervorgebracht, aus deren Wandlungen, Bewegungen und Wechselspielen dann die Welt hervorgeht.",
    en: "Through the working of the Dao, creation is brought forth through duality, Yin and Yang, light and shadow, from whose transformations, movements and interplay the world then emerges.",
    es: "A través de la acción del Dao, la creación surge a través de la dualidad, el Yin y el Yang, la luz y la sombra, de cuyas transformaciones, movimientos e interacciones surge entonces el mundo.",
  },
  "taoyin.yinTitle": {
    de: "Yin",
    en: "Yin",
    es: "Yin",
  },
  "taoyin.yinP1": {
    de: "Yin und Yang (chinesisch 陰陽 / 阴阳, Pinyin yīn yáng) sind zwei Begriffe der chinesischen Philosophie, insbesondere des Daoismus. Sie stehen für polar einander entgegengesetzte und dennoch aufeinander bezogene Kräfte oder Prinzipien. Ein weit verbreitetes Symbol des Prinzips ist das Taijitu, in dem das weiße Yang (hell, hart, heiß, männlich, aktiv, Bewegung) und das schwarze Yin (dunkel, weich, kalt, weiblich, passiv, Ruhe) gegenüberstehend dargestellt werden.",
    en: "Yin and Yang (Chinese 陰陽 / 阴阳, Pinyin yīn yáng) are two concepts of Chinese philosophy, especially of Daoism. They represent polar opposing yet interrelated forces or principles. A widely known symbol of the principle is the Taijitu, in which white Yang (bright, hard, hot, masculine, active, movement) and black Yin (dark, soft, cold, feminine, passive, rest) are depicted in contrast.",
    es: "Yin y Yang (chino 陰陽 / 阴阳, Pinyin yīn yáng) son dos conceptos de la filosofía china, especialmente del taoísmo. Representan fuerzas o principios polares opuestos pero interrelacionados. Un símbolo ampliamente conocido del principio es el Taijitu, en el que el Yang blanco (brillante, duro, caliente, masculino, activo, movimiento) y el Yin negro (oscuro, suave, frío, femenino, pasivo, reposo) se representan en contraste.",
  },
  "taoyin.yinSubtitle": {
    de: "Yin und Yang als Prinzipien der Wandlung und der Korrelation",
    en: "Yin and Yang as principles of transformation and correlation",
    es: "Yin y Yang como principios de transformación y correlación",
  },
  "taoyin.yinP2": {
    de: "Yin und Yang bezeichnen \u201eGegensätze\u201c in ihrer wechselseitigen Bezogenheit als eine Gesamtheit, einen ewigen Kreislauf. Daher können sie zur Erklärung von Wandlungsvorgängen und Prozessen und zur Darstellung der gegenseitigen Begrenzung und Wiederkehr von Dingen benutzt werden.",
    en: "Yin and Yang denote 'opposites' in their mutual relatedness as a whole, an eternal cycle. Therefore, they can be used to explain processes of transformation and to represent the mutual limitation and recurrence of things.",
    es: "Yin y Yang denotan 'opuestos' en su interrelación mutua como un todo, un ciclo eterno. Por lo tanto, pueden usarse para explicar procesos de transformación y para representar la limitación mutua y la recurrencia de las cosas.",
  },
  "taoyin.yinP3": {
    de: "Yin und Yang steigen und sinken immer abwechselnd. Nach einer Hochphase des Yang folgt zwingend ein Absinken von Yang und ein Ansteigen von Yin und umgekehrt.",
    en: "Yin and Yang always rise and fall alternately. After a high phase of Yang, a decline of Yang and a rise of Yin inevitably follows and vice versa.",
    es: "Yin y Yang siempre suben y bajan alternadamente. Después de una fase alta de Yang, inevitablemente sigue un descenso de Yang y un ascenso de Yin y viceversa.",
  },
  "taoyin.yinQuote": {
    de: "\u201eDas Urprinzip bewegt sich und erzeugt Yang. Wenn die Bewegung ihr Ende erreicht, so wird sie still, und diese Stille erzeugt Yin. Wenn diese Stille ihr Ende erreicht, dann geht sie wieder in Bewegung über. So haben wir abwechselnd bald Bewegung, bald Ruhe. Sie beide bilden zusammen die Basis, von der aus durch Abtrennung Yin und Yang entstehen und auf der die beiden Modi ruhen.\u201c",
    en: "\"The primordial principle moves and generates Yang. When the movement reaches its end, it becomes still, and this stillness generates Yin. When this stillness reaches its end, it transitions back into movement. Thus we alternately have movement, then rest. Together they form the basis from which Yin and Yang arise through separation and on which the two modes rest.\"",
    es: "\"El principio primordial se mueve y genera Yang. Cuando el movimiento llega a su fin, se detiene, y esta quietud genera Yin. Cuando esta quietud llega a su fin, vuelve a transformarse en movimiento. Así tenemos alternadamente movimiento y reposo. Juntos forman la base de la cual surgen Yin y Yang por separación y sobre la cual descansan ambos modos.\"",
  },
  "taoyin.yinQuoteAuthor": {
    de: "– Alfred Forke",
    en: "– Alfred Forke",
    es: "– Alfred Forke",
  },
  "taoyin.yinP4": {
    de: "Diese Vorstellung gehört zu einer volkstümlichen beziehungsweise für das Volk bestimmten Ethik des mittleren Maßes: So sollte das Volk in guten Zeiten nicht überschwänglich agieren und z. B. eine gute Ernte für schlechte Zeiten lagern. In schlechten Zeiten sollte im Volk Hoffnung erweckt werden, dass nach der Yin-Yang-Lehre nach diesen schlechten Zeiten auch zwingend wieder gute folgen werden.",
    en: "This idea belongs to a folk ethic of moderation: In good times, people should not act exuberantly and, for example, store a good harvest for bad times. In bad times, hope should be awakened among the people that, according to the Yin-Yang teaching, good times will inevitably follow these bad times.",
    es: "Esta idea pertenece a una ética popular de moderación: en tiempos buenos, la gente no debería actuar exuberantemente y, por ejemplo, almacenar una buena cosecha para tiempos malos. En tiempos malos, se debería despertar la esperanza de que, según la enseñanza del Yin-Yang, inevitablemente seguirán tiempos buenos después de estos tiempos malos.",
  },
  "taoyin.yinP5": {
    de: "Die Wandlung von Yin und Yang stellt neben diesen Handlungsweisungen nach den altertümlichen Astronomen auch noch den Grund dar, warum Naturereignisse so ablaufen, wie sie ablaufen, aber auch warum diese Naturereignisse zu einem bestimmten Sozialverhalten führen. So sind Yin und Yang und deren Wandlung sowohl der Grund für den Wandel der Jahreszeiten wie für das Verhalten der Menschen, die sich an dem Wechsel der Jahreszeiten ausrichten.",
    en: "The transformation of Yin and Yang, in addition to these behavioral guidelines according to ancient astronomers, also represents the reason why natural events unfold as they do, but also why these natural events lead to certain social behavior. Thus Yin and Yang and their transformation are both the reason for the change of seasons and for the behavior of people who align themselves with the change of seasons.",
    es: "La transformación de Yin y Yang, además de estas pautas de comportamiento según los astrónomos antiguos, también representa la razón por la cual los eventos naturales se desarrollan como lo hacen, pero también por qué estos eventos naturales conducen a ciertos comportamientos sociales. Así, Yin y Yang y su transformación son tanto la razón del cambio de estaciones como del comportamiento de las personas que se alinean con el cambio de estaciones.",
  },
  "taoyin.yinP6": {
    de: "Yin und Yang können nicht gleichzeitig ansteigen oder absinken. Wenn Yang sich vergrößert, verringert sich Yin und umgekehrt.",
    en: "Yin and Yang cannot rise or fall simultaneously. When Yang increases, Yin decreases and vice versa.",
    es: "Yin y Yang no pueden subir o bajar simultáneamente. Cuando Yang aumenta, Yin disminuye y viceversa.",
  },
  "taoyin.taoyinTitle": {
    de: "TAOYIN",
    en: "TAOYIN",
    es: "TAOYIN",
  },
  "taoyin.taoyinP1": {
    de: "Tao Yin (manchmal als Taoist Yoga bezeichnet) ist eine Reihe von Übungen (vor allem in liegenden und sitzenden Positionen, aber auch in stehenden Positionen) von Taoisten, um ch'i, die innere Energie des Körpers nach traditioneller chinesischer Medizin zu pflegen. Die Praxis von Tao Yin war ein Vorläufer des Qigong und wurde in chinesischen taoistischen Klöstern für die Gesundheit und zur spirituellen Kultivierung praktiziert. Tao Yin ist auch ein Element in der bekannten \u201eweichen Stil\u201c chinesischen Kampfkunst, T'ai Chi Ch'uan.",
    en: "Tao Yin (sometimes referred to as Taoist Yoga) is a series of exercises (mainly in lying and sitting positions, but also in standing positions) practiced by Taoists to cultivate ch'i, the body's internal energy according to traditional Chinese medicine. The practice of Tao Yin was a precursor to Qigong and was practiced in Chinese Taoist monasteries for health and spiritual cultivation. Tao Yin is also an element in the well-known 'soft style' Chinese martial art, T'ai Chi Ch'uan.",
    es: "Tao Yin (a veces denominado Yoga Taoísta) es una serie de ejercicios (principalmente en posiciones acostadas y sentadas, pero también de pie) practicados por taoístas para cultivar el ch'i, la energía interna del cuerpo según la medicina tradicional china. La práctica de Tao Yin fue un precursor del Qigong y se practicaba en monasterios taoístas chinos para la salud y el cultivo espiritual. Tao Yin también es un elemento en el conocido arte marcial chino de 'estilo suave', T'ai Chi Ch'uan.",
  },
  "taoyin.taoyinP2": {
    de: "Das Hauptziel von Tao Yin ist es, Gleichgewicht zwischen inneren und äußeren Energien zu schaffen und Körper, Geist und Seele neu zu beleben, und Kraft und Flexibilität in Muskeln und Sehnen zu entwickeln.",
    en: "The main goal of Tao Yin is to create balance between internal and external energies and to revitalize body, mind and soul, and to develop strength and flexibility in muscles and tendons.",
    es: "El objetivo principal de Tao Yin es crear equilibrio entre las energías internas y externas y revitalizar cuerpo, mente y alma, y desarrollar fuerza y flexibilidad en músculos y tendones.",
  },
  "taoyin.taoyinP3": {
    de: "Im Taoyin Zentrum Ingolstadt erweitern wir diese beiden Aspekte der taoistischen Gedankenwelt. Unsere heutige Welt hat bereits genug Yang aufzuweisen – der Yin Charakter dagegen fehlt. Wir möchten diesen Yin Charakter in uns stärken und in der Welt zur Geltung bringen für eine bessere und ausgewogenere Lebensweise für uns und unsere Kinder.",
    en: "At the Taoyin Center Ingolstadt, we expand these two aspects of Taoist thought. Our world today already has enough Yang – the Yin character, on the other hand, is lacking. We want to strengthen this Yin character within us and bring it to bear in the world for a better and more balanced way of life for us and our children.",
    es: "En el Centro Taoyin Ingolstadt, ampliamos estos dos aspectos del pensamiento taoísta. Nuestro mundo actual ya tiene suficiente Yang – el carácter Yin, en cambio, falta. Queremos fortalecer este carácter Yin en nosotros y hacerlo valer en el mundo para una forma de vida mejor y más equilibrada para nosotros y nuestros hijos.",
  },
  "taoyin.taoyinSign": {
    de: "Euer Taoyin Team",
    en: "Your Taoyin Team",
    es: "Vuestro equipo Taoyin",
  },

  // ── QiGong Page ──
  "qigong.heroTitle": {
    de: "Was ist Qigong?",
    en: "What is Qigong?",
    es: "¿Qué es Qigong?",
  },
  "qigong.heroText": {
    de: "Qigong ist eine traditionelle chinesische Praxis zur Pflege von Gesundheit, Energie und innerer Ruhe. Sie verbindet sanfte Bewegungen, Atemübungen und meditative Konzentration zu einem harmonischen Ganzen. Regelmäßiges Üben stärkt das Qi, fördert Vitalität und unterstützt seelisches Gleichgewicht.",
    en: "Qigong is a traditional Chinese practice for cultivating health, energy and inner calm. It combines gentle movements, breathing exercises and meditative concentration into a harmonious whole. Regular practice strengthens Qi, promotes vitality and supports emotional balance.",
    es: "Qigong es una práctica tradicional china para cultivar la salud, la energía y la calma interior. Combina movimientos suaves, ejercicios de respiración y concentración meditativa en un todo armonioso. La práctica regular fortalece el Qi, promueve la vitalidad y apoya el equilibrio emocional.",
  },
  "qigong.medTitle": {
    de: "Medizinisches Qigong",
    en: "Medical Qigong",
    es: "Qigong Médico",
  },
  "qigong.medP1": {
    de: "Medizinisches Qigong wurde nicht nur im alten China, sondern auch heute in China eingesetzt, um eine Vielzahl von Krankheiten zu behandeln. Es wird oft in Verbindung mit Kräutern aus der chinesischen Medizin und mittlerweile auch in der westlichen Medizin verwendet. Es konzentriert sich auf Meridianwege und innere Organe des Körpers. Es wird in chinesischen Krankenhäusern in ganz China und seit Jahrhunderten im Osten verwendet.",
    en: "Medical Qigong has been used not only in ancient China but also in China today to treat a variety of diseases. It is often used in conjunction with herbs from Chinese medicine and now also in Western medicine. It focuses on meridian pathways and internal organs of the body. It is used in Chinese hospitals throughout China and has been used in the East for centuries.",
    es: "El Qigong Médico se ha utilizado no solo en la antigua China sino también en la China actual para tratar una variedad de enfermedades. A menudo se usa en combinación con hierbas de la medicina china y ahora también en la medicina occidental. Se concentra en las vías de los meridianos y los órganos internos del cuerpo. Se utiliza en hospitales chinos en toda China y se ha usado en Oriente durante siglos.",
  },
  "qigong.whenTitle": {
    de: "Wann medizinisches Qigong angewendet werden kann",
    en: "When medical Qigong can be applied",
    es: "Cuándo se puede aplicar el Qigong Médico",
  },
  "qigong.whenText": {
    de: "Diese Praktiken wurden in China seit jeher und noch bis heute verwendet, um verschiedene Erkrankungen zu behandeln wie:",
    en: "These practices have been used in China since ancient times and still today to treat various conditions such as:",
    es: "Estas prácticas se han utilizado en China desde la antigüedad y hasta hoy para tratar diversas afecciones como:",
  },
  "qigong.conditions": {
    de: "Krebs (alle Arten),Sportverletzungen,Gastrointestinale Störungen,Orthopädische Erkrankungen,Gebrochene Knochen,Verstauchungen,Erkältung,Grippe,Emotionale Störungen,Depression,ADHS,Bipolare Störung",
    en: "Cancer (all types),Sports injuries,Gastrointestinal disorders,Orthopedic conditions,Broken bones,Sprains,Common cold,Flu,Emotional disorders,Depression,ADHD,Bipolar disorder",
    es: "Cáncer (todos los tipos),Lesiones deportivas,Trastornos gastrointestinales,Enfermedades ortopédicas,Huesos rotos,Esguinces,Resfriado,Gripe,Trastornos emocionales,Depresión,TDAH,Trastorno bipolar",
  },
  "qigong.certTitle": {
    de: "Möchten Sie zertifizierter Qigong-Praktiker werden? Wir können helfen!",
    en: "Want to become a certified Qigong practitioner? We can help!",
    es: "¿Quieres convertirte en practicante certificado de Qigong? ¡Podemos ayudarte!",
  },
  "qigong.certP1": {
    de: "Interessiert an einer Ausbildung zum zertifizierten Praktiker?",
    en: "Interested in training to become a certified practitioner?",
    es: "¿Interesado en formarte como practicante certificado?",
  },
  "qigong.certP2": {
    de: "Unser einzigartiges Programm geht tief in Qigong Entwicklung. Wir lehren und begleiten Dich, wie Du Dich selbst und andere durch regelmäßige Qigong-Praktiken heilen kannst. Du lernst spezifische Übungen für verschiedene Organprobleme, Krankheiten und andere Leiden.",
    en: "Our unique program goes deep into Qigong development. We teach and guide you on how to heal yourself and others through regular Qigong practices. You will learn specific exercises for various organ problems, diseases and other ailments.",
    es: "Nuestro programa único profundiza en el desarrollo del Qigong. Te enseñamos y acompañamos en cómo sanarte a ti mismo y a otros a través de prácticas regulares de Qigong. Aprenderás ejercicios específicos para diversos problemas orgánicos, enfermedades y otras dolencias.",
  },
  "qigong.whoTitle": {
    de: "Wer kann an unseren medizinischen Qigong-Kursen teilnehmen?",
    en: "Who can participate in our medical Qigong courses?",
    es: "¿Quién puede participar en nuestros cursos de Qigong Médico?",
  },
  "qigong.whoP1": {
    de: "Es ist nie zu spät oder zu früh, um Qigong zu lernen!",
    en: "It's never too late or too early to learn Qigong!",
    es: "¡Nunca es demasiado tarde o demasiado pronto para aprender Qigong!",
  },
  "qigong.whoP2": {
    de: "Ob Du neu bei Qigong oder ein fortgeschrittener Praktiker bist, Du kannst von unserem vollen Kurs Curriculum lernen und profitieren. Wir haben persönlich Medical Qigong für Studenten im Jugendalter bis hin zu Patienten und Studenten in den 80igern unterrichtet.",
    en: "Whether you are new to Qigong or an advanced practitioner, you can learn and benefit from our full course curriculum. We have personally taught Medical Qigong to students in their teens through to patients and students in their 80s.",
    es: "Ya seas nuevo en Qigong o un practicante avanzado, puedes aprender y beneficiarte de nuestro plan de estudios completo. Hemos enseñado personalmente Qigong Médico a estudiantes adolescentes hasta pacientes y estudiantes en sus 80 años.",
  },
  "qigong.whoP3": {
    de: "Dies ist offen für jede Ebene der Qigong-Praktiker: Anfänger oder Fortgeschrittene. Anmeldung gerne im Taoyin Zentrum oder telefonisch.",
    en: "This is open to all levels of Qigong practitioners: beginners or advanced. Registration is welcome at the Taoyin Center or by phone.",
    es: "Esto está abierto a todos los niveles de practicantes de Qigong: principiantes o avanzados. La inscripción es bienvenida en el Centro Taoyin o por teléfono.",
  },

  // ── Chi Nei Tsang Page ──
  "cnt.heroTitle": {
    de: "Chi Nei Tsang Massage",
    en: "Chi Nei Tsang Massage",
    es: "Masaje Chi Nei Tsang",
  },
  "cnt.heroText": {
    de: "Chi Nei Tsang ist eine traditionelle taoistische Bauchmassage, die innere Organe sanft löst und energetisch harmonisiert. Sie arbeitet mit tiefen, achtsamen Berührungen im Bauchraum, um Blockaden zu lösen und den Energiefluss zu fördern. Diese Technik unterstützt Verdauung, Entgiftung und emotionales Gleichgewicht.",
    en: "Chi Nei Tsang is a traditional Taoist abdominal massage that gently releases and energetically harmonizes the internal organs. It works with deep, mindful touches in the abdominal area to release blockages and promote energy flow. This technique supports digestion, detoxification and emotional balance.",
    es: "Chi Nei Tsang es un masaje abdominal taoísta tradicional que libera suavemente y armoniza energéticamente los órganos internos. Trabaja con toques profundos y conscientes en el área abdominal para liberar bloqueos y promover el flujo de energía. Esta técnica apoya la digestión, la desintoxicación y el equilibrio emocional.",
  },
  "cnt.s1Title": {
    de: "Tiefe Bauchmassage für Wohlbefinden und innere Balance",
    en: "Deep abdominal massage for well-being and inner balance",
    es: "Masaje abdominal profundo para el bienestar y el equilibrio interior",
  },
  "cnt.s1P1": {
    de: "Chi Nei Tsang ist eine sanfte, aber wirkungsvolle Massageform aus der taoistischen Heiltradition Chinas. Der Name bedeutet übersetzt \u201edie inneren Organe pflegen\u201c und beschreibt den Kern dieser Methode: Durch achtsame, tiefgehende Berührungen im Bauchraum werden Verspannungen gelöst, die Organe entspannt und der Energiefluss im Körper harmonisiert.",
    en: "Chi Nei Tsang is a gentle yet effective form of massage from the Taoist healing tradition of China. The name translates to 'nurturing the internal organs' and describes the core of this method: Through mindful, deep touches in the abdominal area, tensions are released, organs are relaxed and the energy flow in the body is harmonized.",
    es: "Chi Nei Tsang es una forma de masaje suave pero efectiva de la tradición curativa taoísta de China. El nombre se traduce como 'cuidar los órganos internos' y describe el núcleo de este método: A través de toques conscientes y profundos en el área abdominal, se liberan tensiones, se relajan los órganos y se armoniza el flujo de energía en el cuerpo.",
  },
  "cnt.s1P2": {
    de: "Unser Bauch wird oft als \u201ezweites Gehirn\u201c bezeichnet – hier sitzen nicht nur wichtige Organe, sondern auch viele Nervenbahnen und emotionale Erinnerungen. Stress, falsche Ernährung oder ungelöste Emotionen können dazu führen, dass sich Anspannung und Blockaden in diesem Bereich festsetzen. Chi Nei Tsang hilft, diese sanft zu lösen und den Körper von innen heraus zu regenerieren.",
    en: "Our belly is often called the 'second brain' – not only important organs are located here, but also many nerve pathways and emotional memories. Stress, poor nutrition or unresolved emotions can cause tension and blockages to settle in this area. Chi Nei Tsang helps to gently release these and regenerate the body from the inside out.",
    es: "Nuestro vientre a menudo se llama el 'segundo cerebro' – aquí se encuentran no solo órganos importantes, sino también muchas vías nerviosas y memorias emocionales. El estrés, la mala alimentación o las emociones no resueltas pueden hacer que la tensión y los bloqueos se asienten en esta área. Chi Nei Tsang ayuda a liberarlos suavemente y regenerar el cuerpo desde adentro hacia afuera.",
  },
  "cnt.s1P3": {
    de: "Während einer Behandlung liegst du entspannt auf einer Liege. Mit gezielten, kreisenden und drückenden Bewegungen arbeite ich an deinem Bauchbereich, immer im Einklang mit deinem Atemrhythmus. Dabei kann sich ein Gefühl von tiefer Entspannung, innerer Leichtigkeit und mehr Energie einstellen.",
    en: "During a treatment, you lie relaxed on a treatment table. With targeted, circular and pressing movements, I work on your abdominal area, always in harmony with your breathing rhythm. This can create a feeling of deep relaxation, inner lightness and more energy.",
    es: "Durante un tratamiento, te recuestas relajado en una camilla. Con movimientos dirigidos, circulares y de presión, trabajo en tu área abdominal, siempre en armonía con tu ritmo respiratorio. Esto puede crear una sensación de relajación profunda, ligereza interior y más energía.",
  },
  "cnt.s2Title": {
    de: "Mögliche Wirkungen von Chi Nei Tsang:",
    en: "Possible effects of Chi Nei Tsang:",
    es: "Posibles efectos del Chi Nei Tsang:",
  },
  "cnt.s2Li1": {
    de: "Verbesserung der Verdauung und Entgiftung",
    en: "Improvement of digestion and detoxification",
    es: "Mejora de la digestión y desintoxicación",
  },
  "cnt.s2Li2": {
    de: "Lösen von körperlichen und emotionalen Spannungen",
    en: "Release of physical and emotional tensions",
    es: "Liberación de tensiones físicas y emocionales",
  },
  "cnt.s2Li3": {
    de: "Stärkung des Immunsystems",
    en: "Strengthening of the immune system",
    es: "Fortalecimiento del sistema inmunológico",
  },
  "cnt.s2Li4": {
    de: "Förderung von innerer Ruhe und Ausgeglichenheit",
    en: "Promotion of inner calm and balance",
    es: "Promoción de la calma interior y el equilibrio",
  },
  "cnt.s2Li5": {
    de: "Unterstützung des Energieflusses (Qi) im gesamten Körper",
    en: "Support of energy flow (Qi) throughout the body",
    es: "Apoyo al flujo de energía (Qi) en todo el cuerpo",
  },
  "cnt.s2P1": {
    de: "Chi Nei Tsang ist für Menschen jeden Alters geeignet und kann sowohl präventiv als auch begleitend zu anderen Gesundheits- und Entspannungsmethoden angewendet werden. Die Behandlung ist sanft, achtsam und immer auf deine individuellen Bedürfnisse abgestimmt.",
    en: "Chi Nei Tsang is suitable for people of all ages and can be used both preventively and as a complement to other health and relaxation methods. The treatment is gentle, mindful and always tailored to your individual needs.",
    es: "Chi Nei Tsang es adecuado para personas de todas las edades y se puede usar tanto de forma preventiva como complementaria a otros métodos de salud y relajación. El tratamiento es suave, consciente y siempre adaptado a tus necesidades individuales.",
  },
  "cnt.s2P2": {
    de: "Gönne dir diese besondere Form der Selbstfürsorge und erlebe, wie sich dein Bauch – und damit dein ganzes Wohlbefinden – entspannen kann.",
    en: "Treat yourself to this special form of self-care and experience how your belly – and thus your entire well-being – can relax.",
    es: "Date esta forma especial de autocuidado y experimenta cómo tu vientre – y con él todo tu bienestar – puede relajarse.",
  },
  "cnt.s3Title": {
    de: "1-Jährige Ausbildung",
    en: "1-Year Training Program",
    es: "Programa de Formación de 1 Año",
  },
  "cnt.s3P1": {
    de: "Der Darm! das Organ, das wir am wenigsten wertschätzen – Übergewicht, Burn-Out, Probleme mit der Haut – Alltagsbeschwerden, deren Verbindung zur Darmflora werden von Tag zu Tag offensichtlicher. Wir fühlen uns wohl, leben länger und glücklicher und gesünder, nur wenn wir auch unseren Darm entsprechend pflegen und im Gleichgewicht halten.",
    en: "The gut! The organ we value least – overweight, burnout, skin problems – everyday ailments whose connection to gut flora is becoming more obvious day by day. We feel well, live longer and happier and healthier, only when we also care for our gut accordingly and keep it in balance.",
    es: "¡El intestino! El órgano que menos valoramos – sobrepeso, burnout, problemas de piel – dolencias cotidianas cuya conexión con la flora intestinal se hace más evidente día a día. Nos sentimos bien, vivimos más y más felices y saludables, solo cuando también cuidamos nuestro intestino adecuadamente y lo mantenemos en equilibrio.",
  },
  "cnt.s3P2": {
    de: "Ich freue mich, Ihnen die Chi Nei Tsang (Bauch-)Massage in Form einer Ausbildung zum CNT Practitioner nach Mantak Chia näher bringen zu können. Der Darm steht im Fokus genauso wie alle damit verbundenen und davon beeinflussten Organe.",
    en: "I am pleased to be able to introduce you to Chi Nei Tsang (abdominal) massage in the form of training to become a CNT Practitioner according to Mantak Chia. The gut is the focus, as well as all connected and influenced organs.",
    es: "Me complace poder presentarte el masaje Chi Nei Tsang (abdominal) en forma de una formación para convertirte en Practicante CNT según Mantak Chia. El intestino es el foco, así como todos los órganos conectados e influenciados.",
  },
  "cnt.s3P3": {
    de: "Chi Nei Tsang ist eine besondere Form der Massage, mit Grundlagen in der Traditionellen Chinesischen Medizin, dem Taoismus und damit auch dem Medizinischen Qigong. Anatomie spielt eine genauso wichtige Rolle wie Fokus und Achtsamkeit auf die involvierten Organe und Energiekreise.",
    en: "Chi Nei Tsang is a special form of massage, with foundations in Traditional Chinese Medicine, Taoism and thus also Medical Qigong. Anatomy plays an equally important role as focus and mindfulness on the involved organs and energy circuits.",
    es: "Chi Nei Tsang es una forma especial de masaje, con fundamentos en la Medicina Tradicional China, el taoísmo y por lo tanto también el Qigong Médico. La anatomía juega un papel igualmente importante como el enfoque y la atención plena en los órganos involucrados y los circuitos de energía.",
  },
  "cnt.s3P4": {
    de: "Die Ausbildung ist geeignet für Therapeuten, Heilpraktiker (Allgemein oder der Psychotherapie), Masseure jeglicher Fachrichtung oder Personen mit einer besonderen Affinität zur Massage. Der Kursplan beruht auf dem Studienplan von Großmeister Mantak Chia und läuft über 10 Wochenenden mit Theorie gefolgt von intensiver Praxis.",
    en: "The training is suitable for therapists, alternative practitioners (general or psychotherapy), massage therapists of any specialty or persons with a special affinity for massage. The curriculum is based on the study plan of Grand Master Mantak Chia and runs over 10 weekends with theory followed by intensive practice.",
    es: "La formación es adecuada para terapeutas, profesionales de la salud alternativa (general o psicoterapia), masajistas de cualquier especialidad o personas con una afinidad especial por el masaje. El plan de estudios se basa en el programa de estudio del Gran Maestro Mantak Chia y se desarrolla en 10 fines de semana con teoría seguida de práctica intensiva.",
  },
  "cnt.s3P5": {
    de: "In der Ausbildung wird deshalb sehr viel Fokus auf die Praxis der Massagetechniken und der Meditation als auch auf die medizinische Theorie und Anatomie gelegt.",
    en: "In the training, a great deal of focus is therefore placed on the practice of massage techniques and meditation as well as on medical theory and anatomy.",
    es: "En la formación, por lo tanto, se pone mucho énfasis en la práctica de técnicas de masaje y meditación, así como en la teoría médica y la anatomía.",
  },
  "cnt.s3ContentTitle": {
    de: "Inhalte der Ausbildung:",
    en: "Training contents:",
    es: "Contenidos de la formación:",
  },
  "cnt.s3Contents": {
    de: "Grundlagen des Chi Nei Tsang,Anatomie der Bauchregion, der inneren Organe, des Lymphsystems, des kardiovaskulären Systems und des Bewegungsapparates,Aktivierung, Entgiftung und Ausgleichen der inneren Organe,Entgiftung des Gewebes und des Lymphsystems,Verarbeitung von emotionalen Spannungen,Wirbelsäule, Rückenmuskulatur und Kreuzbein,Ernährung,Energiearbeit,Vorbereitungen für die Praxis",
    en: "Basics of Chi Nei Tsang,Anatomy of the abdominal region, internal organs, lymphatic system, cardiovascular system and musculoskeletal system,Activation, detoxification and balancing of internal organs,Detoxification of tissue and lymphatic system,Processing of emotional tensions,Spine, back muscles and sacrum,Nutrition,Energy work,Preparations for practice",
    es: "Fundamentos del Chi Nei Tsang,Anatomía de la región abdominal, órganos internos, sistema linfático, sistema cardiovascular y sistema musculoesquelético,Activación, desintoxicación y equilibrio de los órganos internos,Desintoxicación del tejido y sistema linfático,Procesamiento de tensiones emocionales,Columna vertebral, musculatura de la espalda y sacro,Nutrición,Trabajo energético,Preparaciones para la práctica",
  },

  // ── Psychotherapie Page ──
  "psycho.heroTitle": {
    de: "Willkommen in meiner Praxis für ganzheitliche Psychotherapie",
    en: "Welcome to my practice for holistic psychotherapy",
    es: "Bienvenido a mi consulta de psicoterapia holística",
  },
  "psycho.heroText": {
    de: "Ich arbeite mit klassischen Verfahren wie Entspannungstechniken und Verhaltenstherapie sowie mit alternativen Methoden aus den Bereichen der Meditation, des Qigong, des Tai Chi und der Ernährung nach den 5 Elementen.",
    en: "I work with classical methods such as relaxation techniques and behavioral therapy as well as alternative methods from the areas of meditation, Qigong, Tai Chi and nutrition according to the 5 elements.",
    es: "Trabajo con métodos clásicos como técnicas de relajación y terapia conductual, así como con métodos alternativos de las áreas de meditación, Qigong, Tai Chi y nutrición según los 5 elementos.",
  },
  "psycho.heroBtn1": {
    de: "Mehr erfahren",
    en: "Learn more",
    es: "Saber más",
  },
  "psycho.heroBtn2": {
    de: "Therapien entdecken",
    en: "Explore therapies",
    es: "Descubrir terapias",
  },
  "psycho.detail1Eyebrow": {
    de: "Orientierung. Stabilisierung. Unterstützung",
    en: "Orientation. Stabilization. Support",
    es: "Orientación. Estabilización. Apoyo",
  },
  "psycho.detail1Title": {
    de: "Ihr Ziel & die Behandlung",
    en: "Your goal & the treatment",
    es: "Tu objetivo y el tratamiento",
  },
  "psycho.detail1Text": {
    de: "Sie stehen an einem Scheideweg? Sie befinden sich in einer Krise? Sie fühlen sich unwohl? Egal was das aktuelle Problem ist, gemeinsam finden wir eine Lösung und die passende Therapie. Ob Beratung, Einzelsitzungen oder eine körperorientierte Psychotherapie. Mein ganzheitlicher Ansatz bringt den Körper und Geist wieder in Einklang.",
    en: "Are you at a crossroads? Are you in a crisis? Do you feel unwell? Whatever the current problem is, together we will find a solution and the right therapy. Whether counseling, individual sessions or body-oriented psychotherapy. My holistic approach brings body and mind back into harmony.",
    es: "¿Estás en una encrucijada? ¿Estás en una crisis? ¿Te sientes mal? Sea cual sea el problema actual, juntos encontraremos una solución y la terapia adecuada. Ya sea asesoramiento, sesiones individuales o psicoterapia orientada al cuerpo. Mi enfoque holístico vuelve a armonizar cuerpo y mente.",
  },
  "psycho.detail1Link": {
    de: "Mehr erfahren",
    en: "Learn more",
    es: "Saber más",
  },
  "psycho.detail2Eyebrow": {
    de: "Estela Fuchs",
    en: "Estela Fuchs",
    es: "Estela Fuchs",
  },
  "psycho.detail2Title": {
    de: "Über mich",
    en: "About me",
    es: "Sobre mí",
  },
  "psycho.detail2Text": {
    de: "Seit vielen Jahren begleite ich Menschen psychotherapeutisch auf ihrem Weg zu mehr Klarheit, innerer Stabilität und Selbstvertrauen. In meiner Arbeit verbinde ich bewährte Methoden der Psychotherapie mit achtsamen Körper- und Atemübungen sowie taoistischen Praktiken, die das seelische Wachstum unterstützen und vertiefen.\n\nDiese Kombination ermöglicht es, nicht nur über Gedanken und Gefühle zu sprechen, sondern auch den Körper einzubeziehen – und damit Heilung auf mehreren Ebenen zu fördern.\n\nMein Anliegen ist es, Menschen dabei zu unterstützen, ihre eigenen Ressourcen zu entdecken, Krisen zu bewältigen und einen liebevollen Zugang zu sich selbst zu finden.",
    en: "For many years I have been accompanying people psychotherapeutically on their path to more clarity, inner stability and self-confidence. In my work I combine proven methods of psychotherapy with mindful body and breathing exercises as well as Taoist practices that support and deepen emotional growth.\n\nThis combination makes it possible not only to talk about thoughts and feelings, but also to include the body – and thus promote healing on multiple levels.\n\nMy concern is to support people in discovering their own resources, overcoming crises and finding a loving approach to themselves.",
    es: "Durante muchos años he acompañado a personas psicoterapéuticamente en su camino hacia más claridad, estabilidad interior y autoconfianza. En mi trabajo combino métodos probados de psicoterapia con ejercicios conscientes de cuerpo y respiración, así como prácticas taoístas que apoyan y profundizan el crecimiento emocional.\n\nEsta combinación permite no solo hablar sobre pensamientos y sentimientos, sino también incluir el cuerpo – y así promover la sanación en múltiples niveles.\n\nMi interés es apoyar a las personas a descubrir sus propios recursos, superar crisis y encontrar un acceso amoroso a sí mismas.",
  },
  "psycho.detail2Link": {
    de: "Mehr erfahren",
    en: "Learn more",
    es: "Saber más",
  },
  "psycho.detail3Eyebrow": {
    de: "Ich berate und unterstütze Sie gerne",
    en: "I am happy to advise and support you",
    es: "Estaré encantada de asesorarte y apoyarte",
  },
  "psycho.detail3Title": {
    de: "Taoyin Zentrum Ingolstadt",
    en: "Taoyin Center Ingolstadt",
    es: "Centro Taoyin Ingolstadt",
  },
  "psycho.detail3Text": {
    de: "Entdecke sanfte taoistische Praktiken, die Körper, Geist und Seele verbinden – für mehr Energie, Gelassenheit und Wohlbefinden im Alltag.",
    en: "Discover gentle Taoist practices that connect body, mind and soul – for more energy, serenity and well-being in everyday life.",
    es: "Descubre prácticas taoístas suaves que conectan cuerpo, mente y alma – para más energía, serenidad y bienestar en la vida cotidiana.",
  },
  "psycho.detail3Link": {
    de: "zum Taoyin Zentrum",
    en: "to the Taoyin Center",
    es: "al Centro Taoyin",
  },
  "psycho.therapiesTitle": {
    de: "Meine Therapie-Angebote",
    en: "My therapy offerings",
    es: "Mis ofertas terapéuticas",
  },
  "psycho.therapiesMore": {
    de: "Mehr Details",
    en: "More details",
    es: "Más detalles",
  },
  "psycho.therapiesInquiry": {
    de: "Therapie Anfragen",
    en: "Therapy inquiries",
    es: "Consultas terapéuticas",
  },

  // ── Therapien Page ──
  "therapien.heroTitle": {
    de: "Meine Therapien im Detail",
    en: "My therapies in detail",
    es: "Mis terapias en detalle",
  },
  "therapien.heroText": {
    de: "Erfahren Sie mehr zu meinen therapeutischen Ansätzen und verstehen Sie meinen ganzheitlichen Ansatz.",
    en: "Learn more about my therapeutic approaches and understand my holistic approach.",
    es: "Conozca más sobre mis enfoques terapéuticos y comprenda mi enfoque holístico.",
  },

  // ── Behandlung Page ──
  "behandlung.heroTitle": {
    de: "Ihr Ziel, meine Behandlung",
    en: "Your goal, my treatment",
    es: "Tu objetivo, mi tratamiento",
  },
  "behandlung.heroText": {
    de: "Erfahren Sie mehr über das Ziel der Behandlung und mein Vorgehen. Damit wir zusammen den richtigen Ansatz finden können.",
    en: "Learn more about the goal of the treatment and my approach. So that we can find the right approach together.",
    es: "Conozca más sobre el objetivo del tratamiento y mi enfoque. Para que podamos encontrar el enfoque correcto juntos.",
  },
  "behandlung.ihrZiel": {
    de: "Ihr Ziel",
    en: "Your goal",
    es: "Tu objetivo",
  },
  "behandlung.orientTitle": {
    de: "Orientierung",
    en: "Orientation",
    es: "Orientación",
  },
  "behandlung.orientText": {
    de: "Sie stehen an einem Scheideweg? Wichtige Entscheidungen liegen vor Ihnen? Sie suchen nach Halt und Orientierung? nach innerer Ruhe und Sicherheit, ohne von externen Faktoren getrieben und beeinflußt zu werden? Sie suchen nach Distanz vom täglichen Alltag? Sie sind auf der Suche nach Ihrem inneren Selbst?",
    en: "Are you at a crossroads? Important decisions lie ahead? Are you looking for support and orientation? For inner calm and security, without being driven and influenced by external factors? Are you looking for distance from daily routine? Are you searching for your inner self?",
    es: "¿Estás en una encrucijada? ¿Tienes decisiones importantes por delante? ¿Buscas apoyo y orientación? ¿Calma interior y seguridad, sin ser impulsado e influenciado por factores externos? ¿Buscas distancia de la rutina diaria? ¿Estás en busca de tu ser interior?",
  },
  "behandlung.stabilTitle": {
    de: "Stabilisierung",
    en: "Stabilization",
    es: "Estabilización",
  },
  "behandlung.stabilText": {
    de: "Sie befinden sich in einer Krise? Ihr Leben hat sich in beabsichtigter oder unbeabsichtigter Weise verändert und Sie fühlen sich überfordert? Sie finden keine Erholung und sehen wenig Alternativen? Sie fühlen sich krank oder schwach obwohl der Arzt Ihnen keinen Befund nennen kann? Sie suchen Hilfe über das Gespräch mit Anderen?",
    en: "Are you in a crisis? Has your life changed in an intended or unintended way and you feel overwhelmed? Can you find no recovery and see few alternatives? Do you feel sick or weak even though the doctor cannot name a diagnosis? Are you seeking help through conversation with others?",
    es: "¿Estás en una crisis? ¿Tu vida ha cambiado de manera intencionada o no intencionada y te sientes abrumado? ¿No encuentras recuperación y ves pocas alternativas? ¿Te sientes enfermo o débil aunque el médico no pueda darte un diagnóstico? ¿Buscas ayuda a través de la conversación con otros?",
  },
  "behandlung.untersTitle": {
    de: "Unterstützung",
    en: "Support",
    es: "Apoyo",
  },
  "behandlung.untersText": {
    de: "Sie fühlen sich unwohl? Sie leiden unter psychischen oder körperlichen Symptomen und machen sich Gedanken dazu? Sie suchen Heilpraktiker der Psychotherapie als Ansprechpartner und Berater? Sie suchen nach konkreten psychotherapeutischen Behandlungsmöglichkeiten?",
    en: "Do you feel unwell? Do you suffer from psychological or physical symptoms and are concerned about them? Are you looking for an alternative practitioner of psychotherapy as a contact and advisor? Are you looking for concrete psychotherapeutic treatment options?",
    es: "¿Te sientes mal? ¿Sufres de síntomas psicológicos o físicos y te preocupas por ellos? ¿Buscas un profesional de la psicoterapia como interlocutor y asesor? ¿Buscas opciones concretas de tratamiento psicoterapéutico?",
  },
  "behandlung.dieBehandlung": {
    de: "Die Behandlung",
    en: "The treatment",
    es: "El tratamiento",
  },
  "behandlung.beratungTitle": {
    de: "Beratung",
    en: "Counseling",
    es: "Asesoramiento",
  },
  "behandlung.beratungText": {
    de: "Lernen Sie uns kennen. Im Gespräch tasten wir uns an Ihr ganz persönliches Bedürfnis heran und entscheiden gemeinsam die für Sie beste Vorgehensweise. Das erste Gespräch ist unverbindlich und kostenfrei und erlaubt Ihnen, Einblick in unser Denken und Handeln zu gewinnen.",
    en: "Get to know us. In conversation, we approach your very personal needs and decide together the best course of action for you. The first consultation is non-binding and free of charge and allows you to gain insight into our thinking and approach.",
    es: "Conózcanos. En la conversación, nos acercamos a sus necesidades muy personales y decidimos juntos el mejor curso de acción para usted. La primera consulta es sin compromiso y gratuita y le permite conocer nuestra forma de pensar y actuar.",
  },
  "behandlung.einzelTitle": {
    de: "Einzelsitzungen",
    en: "Individual sessions",
    es: "Sesiones individuales",
  },
  "behandlung.einzelText1": {
    de: "In einzelnen Sitzungen gehen wir Schritt für Schritt auf Ihre Bedürfnisse ein und arbeiten an den für Sie wichtigen Themen. Gerne können die verschiedenen Methoden auch nur zum Kennenlernen ausprobiert werden.",
    en: "In individual sessions we address your needs step by step and work on the topics that are important to you. The various methods can also be tried out just to get to know them.",
    es: "En sesiones individuales abordamos tus necesidades paso a paso y trabajamos en los temas que son importantes para ti. Los distintos métodos también pueden probarse solo para conocerlos.",
  },
  "behandlung.einzelText2": {
    de: "Unser Ziel ist es, dass Sie die Verantwortung für Ihre eigene Gesundheit übernehmen können und selbst entscheiden, was Ihnen gut tut.",
    en: "Our goal is for you to be able to take responsibility for your own health and decide for yourself what is good for you.",
    es: "Nuestro objetivo es que puedas asumir la responsabilidad de tu propia salud y decidir por ti mismo lo que te hace bien.",
  },
  "behandlung.koerperTitle": {
    de: "Körperorientierte Psychotherapie",
    en: "Body-oriented psychotherapy",
    es: "Psicoterapia orientada al cuerpo",
  },
  "behandlung.koerperText": {
    de: "Wir verbinden die Elemente der Meditation und der Massage in eine wirksame Behandlungsform nach den Leitlinien des Universal Healing Tao und des Chi Nei Tsang nach Großmeister Mantak Chia. Diese lassen sich sehr gut mit den bestehenden klassischen Psychotherapieformen integrieren. Wir unterstützen Sie sehr gerne auf dem Weg zu Ihrer Genesung.",
    en: "We combine the elements of meditation and massage into an effective treatment form according to the guidelines of Universal Healing Tao and Chi Nei Tsang by Grand Master Mantak Chia. These integrate very well with existing classical forms of psychotherapy. We are happy to support you on the path to your recovery.",
    es: "Combinamos los elementos de la meditación y el masaje en una forma de tratamiento efectiva según las directrices del Universal Healing Tao y Chi Nei Tsang del Gran Maestro Mantak Chia. Estos se integran muy bien con las formas clásicas existentes de psicoterapia. Estaremos encantados de apoyarte en el camino hacia tu recuperación.",
  },

  // ── Therapien (Titles & Short texts for Psychotherapie cards) ──
  "therapy.autogenes.title": {
    de: "Autogenes Training",
    en: "Autogenic Training",
    es: "Entrenamiento Autógeno",
  },
  "therapy.autogenes.short": {
    de: "Autogenes Training ist ein auf Autosuggestion basierendes Entspannungsverfahren. Es wurde vom Berliner Psychiater Johannes Heinrich Schultz aus der Hypnose entwickelt, 1926 erstmals vorgestellt und 1932 in seinem Buch Das autogene Training publiziert. Heute ist das autogene Training eine weit verbreitete und – beispielsweise in Deutschland und Österreich sogar gesetzlich – anerkannte Psychotherapiemethode.",
    en: "Autogenic training is a relaxation technique based on autosuggestion. It was developed by Berlin psychiatrist Johannes Heinrich Schultz from hypnosis, first presented in 1926 and published in his book Autogenic Training in 1932. Today, autogenic training is a widely used and – for example in Germany and Austria even legally – recognized psychotherapy method.",
    es: "El entrenamiento autógeno es una técnica de relajación basada en la autosugestión. Fue desarrollado por el psiquiatra berlinés Johannes Heinrich Schultz a partir de la hipnosis, presentado por primera vez en 1926 y publicado en su libro El entrenamiento autógeno en 1932. Hoy, el entrenamiento autógeno es un método de psicoterapia ampliamente utilizado y – por ejemplo en Alemania y Austria incluso legalmente – reconocido.",
  },
  "therapy.kognitiv.title": {
    de: "Kognitive Verhaltenstherapie",
    en: "Cognitive Behavioral Therapy",
    es: "Terapia Cognitivo-Conductual",
  },
  "therapy.kognitiv.short": {
    de: "Im Mittelpunkt der kognitiven Therapieverfahren stehen Kognitionen. Kognitionen umfassen Einstellungen, Gedanken, Bewertungen und Überzeugungen. Die kognitiven Therapieverfahren, zu denen die kognitive Therapie (KT) und die Rational-Emotive Verhaltenstherapie (REVT) gehören, gehen davon aus, dass die Art und Weise, wie wir denken, bestimmt, wie wir uns fühlen und verhalten und wie wir körperlich reagieren.",
    en: "Cognitions are at the center of cognitive therapy methods. Cognitions include attitudes, thoughts, evaluations and beliefs. Cognitive therapy methods, which include cognitive therapy (CT) and Rational Emotive Behavior Therapy (REBT), assume that the way we think determines how we feel and behave and how we react physically.",
    es: "Las cogniciones están en el centro de los métodos de terapia cognitiva. Las cogniciones incluyen actitudes, pensamientos, evaluaciones y creencias. Los métodos de terapia cognitiva, que incluyen la terapia cognitiva (TC) y la Terapia Racional Emotiva Conductual (TREC), asumen que la forma en que pensamos determina cómo nos sentimos, comportamos y reaccionamos físicamente.",
  },
  "therapy.massage.title": {
    de: "Massage",
    en: "Massage",
    es: "Masaje",
  },
  "therapy.massage.short": {
    de: "Die Massage (von \u201emassieren; berühren; betasten; kneten\u201c) dient zur mechanischen Beeinflussung von Haut, Bindegewebe und Muskulatur durch Dehnungs-, Zug- und Druckreiz. Die Wirkung der Massage erstreckt sich von der behandelten Stelle des Körpers über den gesamten Organismus und schließt auch die Psyche mit ein.",
    en: "Massage (from 'to massage; touch; feel; knead') serves for the mechanical influence on skin, connective tissue and muscles through stretching, pulling and pressure stimuli. The effect of massage extends from the treated area of the body across the entire organism and also includes the psyche.",
    es: "El masaje (de 'masajear; tocar; palpar; amasar') sirve para la influencia mecánica sobre la piel, el tejido conectivo y la musculatura mediante estímulos de estiramiento, tracción y presión. El efecto del masaje se extiende desde el área tratada del cuerpo a todo el organismo e incluye también la psique.",
  },
  "therapy.meditation.title": {
    de: "Meditation",
    en: "Meditation",
    es: "Meditación",
  },
  "therapy.meditation.short": {
    de: "Meditation (von \u201enachdenken, nachsinnen, überlegen\u201c) ist eine in vielen Religionen und Kulturen ausgeübte spirituelle Praxis. Durch Achtsamkeits- oder Konzentrationsübungen soll sich der Geist beruhigen und sammeln. In östlichen Kulturen gilt sie als eine grundlegende und zentrale bewusstseinserweiternde Übung.",
    en: "Meditation (from 'to think, reflect, contemplate') is a spiritual practice exercised in many religions and cultures. Through mindfulness or concentration exercises, the mind should calm and collect itself. In Eastern cultures, it is considered a fundamental and central consciousness-expanding practice.",
    es: "La meditación (de 'pensar, reflexionar, contemplar') es una práctica espiritual ejercida en muchas religiones y culturas. A través de ejercicios de atención plena o concentración, la mente debe calmarse y recogerse. En las culturas orientales, se considera una práctica fundamental y central de expansión de la conciencia.",
  },
  "therapy.paar.title": {
    de: "Paartherapie",
    en: "Couples Therapy",
    es: "Terapia de Pareja",
  },
  "therapy.paar.short": {
    de: "Gemeinsam einen Schritt vorwärts machen – in Einzel- und Paargesprächen, ergänzt mit Elementen der taoistischen Traditionen in Meditation, Yoga und Qigong, verfolgen wir folgende Ziele: Beziehungsprobleme verstehen und herausfinden, wie Ihre Liebesbeziehung funktionieren kann. Sich selbst und den Partner besser erkennen und verstehen. Neue Werkzeuge in die Hand bekommen, die in allen Lebenslagen nützlich sind.",
    en: "Taking a step forward together – in individual and couples conversations, supplemented with elements of Taoist traditions in meditation, yoga and Qigong, we pursue the following goals: Understanding relationship problems and finding out how your love relationship can work. Getting to know and understand yourself and your partner better. Acquiring new tools that are useful in all life situations.",
    es: "Dar un paso adelante juntos – en conversaciones individuales y de pareja, complementadas con elementos de las tradiciones taoístas en meditación, yoga y Qigong, perseguimos los siguientes objetivos: Comprender los problemas de relación y descubrir cómo puede funcionar tu relación amorosa. Conocer y comprender mejor a ti mismo y a tu pareja. Adquirir nuevas herramientas útiles en todas las situaciones de la vida.",
  },
  "therapy.pmr.title": {
    de: "Progressive Muskelentspannung nach Jacobson",
    en: "Progressive Muscle Relaxation (Jacobson)",
    es: "Relajación Muscular Progresiva (Jacobson)",
  },
  "therapy.pmr.short": {
    de: "Bei der progressiven Muskelentspannung (kurz PME; auch progressive Muskelrelaxation, kurz PMR, progressive Relaxation, kurz PR, oder Tiefenmuskelentspannung) nach Edmund Jacobson handelt es sich um ein Entspannungsverfahren, bei dem durch die willentliche und bewusste An- und Entspannung bestimmter Muskelgruppen ein Zustand tiefer Entspannung des ganzen Körpers erreicht werden soll.",
    en: "Progressive muscle relaxation (PMR) according to Edmund Jacobson is a relaxation technique in which a state of deep relaxation of the whole body is to be achieved through the deliberate and conscious tensing and relaxing of specific muscle groups.",
    es: "La relajación muscular progresiva (RMP) según Edmund Jacobson es una técnica de relajación en la que se busca alcanzar un estado de relajación profunda de todo el cuerpo mediante la tensión y relajación deliberada y consciente de grupos musculares específicos.",
  },
  "therapy.sokrat.title": {
    de: "Sokratischer Dialog",
    en: "Socratic Dialogue",
    es: "Diálogo Socrático",
  },
  "therapy.sokrat.short": {
    de: "Der Sokratische Dialog ist eine Fragetechnik, derer sich Therapeuten bedienen, wenn es im therapeutisch-beratenden Gespräch um Begriffsklärung und Entscheidungsfindung geht. Es ist ein Prozess des kritischen Hinterfragens von Argumenten. So sollen Strukturen und Verhaltensmuster sichtbar, das eigene Denken und Handeln verstehbar und damit auch veränderbar werden.",
    en: "The Socratic Dialogue is a questioning technique used by therapists when the therapeutic-advisory conversation involves clarification of concepts and decision-making. It is a process of critically questioning arguments. This makes structures and behavioral patterns visible, one's own thinking and actions understandable and thus changeable.",
    es: "El Diálogo Socrático es una técnica de cuestionamiento utilizada por terapeutas cuando la conversación terapéutico-consultiva implica la clarificación de conceptos y la toma de decisiones. Es un proceso de cuestionamiento crítico de argumentos. Esto hace visibles las estructuras y patrones de comportamiento, comprensible el propio pensamiento y actuar y, por lo tanto, modificable.",
  },
  "therapy.yoga.title": {
    de: "Yoga, Qigong, Tai Chi",
    en: "Yoga, Qigong, Tai Chi",
    es: "Yoga, Qigong, Tai Chi",
  },
  "therapy.yoga.short": {
    de: "Yoga, Qigong und Tai Chi sind Techniken, die an der Körperstruktur und an der Körperwahrnehmung arbeiten. In Verbindung mit Meditation und Massage führen diese Praktiken zu einem neuen Selbstbewußtsein, eine positivere und annehmendere Haltung zu sich selbst und zum eigenen Körper und ein zunehmendes Gefühl für die eigene Gesundheit.",
    en: "Yoga, Qigong and Tai Chi are techniques that work on body structure and body awareness. In combination with meditation and massage, these practices lead to a new self-awareness, a more positive and accepting attitude towards oneself and one's own body, and an increasing sense of one's own health.",
    es: "Yoga, Qigong y Tai Chi son técnicas que trabajan en la estructura corporal y la percepción del cuerpo. En combinación con meditación y masaje, estas prácticas conducen a una nueva autoconciencia, una actitud más positiva y aceptante hacia uno mismo y el propio cuerpo, y un sentido creciente de la propia salud.",
  },

  // Therapien page – detailed texts
  "therapy.kognitiv.detail": {
    de: "Im Mittelpunkt der kognitiven Therapieverfahren stehen Kognitionen. Kognitionen umfassen Einstellungen, Gedanken, Bewertungen und Überzeugungen. Die kognitiven Therapieverfahren, zu denen die kognitive Therapie (KT) und die Rational-Emotive Verhaltenstherapie (REVT) gehören, gehen davon aus, dass die Art und Weise, wie wir denken, bestimmt, wie wir uns fühlen und verhalten und wie wir körperlich reagieren. Schwerpunkte der Therapie sind",
    en: "Cognitions are at the center of cognitive therapy methods. Cognitions include attitudes, thoughts, evaluations and beliefs. Cognitive therapy methods, which include cognitive therapy (CT) and Rational Emotive Behavior Therapy (REBT), assume that the way we think determines how we feel and behave and how we react physically. The main focuses of therapy are",
    es: "Las cogniciones están en el centro de los métodos de terapia cognitiva. Las cogniciones incluyen actitudes, pensamientos, evaluaciones y creencias. Los métodos de terapia cognitiva, que incluyen la terapia cognitiva (TC) y la Terapia Racional Emotiva Conductual (TREC), asumen que la forma en que pensamos determina cómo nos sentimos, comportamos y reaccionamos físicamente. Los focos principales de la terapia son",
  },
  "therapy.kognitiv.li1": {
    de: "die Bewusstmachung von Kognitionen,",
    en: "raising awareness of cognitions,",
    es: "la concienciación de las cogniciones,",
  },
  "therapy.kognitiv.li2": {
    de: "die Überprüfung von Kognitionen und Schlussfolgerungen auf ihre Angemessenheit,",
    en: "examining cognitions and conclusions for their adequacy,",
    es: "la revisión de las cogniciones y conclusiones en cuanto a su adecuación,",
  },
  "therapy.kognitiv.li3": {
    de: "die Korrektur von irrationalen Einstellungen und",
    en: "correcting irrational attitudes and",
    es: "la corrección de actitudes irracionales y",
  },
  "therapy.kognitiv.li4": {
    de: "der Transfer der korrigierten Einstellungen ins konkrete Verhalten.",
    en: "transferring corrected attitudes into concrete behavior.",
    es: "la transferencia de las actitudes corregidas al comportamiento concreto.",
  },
  "therapy.kognitiv.detail2": {
    de: "Die kognitive Therapie stellt somit die aktive Gestaltung des Wahrnehmungsprozesses in den Vordergrund, weil in letzter Instanz nicht die objektive Realität, sondern die subjektive Sicht des Betrachtenden über das Verhalten entscheidet. Ist die Kognition inadäquat (z.\u00a0B. durch Wahrnehmungsselektion und -bewertung), ist auch die Möglichkeit beeinträchtigt, Affekt und Verhalten zu korrigieren. Vor allem spontanes und emotional getriebenes Verhalten sind sehr von der Art beeinflusst, wie ein Mensch sein Modell der Umwelt gedanklich strukturiert hat.",
    en: "Cognitive therapy thus places the active shaping of the perception process in the foreground, because ultimately it is not objective reality, but the subjective view of the observer that determines behavior. If cognition is inadequate (e.g. through perception selection and evaluation), the ability to correct affect and behavior is also impaired. Especially spontaneous and emotionally driven behavior is strongly influenced by the way a person has mentally structured their model of the environment.",
    es: "La terapia cognitiva coloca así en primer plano la configuración activa del proceso de percepción, porque en última instancia no es la realidad objetiva, sino la visión subjetiva del observador la que determina el comportamiento. Si la cognición es inadecuada (por ejemplo, por selección y evaluación de la percepción), también se ve afectada la capacidad de corregir el afecto y el comportamiento. Especialmente el comportamiento espontáneo y emocionalmente impulsado está muy influenciado por la forma en que una persona ha estructurado mentalmente su modelo del entorno.",
  },
  "therapy.massage.detail.title": {
    de: "Wie wirkt die Massage auf die Gesundheit?",
    en: "How does massage affect health?",
    es: "¿Cómo afecta el masaje a la salud?",
  },
  "therapy.massage.effects": {
    de: "Lokale Steigerung der Durchblutung,Senkung von Blutdruck und Pulsfrequenz,Entspannung der Muskulatur,Lösen von Verklebungen und Narben,Verbesserte Wundheilung,Schmerzlinderung,Einwirken auf innere Organe über Reflexbögen,Psychische Entspannung,Reduktion von Stress,Verbesserung des Zellstoffwechsels im Gewebe,Entspannung von Haut und Bindegewebe,Beeinflussung des vegetativen Nervensystems",
    en: "Local increase in blood circulation,Lowering blood pressure and pulse rate,Muscle relaxation,Releasing adhesions and scars,Improved wound healing,Pain relief,Affecting internal organs via reflex arcs,Mental relaxation,Stress reduction,Improvement of cell metabolism in tissue,Relaxation of skin and connective tissue,Influencing the autonomic nervous system",
    es: "Aumento local de la circulación sanguínea,Reducción de la presión arterial y la frecuencia del pulso,Relajación muscular,Liberación de adherencias y cicatrices,Mejora de la cicatrización de heridas,Alivio del dolor,Influencia en órganos internos a través de arcos reflejos,Relajación mental,Reducción del estrés,Mejora del metabolismo celular en el tejido,Relajación de la piel y el tejido conectivo,Influencia en el sistema nervioso autónomo",
  },
  "therapy.massage.detail2": {
    de: "Der Hautkontakt, die Stoffwechselanregung und die Entspannung wirken sich positiv auf die psychische Verfassung aus. Die Massage eignet sich hervorragend dafür, die eigene Körperwahrnehmung zu verbessern und kann zur Vorbeugung bei Stress und ergänzend zur Therapie von Angststörungen oder Depressionen eingesetzt werden.",
    en: "Skin contact, metabolic stimulation and relaxation have a positive effect on mental well-being. Massage is excellent for improving body awareness and can be used for stress prevention and as a complement to therapy for anxiety disorders or depression.",
    es: "El contacto con la piel, la estimulación del metabolismo y la relajación tienen un efecto positivo en el bienestar mental. El masaje es excelente para mejorar la percepción corporal y puede usarse para la prevención del estrés y como complemento a la terapia de trastornos de ansiedad o depresión.",
  },
  "therapy.meditation.howTitle": {
    de: "Wie wirkt die Meditation?",
    en: "How does meditation work?",
    es: "¿Cómo funciona la meditación?",
  },
  "therapy.meditation.howText": {
    de: "Die Wirkung von Meditation ist vielschichtig. Studien belegen die positiven Effekte der Meditation auf die Gesundheit in folgenden Bereichen:",
    en: "The effects of meditation are multifaceted. Studies demonstrate the positive effects of meditation on health in the following areas:",
    es: "Los efectos de la meditación son multifacéticos. Los estudios demuestran los efectos positivos de la meditación en la salud en las siguientes áreas:",
  },
  "therapy.meditation.physTitle": {
    de: "Meditation stärkt die physische Gesundheit",
    en: "Meditation strengthens physical health",
    es: "La meditación fortalece la salud física",
  },
  "therapy.meditation.physList": {
    de: "Reduzierung von Bluthochdruck, der Herzschlag wird verlangsamt, die Atmung vertieft, Muskelspannungen reduziert.,Verbesserten Umgang mit chronischem und Spannungs-Schmerzen,Stärkung des Immunsystems und der Gesundheit,Reduzierung von Kopfschmerzen,Entspannende Wirkung bei Stress",
    en: "Reduction of high blood pressure, heart rate is slowed, breathing is deepened, muscle tension is reduced.,Improved management of chronic and tension pain,Strengthening of the immune system and health,Reduction of headaches,Relaxing effect on stress",
    es: "Reducción de la hipertensión, el ritmo cardíaco se ralentiza, la respiración se profundiza, la tensión muscular se reduce.,Mejor manejo del dolor crónico y de tensión,Fortalecimiento del sistema inmunológico y la salud,Reducción de dolores de cabeza,Efecto relajante ante el estrés",
  },
  "therapy.meditation.psychTitle": {
    de: "Meditation stärkt die psychische Gesundheit",
    en: "Meditation strengthens mental health",
    es: "La meditación fortalece la salud mental",
  },
  "therapy.meditation.psychList": {
    de: "Reduzierung von Angstzuständen,Reduzierung und bessere Erholung bei Burnout und Depression,Minimierung von Schlafstörungen,Reduzierung von Stress Tinnitus, Zwangsstörung",
    en: "Reduction of anxiety,Reduction and better recovery from burnout and depression,Minimization of sleep disorders,Reduction of stress tinnitus, obsessive-compulsive disorder",
    es: "Reducción de la ansiedad,Reducción y mejor recuperación del burnout y la depresión,Minimización de trastornos del sueño,Reducción de tinnitus por estrés, trastorno obsesivo-compulsivo",
  },
  "therapy.meditation.behavTitle": {
    de: "Meditation unterstützt Verhaltensänderungen, bzw. hilft bei Verhaltensstörungen",
    en: "Meditation supports behavioral changes and helps with behavioral disorders",
    es: "La meditación apoya los cambios de comportamiento y ayuda con los trastornos del comportamiento",
  },
  "therapy.meditation.behavList": {
    de: "Reduzierung von Aggression,Genesung von Alkoholsucht,Minderung von Essstörungen,Überwindung von Lernschwierigkeiten,Verbesserter Umgang mit Sucht",
    en: "Reduction of aggression,Recovery from alcohol addiction,Reduction of eating disorders,Overcoming learning difficulties,Improved management of addiction",
    es: "Reducción de la agresión,Recuperación de la adicción al alcohol,Reducción de trastornos alimentarios,Superación de dificultades de aprendizaje,Mejor manejo de la adicción",
  },
  "therapy.paar.goals": {
    de: "Beziehungsprobleme verstehen und herausfinden, wie Ihre Liebesbeziehung funktionieren kann,Sich selbst und den Partner besser erkennen und verstehen,Neue Werkzeuge in die Hand bekommen, die in allen Lebenslagen nützlich sind",
    en: "Understanding relationship problems and finding out how your love relationship can work,Getting to know and understand yourself and your partner better,Acquiring new tools that are useful in all life situations",
    es: "Comprender los problemas de relación y descubrir cómo puede funcionar tu relación amorosa,Conocer y comprender mejor a ti mismo y a tu pareja,Adquirir nuevas herramientas útiles en todas las situaciones de la vida",
  },
} as const;

type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Language): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry.de;
}
