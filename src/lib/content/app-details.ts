export type AppDetail = {
  tagline: string;
  longDescription: string;
  features: string[];
  screenshots: string[];
  rating: string;
  fileSize: string;
  minimumOsVersion: string;
  themeColor: "mint" | "sky" | "coral" | "violet" | "amber" | "teal";
};

const hiRes = (url: string) => url.replace(/\/\d+x\d+bb\.png$/, "/750x1334bb.png");

export const APP_DETAILS: Record<string, AppDetail> = {
  "picture-puzzle": {
    tagline: "Spot the theme that ties four images together.",
    longDescription:
      "Experience the picture comparison puzzle game. Spot the theme that all four images have in common - it is sometimes not as obvious as you think. Loads of levels keep you entertained and puzzled.",
    features: [
      "Spot the theme that all four images have in common",
      "Loads of levels - easy to learn, difficult to master",
      "Clean and elegant interface",
      "No time pressure - take your time",
      "Available across your phone and tablet",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/89/90/6a/89906a76-cd12-b909-fc42-b3b4cdf2314a/e47d7705-c991-4dec-9fd9-175259126084_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/6c/ea/93/6cea935a-3394-6b4c-8616-3d0f428e68af/82ed7394-68ae-495d-8364-290ce8668637_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c5/77/67/c57767fd-6623-a76e-165f-abbeb79a6434/405e115b-77c2-4250-b1a9-041d6d854417_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9f/b3/d5/9fb3d5b7-9f86-d5c1-e60a-d4daa9193004/27e6adbf-9633-419b-81a9-985010b24058_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "157 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "mint",
  },
  "candy-connect": {
    tagline: "Matching connection puzzles with a candy twist.",
    longDescription:
      "Connect consecutive candy across the board to clear them. Chain longer connections for more points, and grab collectables for extra rewards. Easy to learn, difficult to master.",
    features: [
      "Connect consecutive candy to remove it from the board",
      "Chain more in a row for bigger point combos",
      "Grab collectables for extra rewards",
      "Beautiful candy-themed graphics",
      "Available across your phone and tablet",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/00/80/12/008012af-4033-ec61-4913-4222eebcb84f/03c9145d-28ee-41eb-acd9-83204e7b2f10_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/48/69/5a/48695a3f-6e20-abcd-a12e-53fec4795f8a/f65c21c3-8522-4078-a5fa-f3ec6afcf0e9_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7c/77/03/7c770347-a988-91d1-891e-70dbe22a9cfd/c3b3d811-9144-4da9-9452-1c00e89640d6_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d6/2d/9d/d62d9d18-9e63-004f-7280-2c77f774fe7c/54c8c2e8-99aa-4311-884c-5e4ecd91cc73_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "343 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "coral",
  },
  "critter-pop": {
    tagline: "Bubble-popping puzzles starring tiny critters.",
    longDescription:
      "Connect consecutive critter icons to pop them off the board. The more you connect, the bigger your score, and collectables bring extra rewards. Hundreds of levels - patterns are the key.",
    features: [
      "Connect consecutive icons to remove them",
      "Chain more in a row for bigger point combos",
      "Grab collectables for extra rewards",
      "Hundreds of unique levels - easy to learn, difficult to master",
      "Available across your phone and tablet",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/aa/d8/d4/aad8d473-1de3-963f-0ee0-f12c22e692a0/51dfabb9-dd26-42e0-aaa6-4e152dc1741b_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9d/17/46/9d1746ce-cae8-0778-5779-7a00540f6420/ef407193-84ec-4c43-8b77-70c2bd92ae74_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/e5/7d/a1/e57da17e-3cee-7385-220b-315093de2d5a/9b9d37e2-edbf-4562-8e06-53ecb1d2818f_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/16/a5/3e/16a53e66-cd54-efa3-869b-0ceb24e9b0f5/83148a4a-3d0d-4c60-9166-dccc3938ddab_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "182 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "amber",
  },
  "blocks-mayhem": {
    tagline: "A classic block stacking game, with a twist.",
    longDescription:
      "Line up falling blocks to clear lines, plan your strategy with upcoming pieces, and park blocks to deploy when you need them. Never-ending progression - just don't let the stack hit the top.",
    features: [
      "Line up the falling blocks to clear complete lines",
      "Use upcoming blocks to plan your strategy",
      "Park blocks to deploy them later",
      "Never-ending game progression",
      "Available across your phone and tablet",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4b/03/5d/4b035d17-0fe5-e1f2-5be3-65ab85ce3d14/b89924e2-9432-4454-83ad-25acfd381d07_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/dc/f8/9a/dcf89a92-4880-6a3f-aa87-7f0bca85fe39/b734ffbb-607b-4d76-a686-1fa060222545_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/37/18/7a/37187a64-3884-9973-250d-829ed8b1a399/6b34c590-1d7f-4c25-9259-2a97d06d711a_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/75/c7/00/75c70072-4fc4-06b3-8e5a-885fa672595e/328e5d94-9244-4478-a25d-8753b0e8e9cb_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "125 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "violet",
  },
  "galaxy-defender": {
    tagline: "A beautifully illustrated retro shooter.",
    longDescription:
      "Pick your starting ship, dodge enemy attacks, and collect upgrades and power-ups. Play as long as you can to beat your high score. Never-ending progression with handcrafted retro art.",
    features: [
      "Choose your starting ship with its own unique attack",
      "Dodge enemy ships and incoming fire",
      "Collect upgrades and power-ups",
      "Play as long as you can to beat your high score",
      "Beautifully illustrated retro arcade graphics",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fc/bb/b2/fcbbb2a2-3957-6580-28cf-707351bed26d/aede960a-dea3-484f-bb90-b00c35155a1d_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9e/0a/f9/9e0af912-68d5-332c-f39e-e730ad88d47f/9f880e42-6080-4297-8976-27095c67fcd9_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/98/fd/5c/98fd5c73-74c0-6d3d-1cdd-5a2455d29dd1/5e269d10-7e88-4d02-8cd5-185d10eed4b3_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/82/fe/10/82fe1060-255c-44aa-f538-43534f12f6e6/7fa10d53-b997-45c4-93a6-2f98e8579c9b_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "178 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "violet",
  },
  "pipe-swipe": {
    tagline: "A unique tile-swiping, pipe-connecting puzzle with a steampunk look.",
    longDescription:
      "Drag tiles to move them, connect the start and exit pipes in as few moves as you can, and outsmart fixed tiles that won't budge. Hundreds of levels - patience is the key.",
    features: [
      "Drag tiles to slide them across the board",
      "Connect the start and exit pipes in the fewest moves possible",
      "Some tiles cannot be moved - plan around them",
      "Hundreds of unique levels - easy to learn, difficult to master",
      "Beautiful steampunk-themed graphics",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/37/84/3e/37843e53-9cf3-3ec6-9c0e-0d6819808b4b/fd3d78ec-22ad-4a90-a3da-84a8aac6d735_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f2/08/41/f20841e0-b149-3cf4-f7be-3353944b4a4d/38df7071-c534-44c2-b6a5-58dbf1db2bc5_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ca/6b/a1/ca6ba1fb-c41d-77d9-66aa-60bfae5fdee7/bbec3d4e-2ed1-441e-a3a1-2a32363480de_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/7f/1b/fa/7f1bfaa2-c054-107b-bf64-7d79c0e4a787/6a490249-c2ae-4706-9491-6f432b9d18d2_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "135 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "amber",
  },
  "solitaire-island": {
    tagline: "Classic Klondike solitaire with a calm island vibe.",
    longDescription:
      "One-draw Klondike solitaire with relaxing island music and visuals. Drag cards to move them, double-tap to send to the suit pile, and challenge yourself with the timer and move tracker.",
    features: [
      "Klondike Solitaire - classic one-draw gameplay",
      "Double-tap to send cards to the suit pile",
      "Hint feature for when you get stuck",
      "Timer, score, and move tracker to beat your best",
      "15 card designs and 5 background colors",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d1/df/95/d1df95e5-2969-c79e-3528-d646ce5d5902/74313074-7750-43c3-ae24-e85b293b1b83_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0b/a7/80/0ba78015-451f-3fac-a20a-33a57a0880cc/ed91e219-28d9-450a-9d54-1f55f2df95f8_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/93/cf/87/93cf8758-e4f0-8e70-ab97-763b810edc68/34133560-3798-495a-945b-31588350dd70_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/45/d4/6a/45d46a42-16f5-01cc-2c62-16a31a0ae6f5/7a0ebe9f-94d5-4ddc-9a98-0adbe269d331_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "210 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "teal",
  },
  sudoku: {
    tagline: "The classic number puzzle, beautifully rendered.",
    longDescription:
      "Pick your difficulty and dive in. Sudoku for Motivv pairs the classic brain puzzle with a clean, modern interface and no annoying ads.",
    features: [
      "Choose your difficulty level - easy to expert",
      "Clean, modern UI built for daily play",
      "No time limit - solve at your own pace",
      "Totally free with no ads",
      "Available across your phone and tablet",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d0/9f/16/d09f1670-a701-5bb4-c2ca-3adff4db1477/e47f332b-df26-4024-973b-35b9c5c11dfe_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3e/af/b6/3eafb690-3f64-00c3-dceb-9c4ff4c7ca8b/19bf3fe8-4e73-46fb-a9cf-24de4d369aa0_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c9/e2/97/c9e29706-4bad-930a-83a2-6bd12b19bd89/50c9f288-11c5-4a56-9097-d28a0c18173a_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d2/94/52/d29452e1-824d-3100-e963-745d0d5b15f0/a9eda64c-4546-4885-a074-5cc87e2478f2_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "254 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "sky",
  },
  "word-forest": {
    tagline: "Find words by tracing letters in the forest.",
    longDescription:
      "A combination word-finder puzzle game set deep in the forest. Swipe letters to complete word lists, shuffle for hints, and discover words you didn't even know you knew.",
    features: [
      "Swipe across letters to complete word lists",
      "Shuffle letters for a hint",
      "Discover new words as you progress",
      "Hundreds of unique levels - easy to learn, difficult to master",
      "Beautiful forest-themed graphics",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4e/ab/ec/4eabec6c-4ef6-f079-b723-738387a2b64e/254f1abf-9a39-4700-b014-a95d266763b9_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ce/18/4d/ce184d7e-802a-d2c5-a834-faab6fa2f8b6/1583de34-ac3d-4fc4-b2e9-f6ae8756b3fe_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/49/68/b9/4968b9c5-9807-d74a-762f-c052d2379d1a/36551ae8-9dcf-4e53-aa74-5bc74de2e98e_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/43/a9/31/43a9312e-7ee1-131f-5d15-ae77ba54110f/671689ec-7ef4-447e-a676-30cb8608a041_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "206 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "mint",
  },
  "word-search-neon": {
    tagline: "Classic word search with a retro arcade look.",
    longDescription:
      "Find hidden words on a neon-soaked board. Two game modes (Progress and Casual), dozens of categories, and thousands of words - all with hints when you need them.",
    features: [
      "Find hidden words by swiping in any direction",
      "Progress mode - complete levels to unlock categories",
      "Casual mode - randomly generated games",
      "Dozens of categories, thousands of words",
      "Word and letter hints using earned coins",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/1d/77/b6/1d77b6c0-3474-018d-86e3-ca1413a22153/2c47a18a-2ad1-4bab-83f5-fa57824f9588_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8f/df/56/8fdf566a-57c8-0820-a0f3-3758925a3b9a/6a80b2d1-8896-4c2a-a19e-f5abdd25eb05_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/71/45/87/7145877b-5fde-50ba-38d1-3244054fd91f/6801e994-1181-4e8d-8649-36f8d3af91d9_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ec/3f/27/ec3f2760-018e-7cfc-6fe7-60974a06f2cf/11eda72b-6973-46b0-86a8-c975e1e3706f_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "121 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "violet",
  },
  "hexa-temple": {
    tagline: "Fit hexagonal blocks into the temple frame.",
    longDescription:
      "Enter the temple and expand your mind with a unique hexagonal puzzle. Drag blocks (no rotation allowed) and fit them all into the frame. Hundreds of levels with Aztec-themed graphics.",
    features: [
      "Drag the blocks to move them across the board",
      "Fit them all into the temple frame",
      "Blocks cannot be rotated - plan ahead",
      "Hundreds of unique levels with no time limit",
      "Beautiful Aztec-themed graphics",
    ],
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bd/7e/c5/bd7ec584-9756-f4c2-e757-ac889678ba94/56b1d3c9-f00f-4f69-9938-fb6e2889e3e1_5.5_inch_-_1242_x_2208_Screenshot01.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4c/fe/55/4cfe5528-bc07-13a2-84ee-65dbb0992a48/2cdb1b09-dfbb-4d1e-8621-145cfc97ae35_5.5_inch_-_1242_x_2208_Screenshot02.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8d/30/16/8d301658-9554-43b7-6642-be6e38b5caa8/4e3d17a2-5b15-4431-80d9-afca6c2bc86d_5.5_inch_-_1242_x_2208_Screenshot03.png/392x696bb.png",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/47/97/9b/47979b00-700f-ea6c-5a13-002f3784286f/44020d1e-ea0d-4784-8a21-77be2e171111_5.5_inch_-_1242_x_2208_Screenshot04.png/392x696bb.png",
    ].map(hiRes),
    rating: "4+",
    fileSize: "142 MB",
    minimumOsVersion: "iOS 13.0+",
    themeColor: "amber",
  },
};

export function getAppDetail(slug: string): AppDetail | null {
  return APP_DETAILS[slug] ?? null;
}
