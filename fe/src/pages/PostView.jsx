import { useState } from "react";
import { Link } from "react-router-dom";
import { getPost, deletePost } from "../Api";

function PostView({
  match: {
    params: { id },
  },
  history,
}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  getPost(id)
    .then((res) => {
      setTitle(res.data.title);
      setText(res.data.text);
    })
    .catch((err) => {
      alert("포스트 로딩에 실패했습니다.");
      history.push("/");
      return "";
    });

  const onClickDelete = () => {
    const confirmResult = window.confirm("정말 삭제하시겠습니까?");
    if (confirmResult === true) {
      deletePost(id).then((res) => {
        history.push("/");
      });
    }
  };
  return (
    <>
      <div className="PostView">
        <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={onClickDelete}>삭제</button>
        <button
          onClick={() => {
            history.push(`/post/${id}/edit`);
          }}
        >
          수정하기
        </button>
      </div>
      <Link to="/">리스트로 돌아가기</Link>
    </>
  );
}

export default PostView;
