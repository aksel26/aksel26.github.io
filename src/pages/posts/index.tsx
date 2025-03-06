import CardComponent from "../../components/CardComponent"
import Layout from "../../layout"
// import {CardWrapper} from "./styled"
import React from "react"
import CardWrapper from "./styled"

const Posts = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold my-10 tracking-wider">Posts::life</h1>
      <div className="flex gap-x-4 justify-start">
        <div>전체</div>
        <div>개발</div>
        <div>일상</div>
      </div>
      <CardWrapper>
        <ul className="">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </ul>
      </CardWrapper>
    </Layout>
  )
}

export default Posts
