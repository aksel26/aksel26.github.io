import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const DevContainer = ({ posts }: any) => {
  console.log("post: ", posts)
  return (
    <section className="mt-0">
      <div className="flex flex-col md:flex-row gap-y-12  md:gap-x-5 px-8 md:px-0">
        <Link className="md:w-[54%]" to="#">
          <div className="flex flex-col gap-y-3 pointer-cursor group">
            <div className="h-[240px] md:h-[300px] overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/384/250"
                alt="thumbnailImg"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110	"
              />
            </div>
            <div className="title font-bold text-xl md:text-2xl line-clamp-1 transition-all duration-300 ease-in-out group-hover:text-blue-700 ">
              모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
              근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
            </div>
            <p className="font-normal text-sm md:text-base line-clamp-2 text-slate-400 ">
              모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
              근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,모든
              국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
              근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의
              고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의
              증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과
              적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과
              적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과
              적정임금의 보장에 노력하여야 하며,
            </p>
            <div className="flex justify-between text-xs md:text-sm text-slate-400 ">
              <p>2025.02.05</p>
              <p>Dev</p>
            </div>
          </div>
        </Link>
        <Link className="flex-1 md:mt-0" to="#">
          <div className="flex flex-col gap-y-3 pointer-cursor group">
            <div className="h-[240px] md:h-[300px] overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/384/250"
                alt="thumbnailImg"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110	"
              />
            </div>
            <div className="title font-bold text-xl md:text-2xl line-clamp-1 transition-all duration-300 ease-in-out group-hover:text-blue-700 ">
              모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
              근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
            </div>
            <p className="font-normal text-sm md:text-base line-clamp-2 text-slate-400 ">
              모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
              근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,모든
              국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
              근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의
              고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의
              증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과
              적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과
              적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과
              적정임금의 보장에 노력하여야 하며,
            </p>
            <div className="flex justify-between text-xs md:text-sm text-slate-400 ">
              <p>2025.02.05</p>
              <p>Dev</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex md:flex-row flex-col gap-y-12 gap-x-5 mt-12 justify-between px-8 md:px-0 w-full">
        {posts.map(
          ({
            node: {
              frontmatter: { date, summary, thumbnail, title },
            },
          }: any) => (
            <div className="group cursor-pointer flex flex-col gap-y-3 md:w-1/4">
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
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default DevContainer
