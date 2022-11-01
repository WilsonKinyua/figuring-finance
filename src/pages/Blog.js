import { Link } from "react-router-dom";
import { FakeBlogsBackend } from "../fake-backend";

export default function Blog() {
  const blogs = FakeBlogsBackend();
  return (
    <div className="container blogs">
      <div className="row">
        <div className="col-md-12 pt-5 pb-3">
          <h1>Articles</h1>
        </div>
        {blogs.map((blog) => (
          <div className="col-md-3 text-center" key={blog.id}>
            <Link to={`/article/${blog.slug}`}>
              <div className="card mb-3 border-none">
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
