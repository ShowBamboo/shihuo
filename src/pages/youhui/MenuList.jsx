import React from "react";
import { MenuListWrap } from "./styledMenu";

export default function MenuList() {
  let handleClick = () => {
    let el1 = document.getElementById("menu-list-alertbox");
    let el2 = document.getElementById("layerBox-bg");

    el1.style.display = "none";
    el2.style.display = "none";
  };

  return (
    <MenuListWrap>
      <div
        className="menu-list-layer"
        id="menu-list-alertbox"
        style={{ display: "none" }}
      >
        <div className="tags-btn">
          切换分类
          <a
            href="javascripts:;"
            className="hide-layer"
            onClick={handleClick}
          ></a>
        </div>
        <ul className="clearfix" id="menu-list-layer">
          <li data-id="999" className="on">
            精选
          </li>
          <li data-id="1">鞋类</li>
          <li data-id="2">服饰</li>
          <li data-id="3">数码</li>
          <li data-id="4">兴趣</li>
        </ul>
        <div className="hotsearch">
          <span></span>热门搜索<span></span>
        </div>
        <ul className="clearfix">
          <li>
            <a href="javascripts:;">AJ</a>
          </li>
          <li>
            <a href="javascripts:;">NIKE</a>
          </li>
          <li>
            <a href="javascripts:;">亚瑟士</a>
          </li>
          <li>
            <a href="javascripts:;">洗面奶</a>
          </li>
          <li>
            <a href="javascripts:;">Dickies</a>
          </li>
          <li>
            <a href="javascripts:;">李维斯</a>
          </li>
          <li>
            <a href="javascripts:;">新百伦</a>
          </li>
          <li>
            <a href="javascripts:;">PUMA</a>
          </li>
        </ul>
      </div>
      <div
        className="layerBox-bg"
        id="layerBox-bg"
        style={{ display: "none" }}
      ></div>
    </MenuListWrap>
  );
}
