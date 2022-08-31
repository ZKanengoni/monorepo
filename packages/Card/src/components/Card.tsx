import styled from '@emotion/styled';

export default function Card() {
  return <StyledCard />;
}

const StyledCard = styled('div')`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  border: 2px solid #a0a0a0;
  background-color: #e0e0e0;
  text-align: center;
  margin: 0 auto;
`;
