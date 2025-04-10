import React from "react"
import Giscus from "@giscus/react"

const Comment = () => {
  return (
    <div className="mt-28">
      <Giscus
        repo="aksel26/aksel26.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkzMjU5NjMzNzk="
        category="General"
        categoryId="DIC_kwDOE23Oc84Co8uw"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="ko"
      />
    </div>
  )
}
export default Comment
