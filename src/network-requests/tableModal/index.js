// Products
import HttpService from "../../utils/HttpService.js";

export const getPosts = async (param) => {
  // console.log("offset: ", offset);
  const axiosApi = new HttpService();
  const { data } =
    param?.offset === "all"
      ? await axiosApi.get("/market_intelligence/brand")
      : await axiosApi.get("/market_intelligence/brand", {
          params: param,
        });
  return data?.data;
};

export const addposts = async (posts) => {
  const axiosApi = new HttpService();
  const { data } = await axiosApi.post("http://ibrahimbaloch.com/posts", posts);
  return data?.data;
};
export const deletePosts = async (posts) => {
  const axiosApi = new HttpService();
  const { data } = await axiosApi.delete(
    "/market_intelligence/brand?id=" + [0, ...posts]
  );
  return data?.data;
};
export const updatePosts = async (posts) => {
  const axiosApi = new HttpService();
  const { data } = await axiosApi.patch("/market_intelligence/brand", posts);
  return data?.data;
};
