import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-height: 75vh;
`;

export const ProductLoadingWrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CanvasLoadingStyled = styled.div`
  background-image: url('./loading_img.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 320px;
  height: 320px;
`;

export const ContentLoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContentTitleLoadingStyled = styled.div`
  background-color: ${Colors.main.lightGray};
  height: 36px;
  width: 120px;
  border-radius: 6px;
`;

export const ContentMenuWrapperLoadingStyled = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;

  & > div:nth-child(2) {
    width: 80px;
  }
`;

export const ContentMenuFullLoadingStyled = styled.div`
  background-color: ${Colors.main.lightGray};
  height: 15px;
  width: 100%;
  border-radius: 6px;
`;



export const ContentMenuHalfLoadingStyled = styled.div`
  position: relative;
  width: 100%;
  height: 15px;

  &::before {
    position: absolute;
    content: '';
    height: 15px;
    width: calc(50% - 3px);
    border-radius: 6px;
    background-color: ${Colors.main.lightGray};
    left: 0;
  }

  &::after {
    position: absolute;
    content: '';
    height: 15px;
    width: calc(50% - 3px);
    border-radius: 6px;
    background-color: ${Colors.main.lightGray};
    right: 0;
  }
`;

export const ContentMenuLoadingStyled = styled.div`
  background-color: ${Colors.main.lightGray};
  height: 18px;
  width: 50px;
  border-radius: 6px;
`;

export const ContentWrapperLoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 500px;
`;

export const DownloadLoadingStyled = styled.div`
  background-color: ${Colors.main.lightGray};
  width: 100%;
  height: 24px;
  border-radius: 6px;
`;
