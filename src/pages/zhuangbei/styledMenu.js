import styled from "styled-components";

export const MenuWrap = styled.div`
  .menu-area {
    /* margin-top: 0.45rem; */
    background: #fff;
    ul {
      display: flex;
      li {
        width: 33.33%;
        padding: 0.125rem 0;

        a {
          display: block;
          text-align: center;
          color: #333;
          font-size: 14px;
          border-right: 1px solid #d4d4d4;
          &:before {
            content: "";
            display: block;
            margin: 0 auto 0.075rem;
          }
        }
        &:last-child a {
          border: 0;
        }
        &:nth-child(1) a:before {
          width: 0.43rem;
          height: 0.22rem;
          background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png)
            no-repeat center center transparent;
          background-size: contain;
          margin-left: 40%;
        }
        &:nth-child(2) a:before {
          width: 0.22rem;
          height: 0.22rem;
          background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png)
            no-repeat center center transparent;
          background-size: contain;
        }
        &:nth-child(3) a:before {
          width: 0.21rem;
          height: 0.19rem;
          background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png)
            no-repeat center center transparent;
          background-size: contain;
        }
      }
    }
  }
`;
