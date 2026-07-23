import rss from '@astrojs/rss';

const blogPosts = import.meta.glob('./content/blog/*.md', { eager: true });
const posts = Object.entries(blogPosts).map(([path, module]) => ({
  title: module.frontmatter.title,
  description: module.frontmatter.description,
  pubDate: new Date(module.frontmatter.pubDate),
  link: `/archive/${path.split('/').pop()?.replace('.md', '')}`,
  categories: module.frontmatter.tags || [],
}));

export async function GET() {
  return rss({
    title: 'AgentBlog',
    description: '一个简单的个人博客',
    site: 'https://blog.28453677.xyz',
    items: posts,
    customData: '<language>zh-CN</language>',
  });
}
