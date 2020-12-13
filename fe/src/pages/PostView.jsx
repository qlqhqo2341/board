import { useState } from "react";
import { Link } from "react-router-dom";
import { getPost } from "../Api";

function PostView({
  match: {
    params: { id },
  },
}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  getPost(id).then((res) => {
    setTitle(res.data.title);
    setText(res.data.text);
  });
  return (
    <>
      <div className="PostView">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <Link to="/">리스트로 돌아가기</Link>
    </>
  );
}

export default PostView;
