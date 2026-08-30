# The Night of Jaeshin — Version 1 (v2)

This update includes:

- softer fade transitions between background scenes
- adjusted lantern red/blue proportions
- rougher old-paper texture for the hanji cards
- a persistent "Send a Light" counter using `localStorage`
- capped visible ambient particles + total light counter

## Important note about Send a Light

In this static-site version, the light count is saved **per browser/device** using `localStorage`.

That means:
- the total persists when the same person closes and reopens the site
- but it is **not yet shared across all visitors**

For a truly global accumulated total, you will need a backend or external database later.

## Particle behavior

- Each click adds **1** to the total
- Visible floating ambient lights are capped at **24**
- If the total goes above 24, the counter keeps increasing, but the visible ambient lights stay capped


## Tally form

Both `Light a Lantern` buttons now open the live Tally form in a new tab.

Form: https://tally.so/r/b5J5NE
