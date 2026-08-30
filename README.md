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
