// ---------------------------------------------
// The Night of Jaeshin — Version 4
// Shared "Lights Sent" counter via Supabase
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
    scene: 2,
    slot: 1
  },
  {
    id: "JAE-0005",
    username: "Anonymous",
    message:
      "To Jaeshin — may you always find your way back to warmth.",
    image: "images/sample-photo-2.jpg",
    scene: 2,
    slot: 2
  },
  {
    id: "JAE-0006",
    username: "Night Traveler",
    message:
      "Happy birthday to the ruler of the night, and to the man who learned how bright love could be.",
    image: "",
    scene: 2,
    slot: 3
  },
  {
    id: "JAE-0007",
    username: "A Fan From Afar",
    message:
      "Sending one more lantern into your night. Happy birthday, Jaeshin.",
    image: "",
    scene: 3,
    slot: 1
  },
  {
    id: "JAE-0008",
    username: "Anonymous",
    message:
      "May the night be kind to you this year.",
    image: "",
    scene: 3,
    slot: 2
  }
];

const slotMap = {
  1: [
    { x: 18, y: 39 }, { x: 35, y: 35 }, { x: 54, y: 36 },
    { x: 72, y: 40 }, { x: 87, y: 44 }, { x: 26, y: 53 },
    { x: 47, y: 50 }, { x: 66, y: 53 }, { x: 82, y: 58 },
    { x: 18, y: 67 }, { x: 42, y: 68 }, { x: 69, y: 70 }
  ],
  2: [
    { x: 68, y: 28 }, { x: 79, y: 34 }, { x: 87, y: 41 },
    { x: 54, y: 40 }, { x: 43, y: 47 }, { x: 69, y: 52 },
    { x: 82, y: 57 }, { x: 56, y: 61 }, { x: 37, y: 64 },
    { x: 76, y: 69 }, { x: 24, y: 70 }, { x: 53, y: 76 }
  ],
  3: [
    { x: 13, y: 26 }, { x: 26, y: 34 }, { x: 39, y: 38 },
    { x: 52, y: 42 }, { x: 64, y: 46 }, { x: 76, y: 50 },
    { x: 87, y: 56 }, { x: 20, y: 57 }, { x: 36, y: 62 },
    { x: 54, y: 66 }, { x: 71, y: 69 }, { x: 84, y: 74 }
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
const lightCountNumber = document.querySelector("#lightCountNumber");

const MAX_VISIBLE_LIGHTS = 36;
let lastFocusedLantern = null;
let lightCount = 0;
let sendingLight = false;

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

  button.innerHTML = `
    <span class="lantern" aria-hidden="true">
      <span class="lantern__glow"></span>
      <span class="lantern__top"></span>
      <span class="lantern__bottom"></span>
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
  // If the page still contains a dummy submit modal, keep fallback behavior.
  if (submitModal) {
    submitModal.hidden = false;
    document.body.style.overflow = "hidden";
    submitModal.querySelector(".modal__close")?.focus();
  }
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

function createAmbientLight(index) {
  const light = document.createElement("span");
  light.className = "floating-light floating-light--ambient";
  light.dataset.lightIndex = String(index);

  const x = 8 + seededRandom(index * 1.13) * 84;
  const y = 7 + seededRandom(index * 1.91) * 34;
  const size = 7 + seededRandom(index * 2.17) * 8;

  // Wider and slightly faster drifting so the motion is clearly visible.
  const duration = 5.5 + seededRandom(index * 0.67) * 3.5;
  const driftX = (-42 + seededRandom(index * 1.39) * 84).toFixed(1);
  const driftY = (-28 + seededRandom(index * 2.83) * 56).toFixed(1);

  light.style.setProperty("--light-x", `${x}%`);
  light.style.setProperty("--light-y", `${y}%`);
  light.style.setProperty("--light-size", `${size}px`);
  light.style.setProperty("--ambient-duration", `${duration}s`);
  light.style.setProperty("--ambient-drift-x", `${driftX}px`);
  light.style.setProperty("--ambient-drift-y", `${driftY}px`);

  return light;
}

function renderAmbientLights() {
  if (!floatingLights) return;

  floatingLights
    .querySelectorAll(".floating-light--ambient")
    .forEach((node) => node.remove());

  const visibleCount = Math.min(lightCount, MAX_VISIBLE_LIGHTS);
  const firstVisibleIndex = Math.max(1, lightCount - visibleCount + 1);

  // Show the newest visible lights. This makes the "oldest light fades out,
  // newest light joins the sky" behavior persist after a reload.
  for (let index = firstVisibleIndex; index <= lightCount; index += 1) {
    floatingLights.appendChild(createAmbientLight(index));
  }

  if (lightCountNumber) {
    lightCountNumber.textContent = lightCount.toLocaleString();
  }
}

function createNewLightAnimation(index) {
  if (!floatingLights) return;

  const light = document.createElement("span");
  light.className = "floating-light floating-light--new";

  const x = 18 + seededRandom(index * 4.2) * 64;
  const size = 8 + seededRandom(index * 1.6) * 9;
  const drift = -35 + seededRandom(index * 3.1) * 70;
  const endY = 10 + seededRandom(index * 0.79) * 18;

  light.style.setProperty("--light-x", `${x}%`);
  light.style.setProperty("--light-size", `${size}px`);
  light.style.setProperty("--light-drift", `${drift}px`);
  light.style.setProperty("--light-end-y", `${endY}svh`);

  floatingLights.appendChild(light);
  light.addEventListener("animationend", () => light.remove());
}

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
    renderAmbientLights();
  } catch (error) {
    console.error(error);
    if (lightCountNumber) {
      lightCountNumber.textContent = "—";
    }
  }
}

function addPersistentAmbientLight(index) {
  if (!floatingLights) return;

  const ambientLights = Array.from(
    floatingLights.querySelectorAll(".floating-light--ambient")
  );

  // Once the cap is reached, remove the oldest visible particle first.
  if (ambientLights.length >= MAX_VISIBLE_LIGHTS) {
    ambientLights
      .sort(
        (a, b) =>
          Number(a.dataset.lightIndex || 0) -
          Number(b.dataset.lightIndex || 0)
      )[0]
      ?.remove();
  }

  floatingLights.appendChild(createAmbientLight(index));
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

    // The counter updates immediately, but the persistent particle
    // appears only after the rising animation reaches the sky.
    createNewLightAnimation(lightCount, () => {
      addPersistentAmbientLight(lightCount);
    });

    if (lightCountNumber) {
      lightCountNumber.textContent = lightCount.toLocaleString();
    }
  } catch (error) {
    console.error(error);
  } finally {
    // Short client-side cooldown to prevent accidental rapid double taps.
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

// Only attach dummy submit behavior if these are still buttons.
// In v3 they may already be links to Tally.
submitButtons.forEach((button) => {
  if (button.tagName === "BUTTON") {
    button.addEventListener("click", openSubmitPreview);
  }
});

if (sendLightButton) {
  sendLightButton.addEventListener("click", sendLight);
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (lanternModal && !lanternModal.hidden) closeLantern();
  if (submitModal && !submitModal.hidden) closeSubmitPreview();
});

renderLanterns();
loadGlobalLightCount();
