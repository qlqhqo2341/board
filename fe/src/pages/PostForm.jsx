import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPost, updatePost, getPost } from "../Api";

function PostForm({
  history,
  match: {
    params: { id },
  },
}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (id) {
      getPost(id)
        .then((res) => {
          setTitle(res.data.title);
          setText(res.data.text);
        })
        .catch((err) => {
          console.log(err);
          window.alert("데이터 로드에 실패했습니다.");
          history.push("/");
        });
    }
  }, [id, history]);

  function createOnChange(setData) {
    return (e) => {
      setData(e.currentTarget.value);
    };
  }

  function onSave() {
    const bodyData = { text, title };
    if (!id) {
      // create new post
      createPost(bodyData)
        .then((res) => {
          const id = res.data.id;
          history.push(`/post/${id}`);
        })
        .catch((err) => {
          console.log("failed with", err);
          alert(`오류로 게시글 등록에 실패했습니다.`);
        });
    } else {
      // update previous post
      updatePost(id, bodyData).then((res) => {
        const id = res.data.id;
        history.push(`/post/${id}`);
      });
    }
  }

  return (
    <div className="PostView">
      <div className="titleWrapper">
        <input
          type="text"
          onChange={createOnChange(setTitle)}
          placeholder="제목"
          value={title}
        />
      </div>
      <div className="textWrapper">
        <textarea
          cols="50"
          rows="10"
          onChange={createOnChange(setText)}
          placeholder="텍스트"
          value={text}
        />
      </div>
      <button onClick={onSave}>저장하기</button>
      <Link to="/">리스트로 돌아가기</Link>
    </div>
  );
}

export default PostForm;
