// copied from @types/webpack-env
interface RequireContext {
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
  id: string;
}

function importAll(r: RequireContext) {
  return r.keys().map((fileName: string) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: r(fileName),
  }));
}

function dateSortDesc(a: string, b: string) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export default function getAllPostPreviews() {
  return importAll(require.context('./pages/?preview', true, /\.mdx$/)).sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date));
}
