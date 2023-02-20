import styled from "styled-components";
import ProfilePreview from "./ProfilePreview";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const Paper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
`;

const ResumePreview = () => {
  return (
    <Container>
      <Paper>
        <ProfilePreview />
      </Paper>
    </Container>
  );
};

export default ResumePreview;
