import styled from "styled-components";

export const ListWrap = styled.div`
  .jingxList {
    padding-left: 0.1rem;
    padding-bottom: 0.2rem;
    ul {
      li {
        border-bottom: 1px solid #e6e6e6;
        padding: 0.1rem 0.1rem 0.1rem 0;
        .author {
          .face {
            width: 0.34rem;
            height: 0.34rem;
            float: left;
            border-radius: 0.25rem;
            overflow: hidden;
            margin-right: 0.1rem;
            img {
              display: block;
              width: 100%;
            }
          }
          .nameM {
            .name {
              color: #444;
              font-size: 18px;
            }
            .time {
              color: #999;
              font-size: 17px;
            }
          }
        }
        .content {
          font-size: 15px;
          color: #222;
          margin-left: 0.44rem;
          .tit {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            color: #444;
          }
          .imgOne {
            margin: 0.1rem 0;
            img {
              width: 100%;
            }
          }
          .tags {
            .like {
              background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png)
                left center no-repeat;
              padding-left: 0.22rem;
              background-size: 0.17rem auto;
              height: 0.17rem;
              display: inline-block;
              color: #a4a4a4;
              margin-right: 0.1rem;
              line-height: 0.17rem;
            }
            .say {
              background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png)
                left center no-repeat;
              padding-left: 0.22rem;
              background-size: 0.17rem auto;
              line-height: 0.17rem;
              height: 0.17rem;
              color: #a4a4a4;
            }
          }
        }
      }
    }
  }
`;
