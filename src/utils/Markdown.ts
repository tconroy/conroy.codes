import rehypePrism from '@mapbox/rehype-prism';
import html from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import unified from 'unified';

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    // @ts-ignore-next-line
    .use(rehypePrism)
    .use(html)
    .process(markdown);
  return result.toString().replace(/@@baseUrl@@/g, process.env.baseUrl || '');
}
