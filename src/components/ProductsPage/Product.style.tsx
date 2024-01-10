import { Colors } from "@/utils/Colors";
import styled, { css } from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap-reverse;
`;

export const CanvasStyled = styled.div`
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;

  --s: 50px; /* the size on the corner */
  --t: 3px;  /* the thickness of the border */
  --g: 10px; /* the gap between the border and image */
  
  padding: calc(var(--g) + var(--t));
  outline: var(--t) solid ${Colors.main.orangish};
  outline-offset: calc(-1*var(--t));
  -webkit-mask:
    conic-gradient(at var(--s) var(--s),#0000 75%,#000 0)
    0 0/calc(100% - var(--s)) calc(100% - var(--s)),
    linear-gradient(#000 0 0) content-box;
  transition: .4s;
`;

export const MenuWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
`;

export const MenuContainerStyled = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

export const MenuStyled = styled.span<{ selected: Boolean }>`
  position: relative;
  text-decoration: ${({ selected }) => selected ? 'none' : 'underline'};
  color: ${({ selected }) => selected ? Colors.main.orange : Colors.main.orangish};
  font-weight: 500;
  cursor: pointer;
  padding: 4px;
  transition: color .2s ease;

  &:hover {
    text-decoration: none;
  }

  ${({ selected }) => selected && css`
    border: 1px solid ${Colors.main.orange};
    border-bottom: none;
    border-radius: 4px 4px 0 0;

    &::before {
      position: absolute;
      content: "";
      bottom: -1px;
      left: 0;
      right: 0;
      height: 1px;
      background-color: white;
      z-index: 1;
    }
  `}
`;

export const ContentWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-left: 1px solid ${Colors.main.orange};
  border-right: 1px solid ${Colors.main.orange};
  border-top: 1px solid ${Colors.main.orange};
  padding: 0 8px;

  & > img {
    cursor: zoom-in;
    width: auto;
    height: auto;
    max-width: 100%;
  }

  & > svg {
    position: absolute;
    display: flex;
    top: 3px;
    right: 1px;
    z-index: 7;
    color: rgba(0, 0, 0, .5);
    pointer-events: none;
  }

  & > span {
    position: absolute!important;
    top: calc(50% + 30px)!important;
    left: calc(50% + 30px)!important;
    transform: translate(-50%, -50%)!important;
  }
`;

export const ProductTitleStyled = styled.h1`
  font-size: 46px;
  margin: 0;
  margin-top: -12px;
  color: ${Colors.main.black};
  font-weight: 500;
  text-transform: uppercase;
`;

export const ProductDescStyled = styled.div`
  margin: 0;
  text-align: justify;
  font-weight: 200;
`;

export const ProductDownloadStyled = styled.button`
  position: relative;
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

  &::after {
    position: absolute;
    content: '';
    height: calc(50% + 2px);
    left: calc(-50% - 2px);
    width: calc(200% + 2px);
    top: -1px;
    pointer-events: none;
    border-left: 1px solid ${Colors.main.orange};
    border-right: 1px solid ${Colors.main.orange};
    background-color: white;
    z-index: -2;
  }

  &:hover {
    background-color: ${Colors.main.orangish};
    color: ${Colors.main.white};
  }
`;

export const ProductLoadingWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > span {
    position: absolute!important;
    top: 28px!important;
    right: -18px!important;
    left: unset!important;
  }
`;
