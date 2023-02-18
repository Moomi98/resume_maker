import styled from "styled-components";
import ResumeWrite from "./ResumeWrite";
import Sidebar from "./Sidebar";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  gap: 20px;
  padding: 30px;
`;

const WriteWrapper = styled.div`
  width: 80%;
`;

const SidebarWrapper = styled.div`
  width: 20%;
  height: 100%;
  right: 0;
`;

export default function Write() {
  return (
    <Container>
      <WriteWrapper>
        <ResumeWrite />
      </WriteWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
    </Container>
  );
}
