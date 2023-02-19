import Write from "@/components/create/Write";
import ResumePreview from "@/components/preview/ResumePreview";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #eee;
`;

const WriteWrapper = styled.div`
  width: 60%;
  height: 100%;
`;

const PreviewWrapper = styled.div`
  width: 40%;
  height: 100%;
`;

export default function Create() {
  return (
    <Container>
      <WriteWrapper>
        <Write />
      </WriteWrapper>
      <PreviewWrapper>
        <ResumePreview />
      </PreviewWrapper>
    </Container>
  );
}
