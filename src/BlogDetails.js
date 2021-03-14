import { useParams } from "react-router";
import useFakeFetch from "./useFakeFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFakeFetch(
    "http://localhost:8000/anime-list/anime-list/" + id
  );
  return (
    <div className="blog-details">
      {isLoading && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
