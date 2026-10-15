export const nav = [
  { label: "Home", href: "/home" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Certificates", href: "/certificates" },
];

export const wordmark = {
  line1: "Julyan Valenth",
  line2: "Software Engineering",
};

export const contact = {
  email: "valenthennn@gmail.com",
  github: "https://github.com/julyanvalenth",
  linkedin: "https://www.linkedin.com/in/julyan-sambouw-2607a332a",
  location: "Jakarta, Indonesia",
};

export const techStack = [
  "Flutter",
  "Dart",
  "Kotlin",
  "Node.js",
  "Express.js",
  "ReactJS",
  "TypeScript",
  "Python",
  "Figma",
];

export const skillGroups = [
  { label: "Languages", items: ["Dart", "Kotlin", "TypeScript", "Python", "C", "HTML/CSS"] },
  { label: "Frameworks", items: ["Flutter", "Node.js", "Express.js", "ReactJS", "Tailwind CSS"] },
  { label: "Tools", items: ["Figma", "VSCode", "Antigravity"] },
];

export type ProjectCategory = "mobile" | "web" | "design";

// src is relative to /public, e.g. "/images/xxx.png"
// 0 photos shows a placeholder, 2+ turns into a carousel
// use fit "contain" for phone screens so they aren't cropped; "cover" crops from the top
export interface Photo {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}

const phone = (folder: string, files: [string, string][]): Photo[] =>
  files.map(([file, alt]) => ({ src: `/images/${folder}/${file}`, alt, fit: "contain" }));

// the first 3 also show up on Home
export interface Project {
  index: string;
  title: string;
  category: ProjectCategory;
  meta: string;
  description: string;
  role: string;
  focus: string;
  status: string;
  tags: string[];
  photos: Photo[];
  // opens in a new tab; without it the "View" button stays disabled
  link?: string;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "Genshin Import",
    category: "mobile",
    meta: "Mobile app · 2026",
    description:
      "A mobile storefront for Genshin Impact weapons, themed as the Traders of Teyvat. Players browse top sellers, filter by element and open a weapon's stats and passive before adding it to the cart, while admins manage stock and prices from a separate inventory console.",
    role: "Mobile developer",
    focus: "Storefront & admin",
    status: "Done",
    tags: ["Dart", "Flutter", "SQL", "Express.js"],
    photos: phone("Genshin Import", [
      ["GI-Login Page.jpeg", "Genshin Import welcome screen"],
      ["GI-Home Page.jpeg", "Genshin Import home with featured weapon and top sellers"],
      ["GI-Item Detail.jpeg", "Genshin Import weapon detail page"],
      ["GI-Admin Inventory.jpeg", "Genshin Import admin inventory console"],
    ]),
    link: "https://github.com/julyanvalenth/Genshin-Import-AOL.git"
  },
  {
    index: "02",
    title: "Bean.",
    category: "design",
    meta: "Web app design · 2024",
    description:
      "A web ordering experience for a coffee shop: pick a signature drink, choose dine-in, pickup or delivery, apply a promo at checkout and track each order with a pickup QR code. Members also see their loyalty tier and get order updates in an inbox.",
    role: "Visual designer",
    focus: "Ordering flow",
    status: "Done",
    tags: ["Figma", "Branding", "UI Design"],
    photos: [
      { src: "/images/Beans/web/01-beranda.png", alt: "Bean home page" },
      { src: "/images/Beans/web/02-detail-makanan.png", alt: "Bean menu item detail" },
      { src: "/images/Beans/web/04-keranjang.png", alt: "Bean shopping cart" },
      { src: "/images/Beans/web/05-pesanan.png", alt: "Bean order list" },
      { src: "/images/Beans/web/06-kotak-masuk.png", alt: "Bean inbox" },
      { src: "/images/Beans/web/00-masuk.png", alt: "Bean sign-in page" },
    ],
  },
  {
    index: "03",
    title: "RegenFood",
    category: "design",
    meta: "Mobile app design · 2024",
    description:
      "A food-rescue app that sells surplus meals from nearby restaurants, bakeries and cafés at a discount before they go to waste. Each purchase earns points toward vouchers, and a community tab shares leftover-food tips and recycled products like compost and kraft pouches.",
    role: "UI/UX designer",
    focus: "Rewards & community",
    status: "Done",
    tags: ["Figma", "UI Design", "UX Research"],
    photos: phone("RegenFood", [
      ["web/apps.png", "RegenFood main screens: home, food, community, transactions and notifications"],
      ["onBoarding Page.png", "RegenFood splash, onboarding, sign-in and sign-up screens"],
      ["web/profile-rewards.png", "RegenFood profile, vouchers, reviews and partner screens"],
      ["web/point.png", "RegenFood point redemption and community post screens"],
      ["loading.png", "RegenFood loading screen"],
    ]),
  },
  {
    index: "04",
    title: "TaskFlow",
    category: "mobile",
    meta: "Mobile app · 2025",
    description:
      "A calm task planner for students that keeps college coursework and daily errands apart. Tasks get a priority, a deadline and subtasks, and there's a weekly schedule, a progress chart and a daily streak.",
    role: "Mobile + API",
    focus: "Daily planning",
    status: "Done",
    tags: ["Flutter", "Express.js"],
    photos: phone("TaskFlow", [
      ["Task-Login.jpeg", "TaskFlow welcome screen"],
      ["Task-HomeCollege.jpeg", "TaskFlow home, college view"],
      ["Task-HomeDaily.jpeg", "TaskFlow home, daily view"],
      ["Task-HomeCollrge2.jpeg", "TaskFlow weekly tasks grid"],
      ["Task-ListView.jpeg", "TaskFlow task list view"],
      ["Task-Preview.jpeg", "TaskFlow task detail sheet"],
      ["Task-AddTask.jpeg", "TaskFlow new task form"],
      ["Task-AddSubTask.jpeg", "TaskFlow new task form with subtasks"],
      ["Task-Progress.jpeg", "TaskFlow progress and streak screen"],
      ["Task-Schedule.jpeg", "TaskFlow daily schedule"],
    ]),
    link: "https://github.com/julyanvalenth/TaskFlow.git"
  },
  {
    index: "05",
    title: "BudgetMail",
    category: "mobile",
    meta: "Mobile app · 2026",
    description:
      "A budgeting app that reads bank and e-wallet notification emails from Gmail (read-only) and turns them into transactions automatically. Uncertain matches wait in a review queue, and monthly category budgets show how much is left to spend.",
    role: "Full-stack developer",
    focus: "Gmail sync & parsing",
    status: "Done",
    tags: ["React Native", "TypeScript", "Fastify", "PostgreSQL"],
    photos: phone("Budgeting", [
      ["03-beranda.png", "BudgetMail monthly summary"],
      ["01-login.png", "BudgetMail sign-in screen"],
      ["02-onboarding-gmail.png", "BudgetMail Gmail connection onboarding"],
      ["04-notifikasi-transaksi-baru.png", "BudgetMail new transactions banner"],
      ["05-transaksi.png", "BudgetMail transaction list"],
      ["06-perlu-ditinjau.png", "BudgetMail transactions that need review"],
      ["07-tinjau-transaksi.png", "BudgetMail transaction review sheet"],
      ["08-tambah-transaksi.png", "BudgetMail add transaction form"],
      ["09-pilih-kategori.png", "BudgetMail category picker"],
      ["10-budget.png", "BudgetMail budget overview"],
      ["11-atur-budget.png", "BudgetMail set budget sheet"],
      ["12-akun.png", "BudgetMail account and Gmail connection settings"],
    ]),
    link: "https://github.com/julyanvalenth/BudgetMail.git"
  },
];

