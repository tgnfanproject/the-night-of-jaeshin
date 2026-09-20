// ---------------------------------------------
// The Night of Jaeshin — Version 7
// Shared Supabase counter + layered light system
// ---------------------------------------------

const SUPABASE_URL = "https://vuawdlsyghfburxhkwwr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_-MGW3oqEcuhOVLN1imw2cg_5KurcuBL";

const lanternPosts = [
  {
    id: "JAE-0001",
    username: "Hana",
    handle: "@logofhana",
    handleUrl: "https://x.com/logofhana",
    message:
      "Happy birthday, Jaeshin!\n何百年、何千年を歩むあなたの人生が、この先も祝福で満ちていますように",
    image: "",
    type: "message",
    scene: 1,
    slot: 1
  },
  {
    id: "JAE-0002",
    username: "The Ghost’s Nocturne",
    handle: "",
    handleUrl: "",
    message: "",
    link: "https://www.lezhinus.com/en/comic/ghost_nocturne",
    linkLabel: "Read The Ghost’s Nocturne →",
    image: "images/sample_1.jpeg",
    type: "illustration",
    scene: 4,
    slot: 10
  },
  {
    id: "JAE-0003",
    username: "Geumdong1",
    handle: "",
    handleUrl: "",
    message: "",
    image: "images/sample_2.jpg",
    type: "photo",
    scene: 2,
    slot: 1
  },
  {
    id: "JAE-0004",
    username: "EE❤️💚",
    handle: "@eeminnim",
    handleUrl: "https://x.com/eeminnim",
    message: "내가 가장 사랑하는 재신❤️ 생일 축하해❤️\n매년 9월이 오는 걸 정말 기대하고 있어.\n彼岸花가 피기를 기다리는 이유는 네 생일이 다가오기 때문이야.\n기다리는 동안에도 왠지 너에게 조금 더 가까워지는 기분이 들어🥰\n네가 언제나 행복하기를 바랄게. ❤️",
    image: "images/Jae-004.jpeg",
    type: "photo",
    scene: 1,
    slot: 5
  },
  {
    id: "JAE-0005",
    username: "_valartes_",
    handle: "@ValArtes_",
    handleUrl: "https://x.com/ValArtes_",
    message:
      "HBD JaeShin❤️!!!",
    image: "",
    type: "message",
    scene: 1,
    slot: 6
  },
  {
    id: "JAE-0006",
    username: "AnonymousGeumdong1",
    handle: "",
    handleUrl: "",
    message:
      "재신아 생일 축하해!!! 행복하게 녹이랑 알콩달콩 평생 함께 사랑하자",
    image: "",
    type: "message",
    scene: 2,
    slot: 2
  },
  {
    id: "JAE-0007",
    username: "冬不眠島DonMian",
    handle: "@Zyiikasuye",
    handleUrl: "https://x.com/Zyiikasuye",
    message:
      "재신아, 영원히 행복하길 바라🥹",
    image: "images/Jae-007.jpeg",
    type: "illustration",
    scene: 2,
    slot: 3
  },
  {
    id: "JAE-0008",
    username: "Leng",
    handle: "@Lengovo_0220",
    handleUrl: "https://x.com/Leng_ovo0220",
    message: "Happy birthday to JaeShin! Be happy with LeeNok all the time.",
    image: "images/Jae-008.png",
    type: "illustration",
    scene: 3,
    slot: 2
  },
  {
    id: "JAE-0009",
    username: "Sasa",
    handle: "@SaSa__lovely_",
    handleUrl: "https://x.com/SaSa__lovely_",
    message:
      "재신아 생일 축하해!!! 행복하게 녹이랑 알콩달콩 평생 함께 사랑하자",
    image: "",
    type: "message",
    scene: 3,
    slot: 1
  },
  {
    id: "JAE-0010",
    username: "Joy",
    handle: "@runitdownfast",
    handleUrl: "https://x.com/runitdownfast",
    message: "❤️💚",
    image: "images/Jae-010.jpg",
    type: "photo",
    scene: 2,
    slot: 4
  },
  {
    id: "JAE-0011",
    username: "AnonymousGeumdong2",
    handle: "",
    handleUrl: "",
    message: "Jaenok💚❤️",
    image: "",
    type: "message",
    scene: 2,
    slot: 5
  },
  {
    id: "JAE-0012",
    username: "AnonymousGeumdong3",
    handle: "",
    handleUrl: "",
    message: "Happy Birthday❤️",
    image: "",
    type: "message",
    scene: 2,
    slot: 7
  },
  {
    id: "JAE-0013",
    username: "冬不眠島DonMian",
    handle: "@Zyiikasuye",
    handleUrl: "https://x.com/Zyiikasuye",
    message:
      "Happy Birthday～❤️💚",
    image: "images/Jae-013.jpeg",
    type: "illustration",
    scene: 3,
    slot: 3
  },
  {
    id: "JAE-0014",
    username: "Leng",
    handle: "@Lengovo_0220",
    handleUrl: "https://x.com/Leng_ovo0220",
    message: "Happy birthday! I miss you and LeeNok very much.💚❤️",
    image: "images/Jae-014.png",
    type: "illustration",
    scene: 2,
    slot: 6
  },
  {
    id: "JAE-0015",
    username: "Jaenok  forever",
    handle: "Kyo_Shin",
    handleUrl: "",
    message: "Happy birthday to the most perfect princes. The most beautiful and incredible manhwaboys the world has ever known. He will have so much change alongside Nok. I love him with all my heart. Happy Jaeshin Day 💚❤️",
    image: "images/Jae-015.jpg",
    type: "photo",
    scene: 1,
    slot: 9
  },
  {
    id: "JAE-0016",
    username: "Jaenok  forever",
    handle: "Kyo_Shin",
    handleUrl: "",
    message: "Happy birthday to the most perfect princes. The most beautiful and incredible manhwaboys the world has ever known. He will have so much change alongside Nok. I love him with all my heart. Happy Jaeshin Day 💚❤️",
    image: "images/Jae-016.jpg",
    type: "photo",
    scene: 2,
    slot: 8
  },
  {
    id: "JAE-0017",
    username: "Jaenok  forever",
    handle: "Kyo_Shin",
    handleUrl: "",
    message: "Happy birthday to the most perfect princes. The most beautiful and incredible manhwaboys the world has ever known. He will have so much change alongside Nok. I love him with all my heart. Happy Jaeshin Day 💚❤️",
    image: "images/Jae-017.jpg",
    type: "photo",
    scene: 3,
    slot: 6
  },
  {
    id: "JAE-0018",
    username: "frani",
    handle: "@strawberryNok",
    handleUrl: "https://x.com/strawberryNok",
    message: "Happy birthday our dearest Jaeshin. \n I miss you, but I know we will see you (and Nok) very soon ❤️💚",
    image: "images/Jae-018.jpeg",
    type: "photo",
    scene: 1,
    slot: 7
  },
  {
    id: "JAE-0019",
    username: "EE❤️💚",
    handle: "@eeminnim",
    handleUrl: "https://x.com/eeminnim",
    message: "붉은 꽃불 속에서 서로를 품고, 영원히 사랑하자❤️💚",
    image: "images/Jae-019.jpeg",
    type: "photo",
    scene: 2,
    slot: 9
  },
  {
    id: "JAE-0020",
    username: "悠月",
    handle: "@yu0_0tuki",
    handleUrl: "https://x.com/yu0_0tuki",
    message: "ジェシン、誕生日おめでとう！！\nクムドンの姿のだった時のあなたは夜が来るのがきっと待ち遠しかったはず\nノクを思う存分抱きしめ、心を満たすことのできる夜が永遠に続けばいいと思ったことでしょう\n今宵も愛しい人と素敵な夜を過ごしてくださいね",
    image: "images/Jae-020.jpg",
    type: "photo",
    scene: 1,
    slot: 3
  },
  {
    id: "JAE-0021",
    username: "AnonymousGeumdong4",
    handle: "",
    handleUrl: "",
    message: "Happy birthday, Jaeshin!💚❤️🐾",
    image: "images/Jae-021.jpg",
    type: "photo",
    scene: 1,
    slot: 2
  },
  {
    id: "JAE-0022",
    username: "冬不眠島DonMian",
    handle: "@Zyiikasuye",
    handleUrl: "https://x.com/Zyiikasuye",
    message: "재신, 생일 축하해! 🥹 이녹과 오래오래 행복하게 지내길 바라. 너희가 정말 너무 보고 싶어. 다시 만날 날을 기대하고 있을게! 🥹",
    image: "images/Jae-022.jpeg",
    type: "illustration",
    scene: 1,
    slot: 4
  },
  {
    id: "JAE-0023",
    username: "HiddenTrack11_",
    handle: "@DiaryWedne87668",
    handleUrl: "https://x.com/DiaryWedne87668?",
    message: "Jaeshin comes from the deep night. Like midnight, he is mysterious and captivating, yet his heart holds the purity of a young soul.He risked everything to save Nok. While learning how to love, he had already understood what true love really is.Happy birthday!and may joy be with you every day!🎉\nThank you, dear Jade nim and ananas nim. I love you so much. I will always dwell in this beautiful world you have built. May you always be healthy and happy.❤️💚🐾",
    image: "images/Jae-023.jpeg",
    type: "illustration",
    scene: 3,
    slot: 4
  },
  {
    id: "JAE-0024",
    username: "ハクク",
    handle: "@hakuku2404",
    handleUrl: "https://x.com/hakuku2404?s=20",
    message: "ジェシンお誕生日おめでとう〜❤️\nシーズン4の復帰，待ってますよ🥰",
    image: "",
    type: "message",
    scene: 1,
    slot: 8
  },
  {
    id: "JAE-0025",
    username: "Averdi",
    handle: "@averdiren",
    handleUrl: "https://x.com/Averdiren",
    message: "ʜᴀᴘᴘʏ ʙɪʀᴛʜᴅᴀʏ, ᴊᴀᴇꜱʜɪɴ\nI wish the authors health and creative success ^•^",
    image: "images/Jae-025.jpg",
    type: "photo",
    scene: 1,
    slot: 10
  },
  {
    id: "JAE-0026",
    username: "KIYOMI",
    handle: "@KIYOMI125",
    handleUrl: "https://x.com/KIYOMI125",
    message: "ジェシン❤️\n誕生日おめでとうございます🪭",
    image: "images/Jae-026.jpeg",
    type: "photo",
    scene: 2,
    slot: 10
  },
  {
    id: "JAE-0027",
    username: "SUZU",
    handle: "@bearrabbit334",
    handleUrl: "https://x.com/bearrabbit334",
    message: "	09.17\n오늘 대만에서 진행된 재신 생일 응원 광고를 보러 다녀왔어요❤️\n대만에서 함께 참여할 수 있어서 정말 너무 행복해요!!!!\n올해도 계속 재신의 생일을 함께 축하할 수 있어서 너무 기뻐요🐾\n귀야곡의 귀환을 기다리고 있을게요❤️💚🐾",
    image: "images/Jae-027.jpeg",
    type: "photo",
    scene: 3,
    slot: 5
  },
  {
    id: "JAE-0028",
    username: "AnonymousGeumdong5",
    handle: "",
    handleUrl: "",
    message: "祝地府最最最帥的時尚男模宰信生日快樂！！！\nHappy birthday to Jaeshin!!\nLove from Yana, Taiwan",
    image: "images/Jae-028.jpg",
    type: "photo",
    scene: 4,
    slot: 1
  },
  {
    id: "JAE-0029",
    username: "Vana",
    handle: "@Hirandombeetch",
    handleUrl: "https://x.com/Hirandombeetch",
    message: "Happy birthday beloved Jaeshin!! I hope you celebrate with your boy Nok! 🥹🫶🖤",
    image: "",
    type: "message",
    scene: 4,
    slot: 9
  },
  {
    id: "JAE-0030",
    username: "AnonymousGeumdong6",
    handle: "",
    handleUrl: "",
    message: "bình thường hay ghẹo chàng, nhưng này hôm nay cho em nịnh chàng một hôm nhé, HPBD Jaeshin, cdang của em 🫶❤️🐾",
    image: "",
    type: "message",
    scene: 4,
    slot: 3
  },
  {
    id: "JAE-0031",
    username: "✨",
    handle: "",
    handleUrl: "",
    message: "재신아, 생일 정말 축하해. ❤️\n \n진심으로, 내 마음 깊은 곳에 언제나 귀야곡을 소중히 간직하고 있어.\n우리 다시 만난 지 정말 오래된 것 같아.\n하지만 머지않아, 우리가 다시 만날 그날이 꼭 올 거라고 믿어.\n \n"+
             "작가님들과 모든 귀야곡 팬분들께도 전하고 싶어요.\n이 이야기를 함께 즐기고, 서로 이야기를 나눌 수 있어서 정말 행복해요.\n앞으로도 우리 모두 늘 건강하고 행복했으면 좋겠습니다. 🥹❤️💚\n \n"+
             "이 사진은 제가 올해 여름에 바다에 갔을 때 찍은 사진이에요. 아마 랜턴과는 아무런 상관이 없겠지만, 그냥 제가 그들을 정말 많이 그리워하고 있다는 말을 하고 싶었어요. 그저 그뿐이에요.\n \n"+
             "To the organizers, thank you so much for giving everyone the chance to light lanterns for Jaeshin.\n \n"+
             "Yêu The Ghost's Nocturne, Yêu JaeNok, Yêu Geumdong.\nHẹn ngày ta tương phùng.",
    image: "images/Jae-031.jpeg",
    type: "photo",
    scene: 4,
    slot: 4
  },
  {
    id: "JAE-0032",
    username: "AnonymousGeumdong7",
    handle: "",
    handleUrl: "",
    message: "Chúc mừng sinh nhật cụ Cún của em bé Nok",
    image: "",
    type: "message",
    scene: 4,
    slot: 5
  },
  {
    id: "JAE-0033",
    username: "i am brick",
    handle: "",
    handleUrl: "",
    message: "Happy Birthday Jaeshin 😘😘😘",
    image: "",
    type: "message",
    scene: 4,
    slot: 6
  },
  {
    id: "JAE-0034",
    username: "AnonymousGeumdong8",
    handle: "",
    handleUrl: "",
    message: "Happy birthday Jaeshin and please come back soon!",
    image: "",
    type: "message",
    scene: 4,
    slot: 7
  },
  {
    id: "JAE-0035",
    username: "AnonymousGeumdong9",
    handle: "",
    handleUrl: "",
    message: "Chang oi thiep nho chang lam",
    image: "",
    type: "message",
    scene: 4,
    slot: 8
  },
  {
    id: "JAE-0036",
    username: "りん",
    handle: "@rin_i2d",
    handleUrl: "https://x.com/rin_i2d",
    message: "재신 생일 축하해요！🎉\n많은 행복이 찾아오기를 바라요❤️💚🐾",
    image: "images/Jae-036.jpeg",
    type: "illustration",
    scene: 4,
    slot: 2
  },
];

