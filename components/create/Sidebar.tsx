import styled from "styled-components";
import { BsPencil } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { colors } from "@/styles/colors";
import { SIDEBAR } from "@/constants/sidebar";
const Container = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 5px;
  border: 2px solid ${colors.border};
  padding: 30px 12px;
  margin: 0;
  background-color: white;
`;

const MenuTypeWrapper = styled.li`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: pointer;
`;

const WriteIcon = styled(BsPencil)`
  color: ${colors.disabled};
`;

const MenuType = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.disabled};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 15px 25px;
  border-radius: 5px;
  background-color: blue;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
const DownloadIcon = styled(FaFileDownload)`
  color: white;
`;

const ButtonText = styled.p`
  font-family: "NotoSansKR-Medium";
  font-weight: bold;
  color: white;
  font-size: 20px;
`;

const Sidebar = () => {
  return (
    <Container>
      <MenuContainer>
        {SIDEBAR.menus.map((menu) => (
          <MenuTypeWrapper>
            <WriteIcon size={20} />
            <MenuType>{menu}</MenuType>
          </MenuTypeWrapper>
        ))}
      </MenuContainer>
      <ButtonWrapper>
        <DownloadIcon size={25} />
        <ButtonText>{SIDEBAR.save}</ButtonText>
      </ButtonWrapper>
    </Container>
  );
};

export default Sidebar;
