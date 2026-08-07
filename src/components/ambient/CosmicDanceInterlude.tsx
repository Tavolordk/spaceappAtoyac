/**
 * Compatibility shim.
 *
 * CosmicDanceInterlude belonged to the older inline/interlude version of the
 * animation. The current implementation is global and lives in
 * AmbientExperience -> RegionalDancers.
 *
 * Keeping this component as a no-op prevents stale imports/files from breaking
 * strict TypeScript builds on Vercel while also avoiding duplicate dancers.
 */
export default function CosmicDanceInterlude() {
  return null;
}
