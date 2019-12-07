import styled from "styled-components";

export const HotWrap = styled.div`
  .hot {
    background: #f0f3f5;
    margin: 0.06rem;
    display: flex;
    .block {
      text-align: center;
      padding: 0.08rem 0;
      width: 1.17rem;
      background: #fff;
      margin: 0.02rem;
      h2 {
        font-size: 0.14rem;
        color: #333;
        font-weight: 400;
      }
      p.desc {
        font-size: 0.12rem;
        color: #666;
        margin: 0.05rem 0;
        margin-bottom: 0.1rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p.imgs {
        text-align: center;
        padding-bottom: 0.6rem;
        height: 0;
        img {
          width: 0.6rem;
        }
      }
    }
  }
`;
