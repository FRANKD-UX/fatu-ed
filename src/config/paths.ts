// next/link applies basePath automatically. Plain asset URLs need it explicitly.
export function withBasePath(path: `/images/${string}`): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
