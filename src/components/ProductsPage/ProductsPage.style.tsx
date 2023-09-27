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
  gap: 1rem;
  flex-wrap: wrap-reverse;
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
  width: 650px;
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
`;

export const DownloadLoadingStyled = styled.div`
  background-color: ${Colors.main.lightGray};
  width: 100%;
  height: 24px;
  border-radius: 6px;
`;

export const ProductsHeaderWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ProductsTitleStyled = styled.h1`
  color: ${Colors.main.black};
  font-size: 48px;
  font-weight: 400;
  margin: 0;
`;

export const ProductsDescStyled = styled.p`
  color: ${Colors.main.black};
  text-align: justify;
  font-size: 16px;
  font-weight: 200;
  margin: 0;
`;

export const ProductsDownloadStyled = styled.button`
  position: relative;
  margin-top: 1rem;
  padding: 2px 0.6rem;
  border: 1px solid ${Colors.main.orange};
  border-radius: 3px;
  background-color: ${Colors.main.white};
  color: ${Colors.main.orangish};
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 14px;
  transition: all .2s ease;
  width: 50%;
  left: 25%;

  &::before {
    position: absolute;
    content: '';
    background-color: ${Colors.main.orange};
    height: 2px;
    left: calc(-50% - 1px);
    width: calc(200% + 2px);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    background-color: ${Colors.main.orangish};
    color: ${Colors.main.white};
  }
`;
