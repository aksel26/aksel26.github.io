import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const DevContainer = ({ posts }: any) => {
  const mostCurrent = posts.slice(0, 2)
  const rest = posts.slice(2)
  console.log("🚀 ~ DevContainer ~ posts:", posts)
  return (
    <section className="mt-0">
      <div className="flex flex-col md:flex-row gap-y-12  md:gap-x-5 px-8 md:px-0">
        {mostCurrent.map(
          ({ node: { frontmatter, fields } }: any, index: number) => (
            <Link className="md:w-[54%]" to={fields.slug} key={index}>
              <div className="flex flex-col gap-y-3 pointer-cursor group">
                <div className="h-[240px]  md:h-[300px] overflow-hidden rounded-sm relative">
                  <GatsbyImage
                    image={
                      frontmatter.thumbnail.childImageSharp.gatsbyImageData
                    }
                    alt="thumbnailImg"
                    className="w-full h-full object-cover absolute inset-0 transition-all duration-300 ease-in-out group-hover:scale-110	"
                  />
                </div>
                <div className="title font-bold text-xl md:text-2xl line-clamp-1 transition-all duration-300 ease-in-out group-hover:text-blue-700 ">
                  {frontmatter.title}
                </div>
                <p className="font-normal text-sm md:text-base line-clamp-2 text-slate-400 ">
                  {frontmatter.summary}
                </p>
                <div className="flex justify-between text-xs md:text-sm text-slate-400 ">
                  <p>{frontmatter.date}</p>
                  <p>Dev</p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
      <div className="flex md:flex-row flex-col gap-y-12 gap-x-5 mt-12 px-8 md:px-0 w-full">
        {rest.map(
          (
            {
              node: {
                frontmatter: { date, summary, thumbnail, title },
                fields: { slug },
              },
            }: any,
            index: number
          ) => (
            <Link
              className="group cursor-pointer flex flex-col gap-y-3 md:w-1/4"
              to={slug}
              key={index}
            >
              <div className=" h-[240px] md:h-[224px] overflow-hidden ">
                <GatsbyImage
                  image={thumbnail.childImageSharp.gatsbyImageData}
                  alt="Gatsby Image"
                  className="rounded-sm w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110 "
                />
              </div>

              <p className="font-bold text-xl md:text-xl line-clamp-1 transition-all duration-300 ease-in-out group-hover:text-blue-700">
                {title}
              </p>
              <p className="font-normal text-sm md:text-base line-clamp-2 text-slate-400 ">
                {summary}
              </p>
              <div className="flex justify-between text-xs md:text-sm text-slate-400 ">
                <p>{date}</p>
                <p>Dev</p>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  )
}

export default DevContainer
