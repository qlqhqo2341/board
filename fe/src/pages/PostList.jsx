import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPostList } from "../Api";

function PostList({ history }) {
  const [data, setData] = useState();

  useEffect(() => {
    getPostList()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error with load post data", err);
        alert("현재 api가 정상 작동하지 않습니다.");
        setTimeout(() => {
          history.push("/");
        }, 5000);
      });
  }, [history]);

  if (!data) {
    return <h3> 로딩중입니다. </h3>;
  }

  return (
    <div className="postListWrapper">
      <h3> 게시글 리스트 </h3>
      <ul
        children={data.map((dat) => (
          <li>
            <Link to={`/post/${dat.id}`}>{dat.title}</Link>
          </li>
        ))}
      />
      <h5>
        <Link to="/post/create">게시글 작성</Link>
      </h5>
    </div>
  );
}

export default PostList;
