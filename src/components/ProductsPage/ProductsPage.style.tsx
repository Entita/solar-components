import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 75vh;
`;

export const ProductWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 320px calc(100% - 320px);
  gap: 2rem;

  &>*:first-child {
    width: max-content!important;
    height: max-content!important;
    border: 2px solid ${Colors.main.black};
    border-radius: 6px;
  }
  canvas {
    width: 320px!important;
    height: 320px!important;
    aspect-ratio: 1/1!important;
  }
`;

export const ProductInfoWrapperStyled = styled.div`
  
`;

export const ProductTitleStyled = styled.h3`
  
`;

export const ProductDescStyled = styled.p`
  
`;

export const ProductDownloadStyled = styled.button`
  
`;
