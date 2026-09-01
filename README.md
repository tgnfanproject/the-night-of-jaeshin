# The Night of Jaeshin — Version 7

Design refinement build.

## Changes

### Fixed lanterns
- Visual size reduced to **75%**.
- Tap target stays the same size for mobile usability.

### Hero micro-particles
- The movement now uses a smooth back-and-forth loop instead of snapping to the starting position.

### Send a Light — new layered system

There are now three separate visual layers:

1. **Static tiny lights**
   - Drawn on a single canvas, so even 100 dots are inexpensive.
   - Quantity depends on the shared Supabase total:
     - 1–50 → 5
     - 51–100 → 10
     - 101–200 → 20
     - 201–400 → 30
     - 401–700 → 40
     - 701–1000 → 50
     - 1001–1500 → 60
     - 1501–2500 → 70
     - 2501–4000 → 80
     - 4001–7000 → 90
     - 7001+ → 100

2. **Decorative drifting lights**
   - Always starts with **8** drifting particles when the page opens.
   - They move over a wider distance and slightly faster.

3. **User-triggered drifting lights**
   - `Send a Light` launches one particle upward.
   - Its X position is the same as the future drifting particle.
   - Only after the rise animation finishes is the new drifting particle added.
   - Dynamic drifting particles are capped at **18** total.
   - Once 18 are visible, the oldest drifting particle is removed exactly when the newest one is added.

The shared `Lights Sent` number still comes from Supabase.


## Version 8 changes

### Image-relative lantern coordinates
Scene backgrounds are now real `<img>` elements rather than CSS `background-image` layers.

This means:
- the photograph keeps its full aspect ratio,
- it is not cropped differently on different phones,
- the lantern layer has exactly the same dimensions as the image,
- `x` and `y` slot percentages therefore stay attached to the same part of the photograph.

Trade-off:
- landscape photos no longer fill an entire portrait phone screen vertically.
- This is intentional: coordinate consistency is prioritized over screen-filling crop behavior.

### Softer scene transitions
Each image now fades to the dark navy page background at its top and bottom edge.
The black divider is now clean breathing space between two already-faded image edges, so the photograph should no longer end on a hard straight line.

### Wording
- `See the Lanterns` → `See Everyone’s Lanterns`
- `Send a Light` → `Add a Light`
- Small helper text: `Tap to add your light to the night.`


## Version 9 changes

- Replaced Hero and Scene 1–3 with the user's final 9:16 crops (`800 × 1422`).
- Scene lantern coordinates remain image-relative, so the same percentage positions stay attached to the same photographic details across phone sizes.
- A lightweight CSS night/warm filter is applied to the gallery scene images without modifying the source crops themselves.


## Version 10 changes

- Replaced Hero + Scene 1–3 with the latest processed night-background images.
- Replaced the CSS-drawn fixed lantern with an image asset:
  - `images/lantern.png`
- The fixed lantern is still animated with the same gentle sway and glow behavior, but its appearance now matches the real rectangular red/blue lantern reference more closely.
- Lantern placement still uses image-relative coordinates.


## Version 11 changes

### Per-slot lantern controls
Each `slotMap` entry may now include optional settings:

```js
{ x: 35, y: 35, scale: 1.1 }
```

- `scale: 1` = current V10 lantern size
- `scale: 1.1` = 10% larger
- `scale: 0.9` = 10% smaller

For a non-swinging lantern:

```js
{ x: 35, y: 35, sway: false }
```

To hide the hanging cord:

```js
{ x: 35, y: 35, cord: false }
```

For a floor-standing lantern, use the convenience option:

```js
{ x: 35, y: 72, scale: 1.05, ground: true }
```

`ground: true` automatically disables sway and hides the upper cord.

### Background brightness
The old darkening filter was removed. The already-processed night images now receive only a very small `brightness(1.04)` lift. Scene-wide dark overlays were removed; only the top/bottom transition fades remain.

### Add a Light arrival
The rising particle now ends at the same Y coordinate as the dynamic particle that appears after it, as well as using the same X coordinate.


## Version 12
- Finalized slotMap and brightness(.80).
- Three publication sample lanterns only.
- Added post types and subtle glow colors for message / illustration / photo.
- Card images display without paper texture and can be enlarged in a full-screen lightbox.
- Added creator-rights / reposting / AI-training notice.
- Changed card seal to `축하`.
- Fixed mobile static-particle vertical jumping caused by browser chrome resize events.


## Version 12.1 hotfix
- Fixed a JavaScript syntax error in the first sample message.
- The error prevented all JavaScript from running, which is why:
  - sample lanterns disappeared,
  - Add a Light stopped responding,
  - the Supabase counter stayed visually at 0.
- No Supabase data was reset; the shared counter should load normally again after this fix.


## Version 13 — final design pass

- Hero tagline: `Light the night with love for Jaeshin.`
- Added one decorative glowing lantern to the upper-right area of the Hero.
- Shifted primary CTA buttons slightly toward warm vermilion/orange-red.
- Added subtle Japanese secondary labels beneath the main English button labels.
- Replaced the long content-type explanation with a three-item visual lantern legend:
  Message / Illustration / Photo.
- Added a small Japanese explanatory line under the lantern gallery intro.
- Added a Japanese reassurance line near the final submission CTA.
- Footer now reads: `Fan-made birthday project for Jaeshin from The Ghost’s Nocturne.`
- Grouped `Lights Sent` tightly with the numeric total.
- Updated scene captions to:
  - `The Market We Snuck Out to at Night`
  - `“You’re Stronger Than Anyone Else.”`
  - `The Road Back to Nok’s Quarters`


## Version 14 — publication refinements

- Removed unused legacy image assets from `images/`.
- Added a localStorage fallback for the last successfully loaded Supabase light count.
- Increased content-type color separation:
  - Message = red-orange
  - Illustration = stronger violet
  - Photo = amber-gold
- Restored the message-card close button to the upper-right and kept `축하` at upper-left.
- Strengthened the full-screen image close affordance.
- Added optional public `handle` / `handleUrl` support beneath the display name.
- Handles render smaller and more subtly than the display name.
- Returned Add a Light to the horizontal star + two-line text layout.
- Japanese label is now `灯りを増やす`.
- Forced the gallery Japanese explanation and footer credit into intentional two-line layouts.
- Replaced publication sample content and images.
- Added optional post `link` / `linkLabel` support.
- Empty messages are hidden cleanly.
