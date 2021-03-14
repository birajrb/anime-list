import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  return (
    <div className="Bloglist">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/anime-list/anime-list/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
