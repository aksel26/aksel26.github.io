import React from "react"
import { CardWrapper } from "../../../styles/card"
import { graphql, Link } from "gatsby"

export default function TopListCard({ data }: any) {
  console.log("adfasdf", data)

  // if (data) {
  //   const node = data.allMarkdownRemark.nodes[0].fields.slug
  //   console.log("node: ", node)
  // }
  return (
    <div className="flex flex-col md:flex-row gap-y-12  md:gap-x-5 px-8 md:px-0">
      {/* <Link className="md:w-[54%]" to="#">
        <CardWrapper className="group">
          <div className="flex flex-col gap-y-3">
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
        </CardWrapper>
      </Link>
      <Link className="flex-1 md:mt-0" to="#">
        <CardWrapper className="group">
          <div className="flex flex-col gap-y-3">
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
        </CardWrapper>
      </Link> */}

      <ul>
        {data?.allMarkdownRemark?.edges?.map(({ node }: any) => (
          <li key={node.frontmatter.slug}>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`
