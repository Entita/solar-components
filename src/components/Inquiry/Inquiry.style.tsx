import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: ${Colors.main.yellow};
  border: 2px solid ${Colors.main.black};
  border-radius: 4px;
  padding: 1rem;
  z-index: 1;
`;
