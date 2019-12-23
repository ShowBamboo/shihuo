import React, { useState, useEffect } from "react";
import { get } from "utils/http";

import { CommentWrap } from "./styledDetail";
import { connect } from "react-redux";

const mapState = state => ({
  data: state.reducers.data
});

function Comment(props) {
  const [tags, settags] = useState([]);
  const [comments, setcomments] = useState([]);
  const [tagid, settagid] = useState("0");
  const [id, setid] = useState("73686");

  useEffect(() => {
    async function getData() {
      let result = await get({
        url: `/api/sports/getComment?id=${id}&tag_id=${tagid}&page=1&page_size=5&sort=hot`
      });
      settags(result.data.tags);
      setcomments(result.data.comments);
      setid(props.data.id);
    }
    getData();
  }, [tagid, props.data.id, id]);

  let handleClick = tagid => {
    return () => {
      settagid(tagid);
    };
  };

  return (
    <CommentWrap>
      <div className="kb-box">
        <div className="title">
          全网口碑（12553）
          <s>
            <img
              src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/jt_1aeb7dc.png"
              alt=""
            />
          </s>
        </div>
        <div className="tag">
          <s className={tagid === "0" ? "on" : ""} onClick={handleClick("0")}>
            全部
          </s>
          {tags.slice(1).map((value, index) => (
            <s
              key={value.id}
              onClick={handleClick(value.id)}
              className={tagid === value.id ? "on" : ""}
            >
              {value.title}
            </s>
          ))}
        </div>
        {comments.map((value, index) => (
          <div className="list" key={value.product_id}>
            <div className="head">
              <div className="img">
                <img src={value.avatar} alt="" />
              </div>
              <div className="name-time">
                <p>{value.nickname}</p>
                <div className="time">{value.date}</div>
              </div>
            </div>
            <div className="content">
              <div className="txt">{value.content}</div>
              <div className="img">
                {value.img_attr.map((value, index) => (
                  <s key={index}>
                    <img src={value} alt="" />
                  </s>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="go-link">
          查看剩余12548更多评论
          <s>
            <img
              src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/dt_5edb752.png"
              alt=""
            />
          </s>
        </div>
      </div>
    </CommentWrap>
  );
}

export default connect(mapState, null)(Comment);
