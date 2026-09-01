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
    message:
      "Happy birthday, Jaeshin.\nMay this night be filled with all the warmth you learned to treasure.",
    image: "",
    scene: 1,
    slot: 1
  },
  {
    id: "JAE-0002",
    username: "Anonymous",
    message:
      "Thank you for showing us that even the lord of the night can learn a gentler kind of light.",
    image: "",
    scene: 1,
    slot: 2
  },
  {
    id: "JAE-0003",
    username: "Moonlit Reader",
    message:
      "Happy birthday! I hope Nok stays by your side through every night still to come.",
    image: "images/sample-photo-1.jpg",
    scene: 1,
    slot: 3
  },
  {
    id: "JAE-0004",
    username: "Lantern Keeper",
    message:
      "A small light for the one who found love in the human world.",
    image: "",
    scene: 1,
    slot: 4
  },
  {
    id: "JAE-0005",
    username: "Anonymous",
    message:
      "To Jaeshin — may you always find your way back to warmth.",
    image: "images/sample-photo-2.jpg",
    scene: 1,
    slot: 5
  },
  {
    id: "JAE-0006",
    username: "Night Traveler",
    message:
      "Happy birthday to the ruler of the night, and to the man who learned how bright love could be.",
    image: "",
    scene: 1,
    slot: 6
  },
  {
    id: "JAE-0007",
    username: "A Fan From Afar",
    message:
      "Sending one more lantern into your night. Happy birthday, Jaeshin.",
    image: "",
    scene: 1,
    slot: 7
  },
  {
    id: "JAE-0008",
    username: "Anonymous",
    message:
      "May the night be kind to you this year.",
    image: "",
    scene: 1,
    slot: 8
  },
  {
    id: "JAE-0009",
    username: "Anonymous",
    message:
      "May the night be kind to you this year.",
    image: "",
    scene: 1,
    slot: 9
  },
  {
    id: "JAE-0010",
    username: "Anonymous",
    message:
      "May the night be kind to you this year.",
    image: "",
    scene: 1,
    slot: 10
  },

  {
    id: "JAE-0011",
    username: "Hana",
    message:
      "Happy birthday, Jaeshin.\nMay this night be filled with all the warmth you learned to treasure.",
    image: "",
    scene: 2,
    slot: 1
  },
  {
    id: "JAE-0012",
    username: "Anonymous",
    message:
      "Thank you for showing us that even the lord of the night can learn a gentler kind of light.",
    image: "",
    scene: 2,
    slot: 2
  },
  {
    id: "JAE-0013",
    username: "Moonlit Reader",
    message:
      "Happy birthday! I hope Nok stays by your side through every night still to come.",
    image: "images/sample-photo-1.jpg",
    scene: 2,
    slot: 3
  },
  {
    id: "JAE-0014",
    username: "Lantern Keeper",
    message:
      "A small light for the one who found love in the human world.",
    image: "",
    scene: 2,
    slot: 4
  },
  {
    id: "JAE-0015",
    username: "Anonymous",
    message:
      "To Jaeshin — may you always find your way back to warmth.",
    image: "images/sample-photo-2.jpg",
    scene: 2,
    slot: 5
  },
  {
    id: "JAE-0016",
    username: "Night Traveler",
    message:
      "Happy birthday to the ruler of the night, and to the man who learned how bright love could be.",
    image: "",
    scene: 2,
    slot: 6
  },
  {
    id: "JAE-0017",
    username: "A Fan From Afar",
    message:
      "Sending one more lantern into your night. Happy birthday, Jaeshin.",
    image: "",
    scene: 2,
    slot: 7
  },
  {
    id: "JAE-0018",
    username: "Anonymous",
    message:
      "May the night be kind to you this year.",
    image: "",
    scene: 2,
    slot: 8
  },
  {
    id: "JAE-0019",
    username: "Anonymous",
    message:
      "May the night be kind to you this year.",
    image: "",
    scene: 2,
    slot: 9
  },
  {
    id: "JAE-0020",
    username: "Anonymous",
    message:
      "May the night be kind to you this year.",
    image: "",
    scene: 2,
    slot: 10
  },

  {
    id: "JAE-0021",
    username: "Hana",
    message:
      "Happy birthday, Jaeshin.\nMay this night be filled with all the warmth you learned to treasure.",
    image: "",
    scene: 3,
    slot: 1
  },
  {
    id: "JAE-0022",
    username: "Anonymous",
    message:
      "Thank you for showing us that even the lord of the night can learn a gentler kind of light.",
    image: "",
    scene: 3,
    slot: 2
  },
  {
    id: "JAE-0023",
    username: "Moonlit Reader",
    message:
      "Happy birthday! I hope Nok stays by your side through every night still to come.",
    image: "images/sample-photo-1.jpg",
    scene: 3,
    slot: 3
  },
  {
    id: "JAE-0024",
    username: "Lantern Keeper",
    message:
      "A small light for the one who found love in the human world.",
    image: "",
    scene: 3,
    slot: 4
  },
  {
    id: "JAE-0025",
    username: "Anonymous",
    message:
      "To Jaeshin — may you always find your way back to warmth.",
    image: "images/sample-photo-2.jpg",
    scene: 3,
    slot: 5
  },
  {
    id: "JAE-0026",
    username: "Night Traveler",
    message:
      "Happy birthday to the ruler of the night, and to the man who learned how bright love could be.",
    image: "",
    scene: 3,
    slot: 6
  }
];

