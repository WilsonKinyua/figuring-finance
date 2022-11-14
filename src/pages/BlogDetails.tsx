import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import {
  FakeBlogsBackend,
  getBlogBySlug,
  getCategories,
} from "../fake-backend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
// import Blog from "../models/Blog";

export default function BlogDetails() {
  const { blogSlug } = useParams();
  const blogDetails: any = getBlogBySlug(blogSlug as string);
  const blogs = FakeBlogsBackend();
  const categories = getCategories();
  return (
    <div className="container blog-details">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="mt-5 mb-5">{blogDetails.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9 order-1 order-2">
          <div className="card border-none mb-5">
            <img
              src={blogDetails.image}
              className="card-img-top mb-2"
              alt={blogDetails.title}
              loading="lazy"
            />
            <div className="card-body">
              <div>{parse(blogDetails.description)}</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 order-2 order-1">
          <div className="row">
            <div className="col-md-12">
              <div className="search-form">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search.."
                      name="query"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12">
              <h3 className="mt-5 mb-4">Recent Posts</h3>
              {blogs.map((blog) => (
                <div className="recent-posts" key={blog.id}>
                  <p>
                    <Link to={`/article/${blog.slug}`}>
                      <FontAwesomeIcon icon={faAngleRight} /> {blog.title}
                    </Link>
                  </p>
                  <hr />
                </div>
              ))}
            </div>
            <div className="col-md-12">
              <h3 className="mt-5 mb-4">Browse topics</h3>
              {categories.map((category) => (
                <div className="recent-posts" key={category.id}>
                  <p>
                    <Link to={`/article/category/${category.slug}`}>
                      <FontAwesomeIcon icon={faAngleRight} /> {category.name}
                    </Link>
                  </p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
