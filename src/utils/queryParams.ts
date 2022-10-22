export function getQueryParam(key: string): string | null {
  const url: URL = new URL(window.location.href);
  const params: URLSearchParams = url.searchParams;

  return params.get(key);
}
