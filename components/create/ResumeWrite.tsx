import styled from "styled-components";
import NormalInput from "../commons/NormalInput";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
`;

const ResumeWrite = () => {
  return (
    <Container>
      <NormalInput type="이름" />
    </Container>
  );
};

export default ResumeWrite;
