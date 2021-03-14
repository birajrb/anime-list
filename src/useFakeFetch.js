import fakeData from "./fakeData.json";

const useFakeFetch = (url) => {
  if (url === "http://localhost:8000/blogs")
    return { data: fakeData, isLoading: false, error: null };

  return { data: null, isLoading: false, error: "Unknown url" };
};

export default useFakeFetch;
