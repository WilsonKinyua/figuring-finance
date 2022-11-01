import { useParams } from "react-router-dom";
import { getBlogBySlug } from "../fake-backend";

export default function BlogDetails() {
  const { blogSlug } = useParams();
  const { id, title, description, image } = getBlogBySlug(blogSlug);
  return (
    <div className="container blog-details">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
