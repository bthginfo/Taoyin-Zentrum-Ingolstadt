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
} as const;

type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Language): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry.de;
}
