import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { createPost } from "../Api";

function PostForm({ history, match: { id } }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function createOnChange(setData) {
    return (e) => {
      setData(e.currentTarget.value);
    };
  }

  function onSave() {
    const bodyData = { text, title };
    if (!id) {
      // create new psot
      createPost(bodyData)
        .then((res) => {
          const id = res.data.id;
          history.push(`/post/${id}`);
        })
        .catch((err) => {
          console.log("failed with", err);
          alert(`오류로 게시글 등록에 실패했습니다.`);
        });
    }
  }

  return (
    <div className="PostView">
      <input type="text" onChange={createOnChange(setTitle)} value={title} />
      <input type="text" onChange={createOnChange(setText)} value={text} />
      <button onClick={onSave}>저장하기</button>
      <Link to="/">리스트로 돌아가기</Link>
    </div>
  );
}

export default PostForm;
