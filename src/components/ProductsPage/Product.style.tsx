import { Colors } from "@/utils/Colors";
import styled, { css } from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CanvasStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;

  --s: 50px; /* the size on the corner */
  --t: 3px;  /* the thickness of the border */
  --g: 10px; /* the gap between the border and image */
  
  padding: calc(var(--g) + var(--t));
  outline: var(--t) solid ${Colors.main.orangish}; /* the color here */
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
`;

export const MenuContainerStyled = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

export const MenuStyled = styled.span<{ selected: Boolean }>`
  position: relative;
  text-decoration: ${({ selected }) => selected ? 'none' : 'underline'};
  color: ${({ selected }) => selected ? Colors.main.lightOrange : Colors.main.orangish};
  font-weight: 500;
  cursor: pointer;
  padding: 4px;
  transition: color .2s ease;

  &:hover {
    color: ${Colors.main.lightOrange};
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
    }
  `}
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 500px;
  border-left: 1px solid ${Colors.main.orange};
  border-right: 1px solid ${Colors.main.orange};
  border-top: 1px solid ${Colors.main.orange};
  padding: 0 8px;
`;

export const ProductTitleStyled = styled.h3`
  font-size: 48px;
  margin: 0;
  color: ${Colors.main.black};
  font-weight: 500;
  text-transform: uppercase;
`;

export const ProductDescStyled = styled.p`
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
    height: 1px;
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
