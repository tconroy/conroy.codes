export function addTrailingSlash(url: string) {
  return url.replace(/\/?$/, '/');
}

export function removeTrailingSlash(url: string) {
  return url.replace(/\/$/, '');
}
