import Bloglist from "./Bloglist";
import useFakeFetch from "./useFakeFetch";

const Home = () => {
  const { data: blog, isLoading, error } = useFakeFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="home">
      {isLoading && <div>Loading... </div>}

      {error && <div>{error}</div>}
      {blog && <Bloglist blogs={blog} title="Anime" />}
    </div>
  );
};

export default Home;
