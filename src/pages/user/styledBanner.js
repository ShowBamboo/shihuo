import styled from "styled-components";

export const BannerWrap = styled.div`
  .banner_block {
    width: 100%;
    height: 1.5rem;
    background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png)
      top no-repeat;
    background-size: 100% auto;
    font-family: Helvetica, sans-serif;
    .userface {
      width: 0.5rem;
      height: 0.5rem;
      margin-top: 0.7rem;
      overflow: hidden;
      border-radius: 50%;
      margin-left: 0.25rem;
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login {
      padding-left: 0.25rem;
      width: 75%;
      float: left;
      margin-top: 0.75rem;
      font-size: 14px;
      color: #fff;
      a {
        color: #fff;
        font-size: 15px;
        margin-right: 0.1rem;
      }
      .jb {
        margin-top: 0.05rem;
        font-size: 12px;
      }
    }
  }
`;

export const MenuListWrap = styled.div`
  .menu_list {
    padding: 0.08rem;
    background: #fff;
    margin-bottom: 0.1rem;
    .tit {
      font-size: 14px;
      color: #333;
      background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png)
        center center repeat-x;
      background-size: 0.025rem;
      span {
        background: #fff;
        padding: 0 10px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      li {
        width: 25%;
        text-align: center;
        color: #333;
        font-size: 12px;
        margin: 0.1rem 0;
        position: relative;
        a {
          color: #444;
          text-decoration: none;
          display: block;
          img {
            width: 0.45rem;
          }
        }
      }
    }
  }
`;
