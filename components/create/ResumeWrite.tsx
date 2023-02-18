import styled from "styled-components";
import NormalInput from "../commons/NormalInput";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding: 30px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px 8px;
`;

const ResumeWrite = () => {
  return (
    <Container>
      <NormalInput type="이름" />
    </Container>
  );
};

export default ResumeWrite;
