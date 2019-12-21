import styled from "styled-components";

export const TopBarWrap = styled.div`
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
    .d-title {
      height: 0.3rem;
      line-height: 0.3rem;
      position: absolute;
      top: 53%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #333;
      font-size: 0.19rem;
      display: inline-block;
      overflow: hidden;
      font-weight: bolder;
      width: 50%;
      text-overflow: ellipsis;
      white-space: nowrap;
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
`;

export const InfoWrap = styled.div`
  .h2 {
    font-size: 0.15rem;
    color: #333;
    padding: 0.05rem 0.1rem;
    padding-bottom: 0;
    background: #fff;
  }
  .h3 {
    background: #fff;
    padding: 0.1rem;
    padding-top: 0;
    position: relative;
    color: #000;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    flex-wrap: -webkit-wrap;
    align-items: center;
    .t1 {
      width: 80%;
      color: #666;
      font-size: 0.13rem;
      max-height: 0.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      word-spacing: nowrap;
    }
    .t2 {
      width: 20%;
      text-align: right;
      font-size: 0.12rem;
      .more {
        color: #278ccf;
        img {
          margin-left: 0.08rem;
          width: 0.05rem;
          vertical-align: middle;
        }
      }
    }
  }
  .border-area {
    height: 0.1rem;
    background-color: #f0f3f5;
  }
  .koubei-pingce {
    background: #fff;
    display: -webkit-box;
    padding: 0.15rem 0;
    font-size: 15px;
    .kp-list {
      border-right: 1px #f0f0f0 solid;
      -webkit-box-flex: 1;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      display: -webkit-box;
      color: #444;
      img {
        width: 0.15rem;
        vertical-align: middle;
        margin-right: 0.06rem;
      }
      s {
        color: #666;
        margin-left: 0.05rem;
      }
    }
  }
  .activity-area {
    background: #fff;
    display: block;
    font-size: 15px;
    padding: 0.18rem;
    color: #444;
    i {
      display: inline-block;
      background: -webkit-linear-gradient(left, #ff422b 50%, #de1813);
      color: #fff;
      padding: 0 0.04rem;
      font-style: normal;
      border-radius: 0.03rem;
      line-height: 0.19rem;
      margin-right: 0.05rem;
      font-size: 14px;
    }
    s {
      float: right;
      img {
        width: 0.08rem;
        margin-left: 0.05rem;
        vertical-align: middle;
      }
    }
  }
  .tag-chooes-area {
    background: #fff;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    border-bottom: 1px #f0f3f5 solid;
    .tag-list {
      width: 100%;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -ms-box-flex: 1;
      -o-box-flex: 1;
      box-flex: 1;
      -webkit-box-pack: center;
      -moz-box-pack: center;
      -ms-box-pack: center;
      -o-box-pack: center;
      box-pack: center;
      -webkit-box-align: center;
      -moz-box-align: center;
      -ms-box-align: center;
      -o-box-align: center;
      box-align: center;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-box;
      display: -o-box;
      display: box;
      padding: 0.1rem 0;
      &:first-child {
        border-right: 1px #f0f3f5 solid;
        img {
          width: 28px;
          height: 27px;
        }
      }
      img {
        vertical-align: middle;
        width: 26px;
        height: 28px;
      }
      .font {
        display: inline-block;
        vertical-align: middle;
        margin-left: 0.1rem;
        font-size: 13px;
        .s-1 {
          color: #666;
        }
        .s-2 {
          color: #a18c8c;
        }
      }
    }
  }
  .how-zp {
    background-color: #fafafa;
    padding: 0.15rem;
    border-top: 1px #f0f0f0 solid;
    display: block;
    font-size: 15px;
    color: #444;
    img.i1 {
      width: 0.21rem;
      margin-right: 0.03rem;
      vertical-align: middle;
    }
    s {
      float: right;
      color: #666;
      img.i2 {
        width: 0.08rem;
        vertical-align: middle;
        margin-left: 0.05rem;
      }
    }
  }
`;

export const CommentWrap = styled.div`
  .kb-box {
    background: #fff;
    .title {
      padding: 0.1rem;
      font-weight: 700;
      font-size: 19px;
      s {
        float: right;
        img {
          width: 0.05rem;
          height: 0.1rem;
        }
      }
    }
    .tag {
      margin-left: 0.1rem;
      border-bottom: 1px #f0f0f0 solid;
      padding-bottom: 0.13rem;
      height: 0.42rem;
      s {
        background-color: #f5f5f5;
        display: inline-block;
        padding: 0.03rem 0.08rem;
        margin-right: 0.1rem;
        border-radius: 3px;
      }
      s.on {
        background-color: #ff4338;
        color: #fff;
      }
    }
    .list {
      margin-left: 0.1rem;
      border-bottom: 1px #f0f0f0 solid;
      padding: 0.13rem 0;
      .head {
        overflow: hidden;
        .img {
          float: left;
          width: 0.34rem;
          height: 0.34rem;
          img {
            width: 0.34rem;
            height: 0.34rem;
            border-radius: 50%;
          }
        }
        .name-time {
          margin-left: 0.44rem;
          font-size: 16px;
          .time {
            color: #999;
            font-size: 18px;
          }
        }
      }
      .content {
        margin-top: 0.1rem;
        font-size: 14px;
        .txt {
          line-height: 0.32rem;
        }
        .img {
          margin-top: 0.06rem;
          img {
            margin-right: 0.05rem;
            max-width: 1.15rem;
            vertical-align: top;
          }
        }
      }
    }
    .go-link {
      color: #278ccf;
      text-align: center;
      padding: 0.13rem;
      s {
        display: inline-block;
        transform: rotate(90deg);
        margin-left: 0.1rem;
        width: 0.08rem;
      }
    }
  }
`;
