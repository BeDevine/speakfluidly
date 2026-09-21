export type LanguageContent = {
  code: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  tagline: string;
  intro: string;
  audiencesTitle: string;
  audiences: { name: string; description: string }[];
  pricingTitle: string;
  pricingText: string;
  contactTitle: string;
  contactText: string;
  contactCta: string;
};

export const LANGUAGES: LanguageContent[] = [
  {
    code: "zh",
    nativeName: "中文",
    dir: "ltr",
    tagline: "真实英语，真正自信。",
    intro:
      "Speak Fluidly 提供实惠的一对一英语辅导，帮助您更自信地用英语交流。授课教师持有 PGCE 教师资格证书，是英语母语者，发音清晰标准，拥有 17 年国际教学经验。",
    audiencesTitle: "适合谁",
    audiences: [
      { name: "日常交流", description: "帮助您更自信地用英语旅行、社交和生活。" },
      { name: "职场英语", description: "在会议、面试和日常工作沟通中更清晰自信地表达。" },
      { name: "考试与学术", description: "提供学术英语和综合考试备考支持。" },
    ],
    pricingTitle: "费用",
    pricingText: "每节 50 分钟课程收费 45 美元，购买课程套餐可享优惠。所有新学员均可获得一次免费的 20 分钟入门通话。",
    contactTitle: "联系方式",
    contactText: "请联系我们安排免费入门通话。欢迎使用任何语言咨询。",
    contactCta: "联系我们",
  },
  {
    code: "ja",
    nativeName: "日本語",
    dir: "ltr",
    tagline: "本物の英語。本物の自信。",
    intro:
      "Speak Fluidlyは、英語をもっと自信を持って話せるようになるための、手頃な価格のマンツーマン指導を提供しています。指導を担当するのはPGCE資格を持つ英語ネイティブスピーカーで、明瞭で標準的な発音を持ち、17年間の国際的な指導経験があります。",
    audiencesTitle: "対象となる方",
    audiences: [
      { name: "日常会話", description: "旅行や日常生活で、もっと自信を持って英語を話せるようになります。" },
      { name: "仕事で使う英語", description: "会議や面接、日常の業務コミュニケーションをより明確に、自信を持って行えるようになります。" },
      { name: "試験・学術", description: "学術英語や各種試験対策のサポートを行います。" },
    ],
    pricingTitle: "料金",
    pricingText: "50分のセッションが1回45ドルです。パッケージ購入で割引が適用されます。新規のお客様には無料の20分間の体験セッションをご用意しています。",
    contactTitle: "お問い合わせ",
    contactText: "無料の体験セッションのご予約は、お問い合わせください。どの言語でのお問い合わせも歓迎いたします。",
    contactCta: "お問い合わせ",
  },
  {
    code: "ar",
    nativeName: "العربية",
    dir: "rtl",
    tagline: "إنجليزية حقيقية. ثقة حقيقية.",
    intro:
      "توفر Speak Fluidly دروسًا خصوصية بأسعار معقولة لمساعدتك على التحدث بالإنجليزية بثقة أكبر. يقود التدريب معلم حاصل على شهادة PGCE، وهو متحدث أصلي للغة الإنجليزية بلكنة واضحة ومحايدة، ويتمتع بخبرة تدريس دولية تمتد 17 عامًا.",
    audiencesTitle: "لمن هذه الخدمة",
    audiences: [
      { name: "التواصل اليومي", description: "لمساعدتك على التحدث بثقة أكبر أثناء السفر والحياة اليومية." },
      { name: "الإنجليزية المهنية", description: "للتواصل بوضوح وثقة في الاجتماعات والمقابلات والتواصل اليومي في العمل." },
      { name: "الامتحانات والدراسة", description: "دعم في اللغة الإنجليزية الأكاديمية والتحضير العام للامتحانات." },
    ],
    pricingTitle: "الأسعار",
    pricingText: "45 دولارًا لكل جلسة مدتها 50 دقيقة. تتوفر باقات بأسعار مخفضة. يحصل كل طالب جديد على مكالمة تعريفية مجانية مدتها 20 دقيقة.",
    contactTitle: "التواصل",
    contactText: "تواصل معنا لحجز مكالمتك التعريفية المجانية. نرحب بالاستفسارات بأي لغة.",
    contactCta: "تواصل معنا",
  },
  {
    code: "ko",
    nativeName: "한국어",
    dir: "ltr",
    tagline: "진짜 영어. 진짜 자신감.",
    intro:
      "Speak Fluidly는 더 자신 있게 영어로 말할 수 있도록 돕는 합리적인 가격의 1:1 코칭을 제공합니다. PGCE 자격을 보유한 원어민 강사가 명확하고 표준적인 발음으로 지도하며, 17년간의 국제 교육 경력을 가지고 있습니다.",
    audiencesTitle: "이런 분들께 적합합니다",
    audiences: [
      { name: "일상 회화", description: "여행과 일상 생활에서 더 자신 있게 영어로 말할 수 있도록 도와드립니다." },
      { name: "업무 영어", description: "회의, 면접, 일상 업무 커뮤니케이션에서 더 명확하고 자신 있게 소통할 수 있습니다." },
      { name: "시험 및 학업", description: "학술 영어 및 다양한 시험 준비를 지원합니다." },
    ],
    pricingTitle: "요금",
    pricingText: "50분 세션당 45달러입니다. 패키지 구매 시 할인이 적용됩니다. 모든 신규 학생은 무료 20분 상담을 받을 수 있습니다.",
    contactTitle: "문의하기",
    contactText: "무료 상담 예약은 언제든 문의해 주세요. 어떤 언어로도 문의 가능합니다.",
    contactCta: "문의하기",
  },
  {
    code: "vi",
    nativeName: "Tiếng Việt",
    dir: "ltr",
    tagline: "Tiếng Anh thực sự. Tự tin thực sự.",
    intro:
      "Speak Fluidly cung cấp các buổi kèm 1-1 với giá cả phải chăng để giúp bạn nói tiếng Anh tự tin hơn. Giáo viên có chứng chỉ PGCE, là người bản xứ nói tiếng Anh với giọng rõ ràng, trung tính, và có 17 năm kinh nghiệm giảng dạy quốc tế.",
    audiencesTitle: "Dành cho ai",
    audiences: [
      { name: "Giao tiếp hàng ngày", description: "Giúp bạn tự tin hơn khi nói tiếng Anh trong khi du lịch và cuộc sống hàng ngày." },
      { name: "Tiếng Anh công việc", description: "Giao tiếp rõ ràng và tự tin hơn trong các cuộc họp, phỏng vấn và giao tiếp công việc hàng ngày." },
      { name: "Thi cử & học thuật", description: "Hỗ trợ tiếng Anh học thuật và ôn luyện thi cử nói chung." },
    ],
    pricingTitle: "Học phí",
    pricingText: "45 đô la cho mỗi buổi học 50 phút. Có gói giảm giá khi mua theo combo. Mỗi học viên mới đều được một buổi tư vấn giới thiệu miễn phí 20 phút.",
    contactTitle: "Liên hệ",
    contactText: "Liên hệ để đặt lịch buổi tư vấn miễn phí. Chúng tôi hoan nghênh liên hệ bằng bất kỳ ngôn ngữ nào.",
    contactCta: "Liên hệ",
  },
  {
    code: "es",
    nativeName: "Español",
    dir: "ltr",
    tagline: "Inglés real. Confianza real.",
    intro:
      "Speak Fluidly ofrece clases particulares asequibles para ayudarte a hablar inglés con más confianza. Las clases están impartidas por un profesor cualificado con PGCE, hablante nativo de inglés con un acento claro y neutro, con 17 años de experiencia docente internacional.",
    audiencesTitle: "Para quién es",
    audiences: [
      { name: "Fluidez cotidiana", description: "Para ayudarte a hablar con más confianza mientras viajas y en tu vida diaria." },
      { name: "Inglés profesional", description: "Comunícate con más claridad y confianza en reuniones, entrevistas y en el trabajo." },
      { name: "Exámenes y estudios", description: "Apoyo en inglés académico y preparación general de exámenes." },
    ],
    pricingTitle: "Precios",
    pricingText: "45 dólares por sesión de 50 minutos. Hay paquetes con descuento disponibles. Todos los nuevos estudiantes reciben una llamada de introducción gratuita de 20 minutos.",
    contactTitle: "Contacto",
    contactText: "Póngase en contacto para reservar su llamada de introducción gratuita. Las consultas son bienvenidas en cualquier idioma.",
    contactCta: "Contactar",
  },
  {
    code: "de",
    nativeName: "Deutsch",
    dir: "ltr",
    tagline: "Echtes Englisch. Echtes Selbstvertrauen.",
    intro:
      "Speak Fluidly bietet erschwingliches Einzelcoaching, damit Sie selbstbewusster Englisch sprechen. Der Unterricht wird von einer PGCE-qualifizierten, englischsprachigen Lehrkraft mit klarem, neutralem Akzent geleitet, mit 17 Jahren internationaler Unterrichtserfahrung.",
    audiencesTitle: "Für wen ist das geeignet",
    audiences: [
      { name: "Alltägliche Sprachgewandtheit", description: "Damit Sie beim Reisen und im Alltag selbstbewusster Englisch sprechen." },
      { name: "Berufliches Englisch", description: "Klarer und selbstbewusster in Meetings, Vorstellungsgesprächen und der täglichen Arbeitskommunikation." },
      { name: "Prüfungen & Studium", description: "Unterstützung bei akademischem Englisch und allgemeiner Prüfungsvorbereitung." },
    ],
    pricingTitle: "Preise",
    pricingText: "45 $ pro 50-minütiger Sitzung. Vergünstigte Pakete sind erhältlich. Jeder neue Schüler erhält ein kostenloses 20-minütiges Kennenlerngespräch.",
    contactTitle: "Kontakt",
    contactText: "Kontaktieren Sie uns, um Ihr kostenloses Kennenlerngespräch zu vereinbaren. Anfragen sind in jeder Sprache willkommen.",
    contactCta: "Kontakt aufnehmen",
  },
  {
    code: "fr",
    nativeName: "Français",
    dir: "ltr",
    tagline: "Un anglais authentique. Une vraie confiance.",
    intro:
      "Speak Fluidly propose un coaching individuel abordable pour vous aider à parler anglais avec plus de confiance. Les cours sont dispensés par un enseignant certifié PGCE, anglophone natif à l'accent clair et neutre, avec 17 ans d'expérience internationale dans l'enseignement.",
    audiencesTitle: "À qui s'adresse ce service",
    audiences: [
      { name: "Aisance au quotidien", description: "Pour vous aider à parler avec plus de confiance en voyage et dans la vie de tous les jours." },
      { name: "Anglais professionnel", description: "Communiquez plus clairement et avec plus de confiance en réunion, en entretien et au travail." },
      { name: "Examens et études", description: "Soutien en anglais académique et préparation générale aux examens." },
    ],
    pricingTitle: "Tarifs",
    pricingText: "45 $ par séance de 50 minutes. Des forfaits à prix réduit sont disponibles. Chaque nouvel élève bénéficie d'un appel d'introduction gratuit de 20 minutes.",
    contactTitle: "Contact",
    contactText: "Contactez-nous pour réserver votre appel d'introduction gratuit. Les demandes sont bienvenues dans n'importe quelle langue.",
    contactCta: "Nous contacter",
  },
  {
    code: "pt",
    nativeName: "Português",
    dir: "ltr",
    tagline: "Inglês de verdade. Confiança de verdade.",
    intro:
      "A Speak Fluidly oferece aulas particulares acessíveis para ajudá-lo a falar inglês com mais confiança. As aulas são ministradas por um professor qualificado com PGCE, falante nativo de inglês com sotaque claro e neutro, com 17 anos de experiência internacional em ensino.",
    audiencesTitle: "Para quem é",
    audiences: [
      { name: "Fluência no dia a dia", description: "Para ajudá-lo a falar com mais confiança enquanto viaja e no dia a dia." },
      { name: "Inglês profissional", description: "Comunique-se com mais clareza e confiança em reuniões, entrevistas e no trabalho." },
      { name: "Exames e estudos", description: "Apoio em inglês acadêmico e preparação geral para exames." },
    ],
    pricingTitle: "Preços",
    pricingText: "45 dólares por sessão de 50 minutos. Estão disponíveis pacotes com desconto. Todo novo aluno recebe uma chamada introdutória gratuita de 20 minutos.",
    contactTitle: "Contacto",
    contactText: "Entre em contacto para marcar a sua chamada introdutória gratuita. As perguntas são bem-vindas em qualquer idioma.",
    contactCta: "Contactar",
  },
];