const slotMap = {
  1: [
    { x: 52, y: 28 }, { x: 64, y: 28 }, { x: 78, y: 28 }, { x: 90, y: 28 },
    { x: 40, y: 42, scale: 0.7 }, { x: 52, y: 42, scale: 0.7 }, { x: 63, y: 42, scale: 0.7 }, { x: 74, y: 42, scale: 0.7 },
    { x: 17, y: 75, scale: 1.3, ground: true }, { x: 42, y: 80, scale: 1.3, ground: true }
  ],
  2: [
    { x: 50, y: 35, scale: 0.6 }, { x: 63, y: 34, scale: 0.6 }, { x: 75, y: 33, scale: 0.6 }, { x: 87, y: 32, scale: 0.6 },
    { x: 8, y: 60, scale: 0.8, ground: true }, { x: 24, y: 61, scale: 0.8, ground: true }, { x: 40, y: 61, scale: 0.8, ground: true },
    { x: 56, y: 62, scale: 0.8, ground: true }, { x: 73, y: 62, scale: 0.8, ground: true }, { x: 90, y: 63, scale: 0.8, ground: true }
  ],
  3: [
    { x: 7, y: 38 }, { x: 21, y: 34 }, { x: 38, y: 30 },
    { x: 52, y: 38 }, { x: 71, y: 35 }, { x: 94, y: 32 }
  ],
  4: [
    { x: 10, y: 44, scale: 0.9 }, { x: 30, y: 44, scale: 0.9 }, { x: 50, y: 44, scale: 0.9 }, { x: 70, y: 44, scale: 0.9 },
    { x: 35, y: 55, scale: 0.7 }, { x: 48, y: 52, scale: 0.7 }, { x: 61, y: 48, scale: 0.7 },
    { x: 54, y: 75, scale: 0.6 }, { x: 66, y: 75, scale: 0.6 }, { x: 78, y: 75, scale: 0.6 }, { x: 90, y: 75, scale: 0.6 }
  ]
};

