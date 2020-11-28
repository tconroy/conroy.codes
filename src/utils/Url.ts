export function addTrailingSlash(url: string) {
  return url.replace(/\/?$/, '/');
}
