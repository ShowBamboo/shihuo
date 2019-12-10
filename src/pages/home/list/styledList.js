import styled from "styled-components";

export const ListWrap = styled.div`
  .list-view {
    background: #fff;
    padding-top: 0.1rem;
    padding-left: 0.1rem;
    width: 100%;
    overflow: hidden;
    height: auto;
    ul > li > a {
      padding: 0.1rem;
      padding-left: 0;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      .imgs {
        width: 30%;
        float: left;
        position: relative;
        .get_imgs {
          width: 100%;
          display: block;
          img {
            width: 100%;
          }
        }
      }
      .details_box {
        width: 66%;
        position: relative;
        margin-left: 0.1rem;
        height: 1.12rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          font-size: 14px;
          color: #333;
          font-weight: 400;
          max-height: 0.42rem;
          overflow: hidden;
          word-break: break-all;
          line-height: 0.21rem;
        }
        .desc {
          font-size: 0.13rem;
          color: #666;
          img {
            width: 0.09rem;
            display: inline-block;
            margin: 0 0.05rem;
          }
        }
        .subtitle {
          bottom: 0.33rem;
          left: 0;
          font-size: 0.15rem;
          color: #ff4338;
          line-height: 0.2rem;
        }
        .desc.face {
          /* bottom: 1.06667rem; */
          span {
            display: inline-block;
            border-radius: 0.1rem;
            width: 0.2rem;
            height: 0.2rem;
            overflow: hidden;
            text-align: center;
            vertical-align: middle;
            margin-right: 10px;
            img {
              width: 100%;
              display: block;
              margin: 0;
            }
          }
        }
        .from {
          font-size: 0.13rem;
          color: #a4a4a4;
          width: 100%;
          bottom: 0.025rem;
          left: 0;
          .guanzhu {
            float: right;
            text-align: left;
            img {
              width: 0.125rem;
              vertical-align: middle;
              margin-top: -3px;
              margin-right: 5px;
            }
          }
          .date {
            float: right;
          }
          .column_name {
            float: left;
            span {
              color: #999;
              font-size: 0.1rem;
              border: 1px solid #a8a8a8;
              border-radius: 0.03rem;
              padding: 0 0.05rem;
              display: inline-block;
              max-width: 1.13rem;
              overflow: hidden;
              vertical-align: middle;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-right: 0.05rem;
            }
          }
          .price {
            float: left;
            color: #999;
            font-size: 0.14rem;
            span {
              color: #ff4338;
            }
          }
        }
      }
    }
  }
`;
