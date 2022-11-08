import styled from "styled-components";

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function HideScrollX({ children }) {
  return <Container>{children}</Container>;
}

export default HideScrollX;
