/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

type SeoProps = {
  description?: string
  title: string
  children?: React.ReactNode
  thumbnail?: any
}

const Seo: React.FC<SeoProps> = ({ description = "", title, thumbnail }) => {
  console.log("thumbnail: ", thumbnail)
  console.log(description, "ㅁㄴㅇㅁㅇㄹ", title)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
              summary
            }
          }
        }
      }
    `
  )
  console.log("site:❌ ", site)

  // 여기가 문제! description을 사용해야 합니다
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogImage = thumbnail
    ? `${site.siteMetadata.siteUrl}${thumbnail}`
    : site.siteMetadata.defaultImage
  return (
    <Helmet
      htmlAttributes={{ lang: "ko" }}
      title={title}
      defaultTitle={defaultTitle}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: "og:author",
          content: site.siteMetadata.author.name,
        },
        {
          property: "og:author:description",
          content: site.siteMetadata.author.summary,
        },
        {
          property: "og:image",
          content: ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  )
}
export default Seo
