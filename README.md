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