const lanternModal = document.querySelector("#lanternModal");
const cardImage = document.querySelector("#cardImage");
const cardImageButton = document.querySelector("#cardImageButton");
const cardImageHint = document.querySelector("#cardImageHint");
const cardMessage = document.querySelector("#cardMessage");
const cardLink = document.querySelector("#cardLink");
const cardUsername = document.querySelector("#cardUsername");
const cardHandle = document.querySelector("#cardHandle");

const imageLightbox = document.querySelector("#imageLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCredit = document.querySelector("#lightboxCredit");

const submitModal = document.querySelector("#submitModal");
const submitButtons = [
  document.querySelector("#openSubmitButton"),
  document.querySelector("#openSubmitButtonBottom")
].filter(Boolean);

const sendLightButton = document.querySelector("#sendLightButton");
const floatingLights = document.querySelector("#floatingLights");
const staticLightsCanvas = document.querySelector("#staticLights");
const lightCountNumber = document.querySelector("#lightCountNumber");

// Layer 1: tiny fixed lights based on the shared total.
// Layer 2: a small number of decorative drifting lights on load.
// Layer 3: user-triggered drifting lights, replacing oldest ones after the cap.
const INITIAL_DYNAMIC_LIGHTS = 8;
const MAX_DYNAMIC_LIGHTS = 18;

let lastFocusedLantern = null;
let lightCount = 0;
let sendingLight = false;
let dynamicLightSequence = 0;

function createLanternButton(post, coordinates) {
  const button = document.createElement("button");
  button.className = "lantern-button";
  button.type = "button";
  button.style.setProperty("--x", `${coordinates.x}%`);
  button.style.setProperty("--y", `${coordinates.y}%`);
  button.style.setProperty("--sway", `${4.1 + Math.random() * 1.8}s`);
  button.setAttribute("aria-label", `Open lantern from ${post.username}`);
  button.setAttribute("aria-expanded", "false");
  button.dataset.postId = post.id;

  // Optional slot settings:
  // scale: 1 = current V10 size, 1.1 = 10% larger, 0.9 = 10% smaller
  // sway: false = do not swing
  // cord: false = hide the thin hanging cord
  // ground: true = convenience setting; disables both sway and cord
  const scale = Number.isFinite(Number(coordinates.scale))
    ? Number(coordinates.scale)
    : 1;

  const isGround = coordinates.ground === true;
  const shouldSway = isGround ? false : coordinates.sway !== false;
  const showCord = isGround ? false : coordinates.cord !== false;

  const lanternType = ["message", "illustration", "photo"].includes(post.type)
    ? post.type
    : (post.image ? "photo" : "message");

  const lanternClasses = [
    "lantern",
    `lantern--${lanternType}`,
    shouldSway ? "" : "lantern--static",
    showCord ? "" : "lantern--no-cord"
  ].filter(Boolean).join(" ");

  button.innerHTML = `
    <span
      class="lantern-scale"
      aria-hidden="true"
      style="--lantern-scale:${scale}"
    >
      <span class="${lanternClasses}">
        <span class="lantern__glow"></span>
        <img
          class="lantern__img"
          src="images/lantern.png"
          alt=""
          draggable="false"
          loading="lazy"
        >
      </span>
    </span>
  `;

  button.addEventListener("click", () => openLantern(post, button));
  return button;
}

function renderLanterns() {
  lanternPosts.forEach((post) => {
    const layer = document.querySelector(`[data-lantern-layer="${post.scene}"]`);
    const coordinates = slotMap[post.scene]?.[post.slot - 1];

    if (!layer || !coordinates) {
      console.warn("Missing scene or slot for:", post);
      return;
    }

    layer.appendChild(createLanternButton(post, coordinates));
  });
}

function openLantern(post, button) {
  document
    .querySelectorAll(".lantern-button[aria-expanded='true']")
    .forEach((item) => item.setAttribute("aria-expanded", "false"));

  button.setAttribute("aria-expanded", "true");
  lastFocusedLantern = button;

  if (post.message) {
    cardMessage.textContent = post.message;
    cardMessage.hidden = false;
  } else {
    cardMessage.textContent = "";
    cardMessage.hidden = true;
  }

  if (post.link) {
    cardLink.href = post.link;
    cardLink.textContent = post.linkLabel || post.link;
    cardLink.hidden = false;
  } else {
    cardLink.href = "";
    cardLink.textContent = "";
    cardLink.hidden = true;
  }

  cardUsername.textContent =
    post.username === "Anonymous" ? "— Anonymous" : `— ${post.username}`;

  if (post.handle) {
    cardHandle.textContent = post.handle;
    cardHandle.href = post.handleUrl || `https://x.com/${post.handle.replace(/^@/, "")}`;
    cardHandle.hidden = false;
  } else {
    cardHandle.textContent = "";
    cardHandle.href = "";
    cardHandle.hidden = true;
  }

  if (post.image) {
    cardImage.src = post.image;
    cardImage.alt = `Artwork or photo shared by ${post.username}`;
    cardImageButton.hidden = false;
    cardImageHint.hidden = false;
    cardImageButton.dataset.username = post.username;
  } else {
    cardImage.src = "";
    cardImage.alt = "";
    cardImageButton.hidden = true;
    cardImageHint.hidden = true;
    cardImageButton.dataset.username = "";
  }

  lanternModal.hidden = false;
  document.body.style.overflow = "hidden";
  lanternModal.querySelector(".modal__close")?.focus();
}

function openImageLightbox() {
  if (!cardImage.src || cardImageButton.hidden) return;

  const username = cardImageButton.dataset.username || "Anonymous";
  lightboxImage.src = cardImage.src;
  lightboxImage.alt = cardImage.alt;
  lightboxCredit.textContent =
    username === "Anonymous" ? "Shared by Anonymous" : `Shared by ${username}`;

  imageLightbox.hidden = false;
  document.body.style.overflow = "hidden";
  imageLightbox.querySelector(".image-lightbox__close")?.focus();
}

function closeImageLightbox() {
  if (imageLightbox.hidden) return;
  imageLightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "hidden";
  cardImageButton?.focus();
}

function closeLantern() {
  if (lanternModal.hidden) return;

  lanternModal.hidden = true;
  document.body.style.overflow = "";

  if (lastFocusedLantern) {
    lastFocusedLantern.setAttribute("aria-expanded", "false");
    lastFocusedLantern.focus();
  }
}

function openSubmitPreview() {
  if (!submitModal) return;
  submitModal.hidden = false;
  document.body.style.overflow = "hidden";
  submitModal.querySelector(".modal__close")?.focus();
}

function closeSubmitPreview() {
  if (!submitModal || submitModal.hidden) return;
  submitModal.hidden = true;
  document.body.style.overflow = "";
}

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// --------------------------------------------------
// STATIC LIGHT LAYER
// --------------------------------------------------

function getStaticLightCount(total) {
  if (total <= 0) return 0;
  if (total <= 50) return 10;
  if (total <= 100) return 20;
  if (total <= 200) return 35;
  if (total <= 400) return 55;
  if (total <= 600) return 85;
  if (total <= 700) return 100;
  if (total <= 850) return 115;
  if (total <= 1000) return 140;
  if (total <= 1200) return 200;
  if (total <= 1300) return 250;
  if (total <= 1500) return 300;
  if (total <= 2500) return 300;
  if (total <= 4000) return 300;
  if (total <= 7000) return 300;
  return 240;
}

function drawStaticLights() {
  if (!staticLightsCanvas) return;

  const ctx = staticLightsCanvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  staticLightsCanvas.width = Math.floor(width * dpr);
  staticLightsCanvas.height = Math.floor(height * dpr);
  staticLightsCanvas.style.width = `${width}px`;
  staticLightsCanvas.style.height = `${height}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const count = getStaticLightCount(lightCount);

  for (let i = 1; i <= count; i += 1) {
    const x = 5 + seededRandom(i * 2.31) * 90;
    const y = 5 + seededRandom(i * 4.73) * 48;
    const radius = 0.7 + seededRandom(i * 6.11) * 1.2;
    const alpha = 0.25 + seededRandom(i * 1.77) * 0.42;

    ctx.beginPath();
    ctx.arc((x / 100) * width, (y / 100) * height, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, ${125 + Math.floor(seededRandom(i * 8.9) * 65)}, ${92 + Math.floor(seededRandom(i * 9.3) * 55)}, ${alpha})`;
    ctx.fill();

    if (i % 5 === 0) {
      ctx.beginPath();
      ctx.arc((x / 100) * width, (y / 100) * height, radius * 2.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(231, 65, 44, ${alpha * 0.16})`;
      ctx.fill();
    }
  }
}

// --------------------------------------------------
// DYNAMIC LIGHT LAYER
// --------------------------------------------------

function makeDynamicLightData(seed) {
  const x = 8 + seededRandom(seed * 1.13) * 84;
  const y = 8 + seededRandom(seed * 1.91) * 34;
  const size = 7 + seededRandom(seed * 2.17) * 8;
  const duration = 4.8 + seededRandom(seed * 0.67) * 2.8;
  const driftX = -50 + seededRandom(seed * 1.39) * 100;
  const driftY = -34 + seededRandom(seed * 2.83) * 68;

  return { x, y, size, duration, driftX, driftY };
}

function createDynamicLight(seed, lightData = makeDynamicLightData(seed)) {
  const light = document.createElement("span");
  light.className = "floating-light floating-light--ambient";
  light.dataset.dynamicOrder = String(++dynamicLightSequence);

  light.style.setProperty("--light-x", `${lightData.x}%`);
  light.style.setProperty("--light-y", `${lightData.y}%`);
  light.style.setProperty("--light-size", `${lightData.size}px`);
  light.style.setProperty("--ambient-duration", `${lightData.duration}s`);
  light.style.setProperty("--ambient-drift-x", `${lightData.driftX.toFixed(1)}px`);
  light.style.setProperty("--ambient-drift-y", `${lightData.driftY.toFixed(1)}px`);

  return light;
}

function renderInitialDynamicLights() {
  if (!floatingLights) return;

  floatingLights
    .querySelectorAll(".floating-light--ambient")
    .forEach((node) => node.remove());

  dynamicLightSequence = 0;

  for (let i = 1; i <= INITIAL_DYNAMIC_LIGHTS; i += 1) {
    // Fixed decorative seeds so the initial scene is stable on reload.
    floatingLights.appendChild(createDynamicLight(9000 + i));
  }
}

function removeOldestDynamicLightIfNeeded() {
  const dynamicLights = Array.from(
    floatingLights.querySelectorAll(".floating-light--ambient")
  );

  if (dynamicLights.length < MAX_DYNAMIC_LIGHTS) return;

  dynamicLights.sort(
    (a, b) =>
      Number(a.dataset.dynamicOrder || 0) -
      Number(b.dataset.dynamicOrder || 0)
  )[0]?.remove();
}

function addDynamicLightAfterArrival(seed, lightData) {
  if (!floatingLights) return;
  removeOldestDynamicLightIfNeeded();
  floatingLights.appendChild(createDynamicLight(seed, lightData));
}

function createRisingLight(seed, lightData, onArrive) {
  if (!floatingLights) return;

  const light = document.createElement("span");
  light.className = "floating-light floating-light--new";

  // The launch X and arrival Y match the future drifting particle's
  // initial position, so it looks like the launched light becomes that particle.
  light.style.setProperty("--light-x", `${lightData.x}%`);
  light.style.setProperty("--light-size", `${lightData.size + 1}px`);
  light.style.setProperty("--target-y-vh", `${lightData.y}svh`);

  floatingLights.appendChild(light);

  light.addEventListener(
    "animationend",
    () => {
      light.remove();

      // Only now does the new drifting light appear.
      if (typeof onArrive === "function") {
        onArrive();
      }
    },
    { once: true }
  );
}

// --------------------------------------------------
// SUPABASE SHARED COUNTER
// --------------------------------------------------

async function callSupabaseFunction(functionName) {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/rpc/${functionName}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_PUBLISHABLE_KEY,
        "Authorization": `Bearer ${SUPABASE_PUBLISHABLE_KEY}`
      },
      body: "{}"
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`${functionName} failed: ${response.status} ${errorText}`);
  }

  return response.json();
}

async function loadGlobalLightCount() {
  try {
    const result = await callSupabaseFunction("get_light_count");
    lightCount = Number(result) || 0;

    if (lightCountNumber) {
      lightCountNumber.textContent = lightCount.toLocaleString();
    }

    drawStaticLights();
    renderInitialDynamicLights();
  } catch (error) {
    console.error(error);

    if (lightCountNumber) {
      lightCountNumber.textContent = "—";
    }

    // Decorative drifting particles still appear if the counter service fails.
    renderInitialDynamicLights();
  }
}

async function sendLight() {
  if (sendingLight) return;

  sendingLight = true;

  if (sendLightButton) {
    sendLightButton.disabled = true;
  }

  try {
    const result = await callSupabaseFunction("increment_light");
    lightCount = Number(result) || (lightCount + 1);

    if (lightCountNumber) {
      lightCountNumber.textContent = lightCount.toLocaleString();
    }

    // Static density updates only if the new total crosses a threshold.
    drawStaticLights();

    const seed = 100000 + lightCount;
    const lightData = makeDynamicLightData(seed);

    createRisingLight(seed, lightData, () => {
      addDynamicLightAfterArrival(seed, lightData);
    });
  } catch (error) {
    console.error(error);
  } finally {
    window.setTimeout(() => {
      sendingLight = false;

      if (sendLightButton) {
        sendLightButton.disabled = false;
      }
    }, 650);
  }
}

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeLantern);
});

if (cardImageButton) {
  cardImageButton.addEventListener("click", openImageLightbox);
}

document.querySelectorAll("[data-close-lightbox]").forEach((button) => {
  button.addEventListener("click", closeImageLightbox);
});

document.querySelectorAll("[data-close-submit]").forEach((button) => {
  button.addEventListener("click", closeSubmitPreview);
});

submitButtons.forEach((button) => {
  if (button.tagName === "BUTTON") {
    button.addEventListener("click", openSubmitPreview);
  }
});

if (sendLightButton) {
  sendLightButton.addEventListener("click", sendLight);
}

let lastStaticCanvasWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const widthDifference = Math.abs(window.innerWidth - lastStaticCanvasWidth);

  // Mobile browser bars often change only viewport height while scrolling.
  if (widthDifference < 40) return;

  lastStaticCanvasWidth = window.innerWidth;
  drawStaticLights();
});

window.addEventListener("orientationchange", () => {
  window.setTimeout(() => {
    lastStaticCanvasWidth = window.innerWidth;
    drawStaticLights();
  }, 200);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (imageLightbox && !imageLightbox.hidden) {
    closeImageLightbox();
    return;
  }
  if (lanternModal && !lanternModal.hidden) closeLantern();
  if (submitModal && !submitModal.hidden) closeSubmitPreview();
});

renderLanterns();
loadGlobalLightCount();
