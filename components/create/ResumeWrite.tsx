import useProfileInfo from "@/hooks/useProfileInfo";
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
  const { updateImage, updateName, updateShortIntroduce } = useProfileInfo();

  return (
    <Container>
      <NormalInput type="이름" onChange={updateName} />
    </Container>
  );
};

export default ResumeWrite;