const slotMap = {
  1: [
    { x: 52, y: 28 }, { x: 64, y: 28 }, { x: 78, y: 28 }, { x: 90, y: 28 },
    { x: 40, y: 42, scale: 0.9 }, { x: 52, y: 43, scale: 0.9 }, { x: 63, y: 44, scale: 0.9 }, { x: 74, y: 45, scale: 0.9 },
    { x: 18, y: 80, scale: 1.2, ground: true }, { x: 42, y: 85, scale: 1.2, ground: true }
  ],
  2: [
    { x: 50, y: 32, scale: 0.8 }, { x: 63, y: 34, scale: 0.8 }, { x: 75, y: 36, scale: 0.8 }, { x: 87, y: 38, scale: 0.8 },
    { x: 8, y: 60, ground: true }, { x: 24, y: 60, ground: true }, { x: 40, y: 60, ground: true }, 
    { x: 56, y: 60, ground: true }, { x: 73, y: 60, ground: true }, { x: 90, y: 60, ground: true }
  ],
  3: [
    { x: 7, y: 38 }, { x: 21, y: 34 }, { x: 38, y: 30 },
    { x: 50, y: 43 }, { x: 73, y: 40 }, { x: 95, y: 37 }
  ]
};

const lanternModal = document.querySelector("#lanternModal");
const cardImage = document.querySelector("#cardImage");
const cardMessage = document.querySelector("#cardMessage");
const cardUsername = document.querySelector("#cardUsername");

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

  const lanternClasses = [
    "lantern",
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

  cardMessage.textContent = post.message;
  cardUsername.textContent =
    post.username === "Anonymous" ? "— Anonymous" : `— ${post.username}`;

  if (post.image) {
    cardImage.src = post.image;
    cardImage.alt = `Artwork or photo shared by ${post.username}`;
    cardImage.hidden = false;
  } else {
    cardImage.src = "";
    cardImage.alt = "";
    cardImage.hidden = true;
  }

  lanternModal.hidden = false;
  document.body.style.overflow = "hidden";
  lanternModal.querySelector(".modal__close")?.focus();
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
  if (total <= 50) return 5;
  if (total <= 100) return 10;
  if (total <= 200) return 20;
  if (total <= 400) return 30;
  if (total <= 700) return 40;
  if (total <= 1000) return 50;
  if (total <= 1500) return 60;
  if (total <= 2500) return 70;
  if (total <= 4000) return 80;
  if (total <= 7000) return 90;
  return 100;
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

window.addEventListener("resize", () => {
  drawStaticLights();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (lanternModal && !lanternModal.hidden) closeLantern();
  if (submitModal && !submitModal.hidden) closeSubmitPreview();
});

renderLanterns();
loadGlobalLightCount();
