import styled from "styled-components";

export const HotActivityWrap = styled.div`
  .hot-activity {
    background: #fff;
    margin: 0.03rem 0 0.055rem;
    h3 {
      font-size: 14px;
      line-height: 0.15rem;
      padding: 0.1rem 0.15rem;
      margin-bottom: 0.05rem;
    }
    ul {
      padding: 0 0.15rem;
      display: flex;
      flex-wrap: wrap;
      li {
        float: left;
        width: 32.46%;
        margin-right: 1.3%;
        margin-bottom: 0.125rem;
        a {
          display: block;
          color: #444;
          text-decoration: none;
          .img {
            height: 0.67rem;
            overflow: hidden;
            margin-bottom: 0.05rem;
            img {
              width: 100%;
            }
          }
          .p1 {
            font-weight: 700;
            font-size: 12px;
            width: 100%;
            line-height: 0.15rem;
          }
          .p2 {
            color: #666;
            text-align: left;
            line-height: 0.15rem;
            span {
              display: inline-block;
              font-size: 12px;
              transform: scale(0.8333);
            }
          }
        }
      }
      li:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
`;
