import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
  background-color: deeppink;
`;

export const Layout = (props) => {
  return <Wrapper {...props} />;
};
