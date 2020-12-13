import { useState } from "react";
import { Link } from "react-router-dom";
import { getPostList } from "../Api";

function PostList() {
  const [data, setData] = useState();

  getPostList().then((res) => {
    const dataList = res.data.map((dat) => (
      <li>
        <Link to={`/post/${dat.id}`}>{dat.title}</Link>
      </li>
    ));
    setData(dataList);
  });

  if (!data) {
    return <h3> 로딩중입니다.. </h3>;
  }

  return (
    <div className="postListWrapper">
      <h3> 게시글 리스트 </h3>
      <ul children={data} />
      <h5>
        <Link to="/post/create">게시글 작성</Link>
      </h5>
    </div>
  );
}

export default PostList;
