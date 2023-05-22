import ContentLoader from "react-content-loader"
import '../../css/Media.css'

const CommentLoader = () => (
    <ContentLoader 
    className="commentLoader"
    speed={2}
    width={650}
    height={90}
    viewBox="0 0 650 90"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="15" y="15" rx="4" ry="4" width="650" height="90" />
  </ContentLoader>
)

export default CommentLoader