export const education = {
  eyebrow: "01 — Academic",
  period: "2024 — Present",
  degree: "Bachelor of Computer Science",
  school: "Bina Nusantara University · Software Engineering",
  description:
    "Focused on software engineering, human-computer interaction and mobile development, with a team-based project every semester.",
  coursework: [
    "Database Systems",
    "Software Engineering",
    "HCI",
    "Mobile Programming",
    "Software Metrics and Quality Assurance",
  ],
  photos: [] as Photo[],
  before: {
    period: "Before 2024",
    school: "Senior High School",
    detail: "Sekolah Dian Harapan Manado · Science major",
  },
  quote: {
    text: "An app can look great and still be useless if it crashes in someone's hand.",
    author: "Julyan Valenth",
  },
};

export interface OrgRole {
  index: string;
  title: string;
  period: string;
  photos: Photo[];
  points: string[];
}

export const orgRoles: OrgRole[] = [
  {
    index: "01",
    title: "BNCC PR Staff",
    period: "2025 — 2026",
    photos: [
      {
        src: "/images/BNCC-Pengurus/Salinan 2026_0114_02510900.jpg",
        alt: "HIMTI × BNCC company visit group photo at tiket.com",
      },
    ],
    points: [
      "Weekly content production for BNCC channels",
      "BNCC × HIMTI company visit to tiket.com",
    ],
  },
  {
    index: "02",
    title: "BNCC PR Activist",
    period: "2024 — 2025",
    photos: [
      {
        src: "/images/BNCC-Aktivis/web/bncc-aktivis.jpg",
        alt: "HIMTI × BNCC company visit group photo at Apple Developer Academy",
      },
    ],
    points: [
      "Weekly content with the PR team",
      "BNCC × HIMTI visit to Apple Developer Academy",
    ],
  },
];

