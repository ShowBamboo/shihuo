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
      top: 0.48rem;
      width: 100%;
      height: 100%;
      li {
        height: 0.44rem;
        line-height: 0.44rem;
        padding-left: 0.1rem;
        a {
          display: block;
          color: #444;
          font-size: 0.15rem;
          border-bottom: 1px solid #e6e6e6;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export const SearchResultWrap = styled.div`
  .top_bar {
    background-color: #f7f7f7;
    height: 0.48rem;
    width: 100%;
    position: fixed;
    top: 0;
    text-align: center;
    z-index: 90;
    border-bottom: 1px solid #e6e6e6;

    .goback {
      position: absolute;
      left: 0;
      width: 0.48rem;
      top: 0;
      height: 0.48rem;
      align-items: center;
      justify-content: center;
      display: flex;
      img {
        display: block;
        height: 82%;
      }
    }
    .searchBox {
      width: 79%;
      padding: 0.08rem 0.1rem;
      position: absolute;
      z-index: 1;
      left: 10%;
      background-color: #f7f7f7;
      transition: all 0.3s ease;
      box-sizing: border-box;
      #searchform {
        .search {
          overflow: hidden;
          font-size: 0.13rem;
          border: 0 none;
          color: #666;
          border-radius: 0.05rem;
          background: #e8e8e8
            url(//sh1.hoopchina.com.cn/images/trademobile/search/zoom.png) 9px
            center no-repeat;
          background-size: 0.17rem;
          background-position: 0.09rem center;
          .input {
            width: 100%;
            border: 0;
            background: 0 0;
            color: #666;
            font-size: 0.15rem;
            height: 0.32rem;
            outline: 0;
            text-align: left;
            padding: 0 10% 0 13%;
            float: left;
            box-sizing: border-box;
          }
          input.reset {
            left: 77%;
            top: 10%;
            height: 80%;
            background: url(//sh1.hoopchina.com.cn/images/trademobile/search/search_close.png?v=2016092101)
              center no-repeat;
            background-size: 60%;
            width: 0.3rem;
            position: absolute;
            right: 0;
            border: 0;
            outline: 0;
          }
        }
      }
      .cancel {
        color: #666;
        font-size: 0.16rem;
        position: absolute;
        padding-left: 0.1rem;
        right: 0.1rem;
        top: 0.12rem;
      }
    }
    .searchBox.focus {
      width: 100%;
      left: 0;
    }
    .ico_list {
      position: absolute;
      right: 0;
      top: 0;
      width: 0.48rem;
      height: 0.48rem;
      align-items: center;
      justify-content: center;
      display: flex;
      img {
        height: 82%;
      }
    }
    .header_nav {
      height: 0.9rem;
      right: 0.1rem;
      position: absolute;
      width: 36%;
      top: 0.43rem;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 4px;
      z-index: 99;
      display: none;
      &:before {
        content: "";
        position: absolute;
        right: 0.08rem;
        top: -0.05rem;
        border-bottom: 0.05rem solid rgba(0, 0, 0, 0.7);
        border-left: 0.06rem solid transparent;
        border-right: 0.06rem solid transparent;
      }
      .inner {
        li:first-child {
          border-bottom: 1px solid #5c5c5c;
        }
        a {
          line-height: 0.45rem;
          font-size: 0.14rem;
          color: #fff;
          text-align: center;
          display: block;
        }
        a:before {
          content: "";
          display: inline-block;
          vertical-align: top;
          background-size: contain;
          background-position: left center;
          background-color: transparent;
          background-repeat: no-repeat;
          margin: 0.1rem 0.05rem 0 0;
          width: 0.21rem;
          height: 0.21rem;
        }
        a.index:before {
          background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/homepage-icon_605ed60.png);
        }
        a.me:before {
          background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/user-center-icon_77dfd45.png);
        }
      }
    }
  }
  .page-content {
    position: relative;
    height: 100%;
    .searchList {
      padding: 0.45rem 0;
      background: #f0f3f5;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .list_all {
        .searchNum {
          background: #f0f3f5;
          height: 0.38rem;
          line-height: 0.38rem;
          font-size: 0.13rem;
          color: #333;
          padding: 0 0.1rem;
          img {
            width: 0.12rem;
            height: 0.12rem;
            display: inline-block;
            vertical-align: middle;
            margin-right: 0.05rem;
          }
        }
        .prolist {
          margin-bottom: 0.1rem;
          background: #fff;
          ul {
            padding-left: 0.26667rem;
            li > a {
              padding: 0.26667rem;
              padding-left: 0;
              border-bottom: 1px solid #e6e6e6;
              display: flex;
              color: #444;
              text-decoration: none;
              .imgs {
                width: 30%;
                float: left;
                position: relative;
              }
              .details_box {
                width: 66%;
                position: relative;
                margin-left: 0.26667rem;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
              }
            }
          }
          .linkMore {
            text-align: center;
            padding: 0.26667rem 0;
            border-bottom: 1px solid #e6e6e6;
          }
        }
        .picblock {
          margin-bottom: 0.1rem;
          background: #fff;
        }
        .quanwSearch {
          margin-bottom: 0.1rem;
          background: #fff;
        }
        .shaiwuBlock {
          margin-bottom: 0.1rem;
          background: #fff;
        }
        .listLoad {
          margin-bottom: 0.1rem;
          background: #fff;
        }
      }
    }
  }
`;
