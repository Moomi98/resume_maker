import useProfileInfo from "@/hooks/useProfileInfo";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: fit-content;
`;
const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Name = styled.h3`
  font-family: "NotoSansKR-Medium";
  font-size: 24px;
`;

const ShortIntroduce = styled.p`
  font-size: 14px;
`;

const ProfilePreview = () => {
  const { profileInfo } = useProfileInfo();

  useEffect(() => {
    console.log(profileInfo);
  }, [profileInfo]);

  return (
    <Container>
      {/* <ProfileImage src="public/" alt="profile" /> */}
      <InfoWrapper>
        <Name>{profileInfo.name}</Name>
        <ShortIntroduce>{profileInfo.shortIntroduce}</ShortIntroduce>
      </InfoWrapper>
    </Container>
  );
};

export default ProfilePreview;
