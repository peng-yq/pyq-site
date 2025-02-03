---
title: Markdown Frontmatter
description: This note showcases using the markdown frontmatter feature in Astro Cactus
publishDate: "2025-02-03 20:56"
---

### Post Frontmatter

| Property (* required) | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| title *               | Self explanatory. Used as the text link to the post, the h1 on the posts' page, and the pages title property. Has a max length of 60 chars, set in `src/content/config.ts` |
| description *         | Similar to above, used as the seo description property. Has a min length of 50 and a max length of 160 chars, set in the post schema. |
| publishDate *         | Again pretty simple. To change the date format/locale, currently **en-GB**, update the date option in `src/site.config.ts`. Note you can also pass additional options to the component `<FormattedDate>` if required. |
| updatedDate           | This is an optional date representing when a post has been updated, in the same format as the publishDate. |
| tags                  | Tags are optional with any created post. Any new tag(s) will be shown in `yourdomain.com/posts` & `yourdomain.com/tags`, and generate the page(s) `yourdomain.com/tags/[yourTag]` |
| coverImage            | This is an optional object that will add a cover image to the top of a post. Include both a `src`: "*path-to-image*" and `alt`: "*image alt*". You can view an example in `src/content/post/cover-image.md`. |
| ogImage               | This is an optional property. An OG Image will be generated automatically for every post where this property **isn't** provided. If you would like to create your own for a specific post, include this property and a link to your image, the theme will then skip automatically generating one. |
| draft                 | This is an optional property as it is set to false by default in the schema. By adding true, the post will be filtered out of the production build in a number of places, inc. getAllPosts() calls, og-images, rss feeds, and generated page[s]. You can view an example in `src/content/post/draft-post.md` |

### Note Frontmatter

| Property (* required) | Description                                        |
| --------------------- | -------------------------------------------------- |
| title *               | string, max length 60 chars.                       |
| description           | to be used for the head meta description property. |
| publishDate *         | ISO 8601 format with offsets allowed.              |