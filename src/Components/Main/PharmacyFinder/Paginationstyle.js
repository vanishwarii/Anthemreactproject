import styled from "styled-components";

export const PageButtondiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  border-left: 1px solid #ababab;
  border-right: 1px solid #ababab;
  box-shadow: rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 10%) 0px 8px 24px,
    rgb(17 17 26 / 10%) 0px 16px 56px;
`;
export const PaginationButton = styled.button`
  border: none;
  color: #2a6de2;
  padding: 5px 10px 5px 10px;
  border-radius: 50px;
  &:active {
    background-color: #2a6de2;
    color: #ffffff;
  }
`;
export const Paginationprevbutton = styled.img`
  padding: 2px;
  height: 20px;
  width: 20px;
`;
