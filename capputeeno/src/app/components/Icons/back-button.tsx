"use cliente";
import { styled } from "styled-components";
import { BackwardIcon } from "./backward-icon";
import { useRouter } from "next/navigation";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
  color: var(--secondary-text);
  background: transparent;
  border: none;
  cursor: pointer;
`;

interface BackButtonProps {
  navigation: string;
}

export const BackButton = ({ navigation }: BackButtonProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigation);
  };

  return (
    <Button onClick={handleNavigate}>
      <BackwardIcon />
      Voltar
    </Button>
  );
};
