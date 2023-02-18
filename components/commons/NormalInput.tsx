import styled from "styled-components";

interface NormalInputProps {
  type: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputType = styled.p`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 2px 8px;
  font-size: 16px;
`;

const NormalInput = (props: NormalInputProps) => {
  return (
    <Container>
      <InputType>{props.type}</InputType>
      <Input />
    </Container>
  );
};

export default NormalInput;
