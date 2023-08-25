import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CanvasStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
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
  text-decoration: underline;
  cursor: pointer;
  color: ${({ selected }) => selected ? Colors.main.lightOrange : Colors.main.orangish};
  font-weight: 500;
  transition: .2s ease;

  &:hover {
    color: ${Colors.main.lightOrange};
  }
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 500px;
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
    width: 50%;
    left: -50%;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &::after {
    position: absolute;
    content: '';
    background-color: ${Colors.main.orange};
    height: 1px;
    width: 50%;
    right: -50%;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &:hover {
    background-color: ${Colors.main.orangish};
    color: ${Colors.main.white};
  }
`;
