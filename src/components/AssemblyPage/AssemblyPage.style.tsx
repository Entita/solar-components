import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 75vh;

  video {
    width: calc(100% - 4px);
    border-radius: 12px;
    border: 2px solid ${Colors.main.black};
  }
`;

export const AssemblyHeaderWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const AssemblyTitleStyled = styled.h1`
  color: ${Colors.main.black};
  font-size: 48px;
  font-weight: 400;
  margin: 0;
`;
