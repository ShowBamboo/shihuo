import styled from "styled-components";

export const SearchWrap = styled.div`
  .search_bar {
    width: 100%;
    overflow: hidden;
    position: absolute;
    max-width: 10rem;
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
          .input.focus {
            color: #666;
            background: #eaeaea
              url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png)
              0.05rem center no-repeat;
            background-size: 0.13rem;
            border: 0;
            width: 100%;
            border-radius: 0.04rem;
            height: 0.31rem;
            margin: 0.08rem 0;
            padding-left: 0.22rem;
            font-size: 0.12rem;
            overflow: hidden;
          }
        }
        .search input[type="reset"] {
          background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/reset_5513c70.png)
            no-repeat;
          background-size: 0.15rem;
          position: absolute;
          right: 0.1rem;
          top: 35%;
          height: 0.15rem;
          width: 0.15rem;
          border: 0;
          color: transparent;
          display: none;
          z-index: 1;
          outline: 0;
        }
        .me {
          display: block;
          float: right;
          width: 15%;
          padding: 0 0.08rem;
          padding-top: 0.08rem;
          text-align: center;
          img {
            width: 70%;
          }
        }
        .cancel.show {
          display: block;
          float: left;
          font-size: 0.14rem;
          color: #666;
          width: 15%;
          text-align: center;
          height: 0.31rem;
          line-height: 0.31rem;
          margin: 0.08rem 0;
        }
      }
    }
  }
  .search_page {
    background: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    max-width: 3.75rem;
    padding-top: 0.48rem;
    overflow-y: scroll;
    z-index: 9;
    #searchWrapper {
      width: 100%;
      background: #fff;
      position: absolute;
      z-index: 81;
      left: 0;
      top: 0.48rem;
      dl {
        background: #fff;
        padding: 0.1rem;
        padding-right: 0;
        padding-bottom: 0;
        dt {
          font-size: 0.13rem;
          color: #999;
          margin-bottom: 0.1rem;
        }
        .sear_hot {
          margin-bottom: 0.05rem;
          a {
            font-size: 0.13rem;
            display: inline-block;
            margin-right: 0.03rem;
            margin-bottom: 0.1rem;
            border: 1px solid #aeaeae;
            color: #444;
            padding: 0.05rem;
            border-radius: 3px;
          }
        }
      }
    }
    #searchRelate {
      background: #fff;
      overflow: hidden;
      position: absolute;
      z-index: 82;
      left: 0;
      top: 1.26667rem;
      width: 100%;
      height: 100%;
    }
  }
`;
