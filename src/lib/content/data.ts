import type { AppRecord, HomeContent, PartnerRecord } from "./types";

const IOS_DEVELOPER_URL =
  "https://apps.apple.com/us/developer/motivve-health-studios-llc/id1523373102";
const ANDROID_DEVELOPER_URL =
  "https://play.google.com/store/apps/developer?id=Motivve+Health+Studios,+LLC";

export const APPS: AppRecord[] = [
  {
    slug: "picture-puzzle",
    name: "Picture Puzzle",
    shortDescription: "Spot the theme that ties four images together.",
    genre: "Puzzle",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c8/57/29/c85729fb-8681-e4e6-661a-9edeb9d9f1c4/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/picture-puzzle-by-motivv/id1597963239",
    appsFlyerOneLink: "https://picturepuzzlemotivv.onelink.me/rPbx/66t88igp",
    featured: true,
    order: 1,
  },
  {
    slug: "candy-connect",
    name: "Candy Connect+",
    shortDescription: "Match consecutive candy in chained connections.",
    genre: "Puzzle",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ac/39/76/ac3976be-0ccc-08eb-4208-503eab439af2/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/candy-connect/id1588252574",
    appsFlyerOneLink: "https://candyconnectmotivv.onelink.me/Gqb5/zz7cva9p",
    order: 2,
  },
  {
    slug: "critter-pop",
    name: "Critter Pop+",
    shortDescription: "Bubble-popping puzzles starring tiny critters.",
    genre: "Puzzle",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/14/27/73/1427732d-c9a6-6442-af57-0f1445c7cdd3/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/critter-pop/id1582460004",
    appsFlyerOneLink: "https://critterpopmotivv.onelink.me/BJq6/0mafrnmf",
    order: 3,
  },
  {
    slug: "blocks-mayhem",
    name: "Blocks Mayhem",
    shortDescription: "Stack falling blocks to clear lines.",
    genre: "Puzzle",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/04/f2/e2/04f2e216-3f45-8495-da50-739087ead99c/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/blocks-mayhem/id1529146308",
    appsFlyerOneLink: "https://blocksmayhemmotivv.onelink.me/plqV/kjc58rb3",
    order: 4,
  },
  {
    slug: "galaxy-defender",
    name: "Galaxy Defender+",
    shortDescription: "Retro arcade space shooter, beautifully drawn.",
    genre: "Action",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/93/e2/d7/93e2d718-be68-e079-1445-93f850b0494e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/galaxy-defender/id1530055918",
    appsFlyerOneLink: "https://galaxydefendermotivv.onelink.me/fybl/a2ft7mee",
    featured: true,
    order: 5,
  },
  {
    slug: "pipe-swipe",
    name: "Pipe Swipe+",
    shortDescription: "Slide tiles to connect steampunk pipes.",
    genre: "Puzzle",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f3/3b/62/f33b62ac-c805-b0e1-3c4e-da429710d52a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/pipe-swipe/id1529145803",
    appsFlyerOneLink: "https://pipeswipemotivv.onelink.me/o1M2/sv4p12lt",
    order: 6,
  },
  {
    slug: "solitaire-island",
    name: "Solitaire Island",
    shortDescription: "Klondike solitaire with a calm island vibe.",
    genre: "Card",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/38/77/06/387706cd-c4af-0dba-bf5e-d3442eed0653/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/solitaire-island/id1552404925",
    appsFlyerOneLink: "https://solitaireislandmotivv.onelink.me/KCiO/8z4gwsd1",
    featured: true,
    order: 7,
  },
  {
    slug: "sudoku",
    name: "Sudoku",
    shortDescription: "The classic number puzzle, beautifully rendered.",
    genre: "Puzzle",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/85/ab/81/85ab8115-8882-d2df-ec05-2c7cadd16790/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/sudoku-%E6%95%B0%E7%8B%AC/id1527453059",
    appsFlyerOneLink: "https://sudokumotivv.onelink.me/yOTC/lsv375jv",
    order: 8,
  },
  {
    slug: "word-forest",
    name: "Word Forest+",
    shortDescription: "Find words by tracing letters in the forest.",
    genre: "Word",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2b/0d/c0/2b0dc07d-38cf-c154-13f9-f82b9edc4ea6/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/word-forest/id1529460931",
    appsFlyerOneLink: "https://wordforestmotivv.onelink.me/coCW/6epib7nr",
    featured: true,
    order: 9,
  },
  {
    slug: "word-search-neon",
    name: "Word Search (Neon Edition)",
    shortDescription: "Word search with retro neon styling.",
    genre: "Word",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6b/3c/3a/6b3c3a49-e092-c6ac-5ac1-808a91538809/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/word-search-neon-edition/id1552403447",
    appsFlyerOneLink: "https://wordsearchmotivv.onelink.me/rlc5/9xc4xyx0",
    order: 10,
  },
  {
    slug: "hexa-temple",
    name: "Hexa Temple",
    shortDescription: "Fit hexagonal blocks into the temple frame.",
    genre: "Puzzle",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/98/06/61/98066152-64b5-665d-d94d-aba211fd8f58/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    iosAppStoreUrl: "https://apps.apple.com/us/app/hexa-temple/id1527262263",
    appsFlyerOneLink: "https://hexatemplemotivv.onelink.me/Sp7z/ljg5450b",
    order: 11,
  },
];

