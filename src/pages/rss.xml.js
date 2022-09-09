import rss from "@astrojs/rss"

const postImportResult = import.meta.glob("./blog/*.md", { eager: true })
const posts = Object.values(postImportResult)

export const get = () => rss({
  title: "Mastro blog",
  description: "Mastro is simple ssg website created with astro js",
  site: import.meta.env.SITE,
  items: posts.map(post => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date
  }))
})