export type CertCategory = "course" | "competition" | "event" | "organization";

export interface Certificate {
  index: string;
  title: string;
  issuer: string;
  year: string;
  category: CertCategory;
  photos: Photo[];
  file?: string;
}

const cert = (file: string, alt: string): Photo[] => [{ src: `/images/Sertifikat/${file}`, alt, fit: "contain" }];

export const certificates: Certificate[] = [
  {
    index: "01",
    title: "iSemantic 2026 Presenter",
    issuer: "iSemantic · UDINUS",
    year: "2026",
    category: "event",
    photos: cert("isemantic2026-presenter.png", "iSemantic 2026 certificate of participation as presenter"),
    file: "/images/Sertifikat/isemantic2026-certificate (1).pdf",
  },
  {
    index: "02",
    title: "iSemantic 2026 Paper Author",
    issuer: "iSemantic · UDINUS",
    year: "2026",
    category: "event",
    photos: cert("isemantic2026-author.png", "iSemantic 2026 certificate of participation as author"),
    file: "/images/Sertifikat/isemantic2026-certificate (2).pdf",
  },
  {
    index: "03",
    title: "COMPFEST 18 Business IT Case",
    issuer: "COMPFEST",
    year: "2026",
    category: "competition",
    photos: cert("compfest18-business-it-case.png", "COMPFEST 18 Business IT Case participant certificate"),
    file: "/images/Sertifikat/Julyan Valenth Jonathan Sambouw_Participant of Business IT Case_COMPFEST18_cf-2026-5312e3b6-4811-4639-a40c-958d5faea876_2026.pdf",
  },
  {
    index: "04",
    title: "Databases for Developers: Foundations",
    issuer: "Oracle Dev Gym",
    year: "2025",
    category: "course",
    photos: cert("oracle-databases-for-developers.png", "Oracle Dev Gym certificate of excellence, 100% grade"),
    file: "/images/Sertifikat/classcertofexcellence (1) (1).pdf",
  },
  {
    index: "05",
    title: "German Workshop: Speak German Fluently",
    issuer: "BINUS Digital Language Learning Center",
    year: "2024",
    category: "event",
    photos: cert("german-workshop.png", "BINUS German Workshop certificate of appreciation"),
    file: "/images/Sertifikat/Julyan Valenth Jonathan S. - German Workshop Certificate.pdf",
  },
  {
    index: "06",
    title: "Beelingua Workshop: English for Academic Success",
    issuer: "BINUS Digital Language Learning Center",
    year: "2024",
    category: "event",
    photos: cert("beelingua-bifest.png", "BINUS Beelingua Workshop certificate of appreciation"),
    file: "/images/Sertifikat/Julyan Valenth Jonathan Sambouw - Beelingua Workshop BIFEST.pdf",
  },
  {
    index: "07",
    title: "Public Relations Activist",
    issuer: "BNCC Bandung",
    year: "2025",
    category: "organization",
    photos: cert("bncc-pr-activist.png", "BNCC Bandung certificate of completion as Public Relations activist, 2024/2025"),
    file: "/images/Sertifikat/PR - Julyan Valenth Jonathan S..pdf",
  },
];
