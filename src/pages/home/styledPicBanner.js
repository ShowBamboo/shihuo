import styled from "styled-components";

export const PicBannerWrap = styled.div`
  .pic_banner {
    background: #fff;
    margin-top: 0.1rem;
    border-bottom: 1px solid #e6e6e6;

    .zone {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        border-bottom: 1px solid #f0f3f5;
        border-left: 1px solid #f0f3f5;
        padding: 0.05rem 0.15rem;
        background: #fff;
        .tit {
          width: 0.96rem;
          float: left;
          margin-top: 0.08rem;
          h2 {
            font-size: 0.15rem;
            color: #333;
            font-weight: 600;
          }
          p {
            font-size: 0.12rem;
            color: #666;
            width: 0.96rem;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .pic {
          float: right;
          img {
            width: 0.53rem;
            height: 0.53rem;
          }
        }
      }
    }
  }
`;
