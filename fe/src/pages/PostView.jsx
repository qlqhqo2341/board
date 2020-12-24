import { useState } from "react";
import { Link } from "react-router-dom";
import { getPost, deletePost, createPost, updatePost } from "../Api";

function PostView({
  match: {
    params: { id },
  },
  history,
}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [editMode, setEditMode] = useState(id == null);

  if (id) {
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
  }

  const onClickDelete = () => {
    const confirmResult = window.confirm("정말 삭제하시겠습니까?");
    if (confirmResult === true) {
      deletePost(id).then((res) => {
        history.push("/");
      });
    }
  };

  function createOnChange(setData) {
    return (e) => {
      setData(e.currentTarget.value);
    };
  }

  function onSave() {
    const bodyData = { text: textInput, title: titleInput };
    if (!id) {
      // create new post
      createPost(bodyData)
        .then((res) => {
          const id = res.data.id;
          history.push(`/post/${id}`);
          window.location.reload();
        })
        .catch((err) => {
          console.log("failed with", err);
          alert(`오류로 게시글 등록에 실패했습니다.`);
        });
    } else {
      // update previous post
      updatePost(id, bodyData)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log("failed modifing with", err);
          alert(`오류로 게시글 수정에 실패했습니다.`);
        });
    }
  }

  function toggleEditMode(newEditMode) {
    setTitleInput(title);
    setTextInput(text);
    setEditMode(newEditMode);
  }

  return (
    <>
      {editMode ? ( // edit mode
        <div className="PostView">
          <div className="titleWrapper">
            <input
              type="text"
              onChange={createOnChange(setTitleInput)}
              placeholder="제목"
              value={titleInput}
            />
          </div>
          <div className="textWrapper">
            <textarea
              cols="50"
              rows="10"
              onChange={createOnChange(setTextInput)}
              placeholder="텍스트"
              value={textInput}
            />
          </div>
          <button onClick={onSave}>저장하기</button>
          {id && (
            <button onClick={() => toggleEditMode(false)}>수정취소</button>
          )}
        </div>
      ) : (
        // view mode
        <div className="PostView">
          <h3>{title}</h3>
          <p>{text}</p>
          <button onClick={onClickDelete}>삭제</button>
          <button onClick={() => toggleEditMode(true)}>수정하기</button>
        </div>
      )}
      <Link to="/">리스트로 돌아가기</Link>
    </>
  );
}

export default PostView;
