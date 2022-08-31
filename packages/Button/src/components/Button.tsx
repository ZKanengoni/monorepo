import styled from '@emotion/styled';

export default function Button() {
  return <StyledButton>Click me!</StyledButton>;
}

const StyledButton = styled('button')`
  width: 100px;
  height: 45px;
  border-radius: 30px;
  border: none;
  text-transform: uppercase;
`;
