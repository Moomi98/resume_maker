import Write from "@/components/create/Write";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const WriteWrapper = styled.div`
  width: 60%;
  height: 100%;
`;

export default function Create() {
  return (
    <Container>
      <WriteWrapper>
        <Write />
      </WriteWrapper>
    </Container>
  );
}
