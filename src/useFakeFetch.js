import fakeData from "./fakeData.json";

const useFakeFetch = (url) => {
  if (url === "http://localhost:8000/anime-list")
    return { data: fakeData, isLoading: false, error: null };

  if (url.startsWith("http://localhost:8000/anime-list/")) {
    const blogId = url.slice(33);
    const blog = fakeData.find((b) => b.id.toString() === blogId);
    if (blog === undefined) {
      return { data: null, isLoading: false, error: "Not found" };
    }
    return { data: blog, isLoading: false, error: null };
  }
  return { data: null, isLoading: false, error: "Unknown url" };
};

export default useFakeFetch;
