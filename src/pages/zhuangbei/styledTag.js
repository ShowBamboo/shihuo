import styled from "styled-components";

export const TagWrap = styled.div`
  .tag-area {
    background: #fff;
    margin-bottom: 0.1rem;
    .tag-list {
      display: flex;
      a {
        flex: 1;
        border-bottom: 1px #ececec solid;
        border-right: 1px #ececec solid;
        padding: 0.125rem 0;
        text-align: center;
        font-size: 14px;
        color: #444;
        text-decoration: none;
        img {
          width: 5px;
          vertical-align: middle;
          margin-left: 0.1rem;
        }
      }
    }
  }
`;
