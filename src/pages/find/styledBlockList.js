import styled from "styled-components";

export const BlockListWrap = styled.div`
  .block_list {
    width: 100%;
    background: #fff;
    margin-bottom: 0.1rem;
    display: flex;

    .list {
      width: 25%;
      background-size: 0.02rem 0.05rem;
      text-align: center;
      padding-top: 0.1rem;
      height: 0.7rem;
      font-size: 12px;
      color: #666;
      &:before {
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center center;
        -webkit-background-size: contain;
        background-size: contain;
        content: "";
        display: block;
        margin: 0 auto 0.05rem;
        width: 0.36rem;
        height: 0.31rem;
      }
      &:nth-child(1):before {
        background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png);
      }
      &:nth-child(2):before {
        background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png);
      }
      &:nth-child(3):before {
        background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png);
      }
      &:nth-child(4):before {
        background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png);
      }
    }
  }
`;
