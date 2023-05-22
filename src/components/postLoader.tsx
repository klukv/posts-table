import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={500}
    viewBox="0 0 1000 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="11" y="191" rx="4" ry="4" width="958" height="125" />
  </ContentLoader>
)

export default MyLoader
