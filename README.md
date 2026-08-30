# The Night of Jaeshin — Version 4

This version connects the **Lights Sent** counter to Supabase so the total is shared across all visitors.

## Supabase connection

- Project URL: https://vuawdlsyghfburxhkwwr.supabase.co
- Publishable key is included in `script.js` (safe for browser use, assuming RLS/function permissions are configured as instructed).

The site calls:

- `get_light_count()`
- `increment_light()`

through the Supabase REST RPC endpoint.

## What to verify after uploading to GitHub Pages

1. Open the site in one browser/device.
2. Confirm the `Lights Sent` number loads from Supabase.
3. Tap `Send a Light`.
4. Confirm the number increases by 1.
5. Open the site on a different device or browser.
6. Confirm the same shared total appears.

Visible ambient particles are still capped at 24 for performance.


## Version 5 changes

- Persistent ambient-light cap increased from 24 to **36**.
- A newly sent light now rises first and only becomes a persistent sky light after the rising animation finishes.
- Existing light positions remain deterministic pseudo-random positions in the upper part of the viewport, so reloading does not cause the same total to scatter unpredictably each time.


## Version 6 changes

- Ambient particles drift across a wider area and move slightly faster, making the floating motion easier to notice.
- The visible particle cap remains **36**.
- After 36 visible lights are present, a newly sent light still rises into the sky; when it arrives, the **oldest visible ambient light is removed** and the new one is added.
- On reload, the page displays the most recent 36 light indices rather than the earliest 36, preserving that rolling-window behavior.
