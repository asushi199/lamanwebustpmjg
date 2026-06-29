export function shouldTrackPointerMotion(media: Pick<MediaQueryList, "matches">) {
  return media.matches;
}
