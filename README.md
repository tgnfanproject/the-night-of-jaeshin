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
