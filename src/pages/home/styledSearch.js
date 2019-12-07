import styled from "styled-components";

export const SearchWrap = styled.div`
  .search_bar {
    width: 100%;
    overflow: hidden;
    position: absolute;
    max-width: 3.75rem;
    top: 0;
    z-index: 10;
    border: 0;
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.4), transparent);
    .searchBox {
      width: 100%;
      .search_box {
        width: 100%;
        overflow: hidden;
        height: 100%;
        .search {
          width: 85%;
          float: left;
          padding-left: 0.1rem;
          position: relative;
          .input {
            width: 100%;
            border-radius: 0.04rem;
            height: 0.31rem;
            margin: 0.07rem 0;
            border: 0;
            padding-left: 0.22rem;
            color: #666;
            font-size: 0.12rem;
            background: #fff
              url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png)
              0.05rem center no-repeat;
            background-size: 0.13rem;
            overflow: hidden;
          }
        }
        .me {
          display: block;
          float: right;
          width: 15%;
          padding: 0 0.07rem;
          padding-top: 0.07rem;
          text-align: center;
          img {
            width: 70%;
          }
        }
      }
    }
  }
`;
