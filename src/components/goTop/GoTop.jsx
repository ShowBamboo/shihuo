import React, { useState } from "react";

import { Wrap } from "./styledGoTop";

export default function GoTop() {
  const [state] = useState("none");

  let handleClick = () => {
    document.getElementById("scroll").style.transform = "translate(0px, 0px)";
  };

  return (
    <Wrap>
      <div
        className="scroll_top"
        id="toTop"
        style={{ display: state }}
        onClick={handleClick}
      >
        <img
          src="//sh1.hoopchina.com.cn/images/trademobile/daigou/top.png"
          alt=""
        />
      </div>
    </Wrap>
  );
}
