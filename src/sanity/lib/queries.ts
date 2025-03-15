import { defineQuery } from "next-sanity";

export const POST_QUERY = defineQuery(`*[_type == 'post'
   && defined(slug.current)]{
    title,
    summary,
    slug
   }`)

export const BLOG_QUERY = defineQuery(`*[_type == 'blog'
   && defined(slug.current)]{
      title,
      slug,
      summary,
      image{
        asset->{
          url},
        alt
      }
   }`)