export const PARTNERS: PartnerRecord[] = [
  {
    slug: "acoh",
    name: "AmeriHealth Caritas Ohio",
    shortName: "AmeriHealth",
    activationCode: "ACOH",
    rewardCurrency: "CARE Card rewards",
    downloadShortLink: "https://delivr.com/27xg9",
    signupShortLink: "https://delivr.com/2s39p",
    enrollUrl: "https://www.amerihealthcaritasoh.com/member/enroll",
    enrollLabel: "Not an AmeriHealth Caritas Ohio member? Learn more about their benefits and how to enroll.",
    memberServicesPhone: "1-833-764-7700",
    ttyPhone: "1-833-889-6446",
    heroEyebrow: "AmeriHealth Caritas Ohio members",
    heroHeadline: "Play games. Earn CARE Card rewards.",
    heroSubhead:
      "Members 18+ can play ad-free games that earn CARE Card rewards - all at no cost with your benefits.",
  },
];

export const HOME_CONTENT: HomeContent = {
  hero: {
    eyebrow: "Health & gaming, in one app",
    headline: "Pick a game. Take care of you.",
    subhead:
      "Eleven mobile games designed to engage you with your health - ad-free, free with your benefits, and built around how you actually like to play.",
    primaryCtaLabel: "Browse the games",
    secondaryCtaLabel: "Get a demo",
    secondaryCtaHref: "/partner",
  },
  appGridIntro: {
    eyebrow: "The catalog",
    heading: "Eleven games. One login.",
    description:
      "Filter by what you're in the mood for. Tap any card to download - your account works across the whole library.",
  },
  howItWorks: {
    heading: "Getting started is easy.",
    steps: [
      {
        title: "Find your game",
        body: "Pick anything from the catalog above. They all run on the same login.",
      },
      {
        title: "Create your account",
        body: "You'll need your activation code, email, password, and member ID.",
      },
      {
        title: "Start playing",
        body: "Earn rewards as you go. Switch games whenever you feel like it.",
      },
    ],
  },
  whyMotivv: {
    eyebrow: "Why Motivv",
    heading: "A modern benefit your members will actually use.",
    rows: [
      {
        eyebrow: "Rewards",
        heading: "Unlock rewards while you play.",
        body: "Rack up tickets and earn rewards by completing missions and interacting with health trivia and content.",
        imageAlt: "Illustration of in-game reward tickets",
      },
      {
        eyebrow: "Always on",
        heading: "Anytime, anywhere - never any ads.",
        body: "24/7 access to a library of fun mobile games. One login, every device, zero ad interruptions.",
        imageAlt: "Illustration of a phone showing a Motivv game",
      },
      {
        eyebrow: "Learn as you play",
        heading: "Test your health knowledge.",
        body: "Trivia, tips, and helpful reminders personalized to your healthcare needs - folded into gameplay you already enjoy.",
        imageAlt: "Illustration of a trivia card",
      },
      {
        eyebrow: "Benefits",
        heading: "Maximize your health benefits.",
        body: "Take advantage of everything your health plan offers, with quick access to the services that matter most.",
        imageAlt: "Illustration of a benefits card",
      },
    ],
  },
  stats: {
    heading: "Members tell us this is the modern benefit they actually want.",
    items: [
      { percent: "91%", label: "found it easy to learn about their benefits" },
      { percent: "90%", label: "found it easy to learn about their health" },
      { percent: "93%", label: "found it easy to use and interact with" },
    ],
  },
  trust: {
    heading: "Built for the trust your plan requires.",
    badges: [
      { label: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
      { label: "HITECH", description: "Health Information Technology for Economic and Clinical Health" },
      { label: "HiTRUST", description: "HITRUST CSF certified" },
      { label: "NIST", description: "Aligned with NIST cybersecurity framework" },
    ],
  },
  partnersCallout: {
    eyebrow: "For health plans",
    heading: "Bring engaging health benefits to your members.",
    body: "Motivv is a turnkey, white-label suite of games and content that drives benefit awareness, completes care gaps, and keeps members coming back.",
    ctaLabel: "Get a demo",
    ctaHref: "/partner",
  },
  faq: {
    heading: "Have questions? We've got answers.",
    items: [
      {
        question: "What is included in the Motivv Health Studios program?",
        answer:
          "When you join Motivv Health Studios you'll get access to a wide variety of fun mobile games - including puzzle, arcade, card, and match-3 favorites - that make engaging with your health more fun while keeping you plugged in to your healthcare experience. One login works across the entire library, so you can find a game you love and stick with it.",
      },
      {
        question: "How do I know if I'm eligible?",
        answer:
          "You'll be notified through ongoing communications from your health plan. Those communications will include an activation code and instructions on how to download the games and create your account. If you believe you're eligible but are having trouble registering or accessing the program, email us at help@motivvhealthstudios.com. If you aren't eligible, let your health plan know you'd like Motivv Health Studios - they can contact us directly.",
      },
      {
        question: "Does the program cost me anything?",
        answer:
          "Motivv Health Studios is available at no cost to you. It's offered as a benefit provided by your health plan - there are no out-of-pocket costs to participate.",
      },
      {
        question: "Is Motivv Health Studios safe and secure?",
        answer:
          "Yes. Data security is among Motivv Health Studios' highest priorities. We're assessed against the requirements of HIPAA and HITECH, and are certified by HITRUST and aligned with NIST to ensure the highest level of security commercially available.",
      },
    ],
  },
  finalCta: {
    heading: "Your leveled-up healthcare experience is here.",
    body: "Pick a game and start playing. We'll handle the rest.",
  },
  footer: {
    tagline: "Where Health & Gaming Are One.",
    pitch: "The first gaming platform for health engagement.",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "Home", href: "/" },
          { label: "Healthcare", href: "/healthcare" },
          { label: "Developers", href: "/developers" },
          { label: "Players", href: "/players" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Support", href: "/support" },
          { label: "Contact us", href: "mailto:help@motivvhealthstudios.com" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Terms of Service", href: "/terms-of-service" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Rewards Terms", href: "/rewards-program-terms-and-conditions" },
        ],
      },
    ],
    appStoreLinks: {
      ios: IOS_DEVELOPER_URL,
      android: ANDROID_DEVELOPER_URL,
    },
    legal: {
      copyright: `© ${new Date().getFullYear()} Motivve Health Studios, LLC`,
      locality: "Proudly made in Ohio.",
    },
  },
};

export const STORE_LINKS = {
  ios: IOS_DEVELOPER_URL,
  android: ANDROID_DEVELOPER_URL,
};
