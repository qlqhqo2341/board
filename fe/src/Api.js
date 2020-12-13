import Axios from "axios";

export async function getPostList() {
  return await Axios.get("/api/post/list");
}

export async function getPost(id) {
  return await Axios.get(`/api/post/${id}`);
}

export async function createPost(bodyData) {
  return await Axios.post(`/api/post`, bodyData);
}

export async function updatePost(id, bodyData) {
  return await Axios.post(`/api/post/${id}`, bodyData);
}

export async function deletePost(id) {
  return await Axios.delete(`/api/post/${id}`);
}
