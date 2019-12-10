import styled from "styled-components";

export const TemaiWrap = styled.div`
  .shihuo1111-temai {
    background-color: #fff;
    padding: 0.15rem;
    .tit-block {
      b {
        color: #333;
        font-size: 14px;
        vertical-align: middle;
      }
      .fr {
        vertical-align: middle;
        float: right;
        a {
          color: #999;
          font-size: 12px;
          padding-left: 0.075rem;
          vertical-align: middle;
          img {
            width: 0.055rem;
            vertical-align: middle;
          }
        }
      }
    }
    .entrance-list {
      margin-top: 0.125rem;
      display: flex;
      justify-content: space-between;
      .entrance-item {
        width: 0.49rem;
        height: 0.69rem;
        .item-img {
          width: 0.48rem;
          height: 0.48rem;
          border-radius: 0.24rem;
          border: 0.01rem solid #eee;
          display: block;
        }
        .item-tit {
          text-align: center;
          font-size: 13px;
          color: #333;
        }
      }
    }
    .brand-list {
      margin-top: 0.075rem;
      display: flex;
      flex-wrap: wrap;
      .brand-item {
        overflow: hidden;
        position: relative;
        width: 1.1rem;
        height: 1.1rem;
        margin-right: 0.075rem;
        margin-top: 0.075rem;
        .brand-bg {
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -0.55rem;
          max-height: 100%;
        }
        .brand-logo {
          position: absolute;
          display: block;
          width: 0.35rem;
          height: 0.35rem;
          border-radius: 0.18rem;
          left: 50%;
          margin-left: -0.18rem;
          top: 0.22rem;
        }
        .brand-tit {
          position: absolute;
          height: 0.15rem;
          line-height: 0.15rem;
          font-size: 14px;
          color: #fff;
          width: 1rem;
          text-align: center;
          display: -webkit-box !important;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
          overflow: hidden;
          top: 0.65rem;
          left: 50%;
          margin-left: -0.5rem;
        }
        .brand-subtit {
          position: absolute;
          width: 0.85rem;
          top: 0.85rem;
          left: 50%;
          margin-left: -0.425rem;
          background-color: #ff4338;
          line-height: 0.15rem;
          color: #fff;
          text-align: center;
          font-size: 11px;
          height: 0.15rem;
          border-radius: 0.075rem;
          display: -webkit-box !important;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      }
      .brand-item:nth-of-type(3n) {
        margin-right: 0;
      }
    }
  }
`;
