import React, { useState, useEffect } from "react";
import { MenuListWrap } from "./styledBanner";

export default function MenuList(props) {
  const [state] = useState(props.data);
  useEffect(() => {
    console.log(state);
  });
  return (
    <MenuListWrap>
      <div className="menu_list">
        <div className="tit">
          <span>{state[0].title}</span>
        </div>
        <ul>
          {state.map((value, index) => {
            return (
              <li key={index}>
                <a href="javascripts:;">
                  <img src={value.img} alt="" />
                  <p>{value.name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </MenuListWrap>
  );
}
