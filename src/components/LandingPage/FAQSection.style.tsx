import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: relative;
  display: flex;
  column-gap: 5vw;
  padding-top: 10vh;
`;

export const FAQBackgroundStyled = styled.div`
  @media (max-width: 650px) {
    left: -2.5vw;
  }

  position: absolute;
  bottom: -2px;
  left: -10vw;
  width: 100vw;
  height: calc(100% + 4px);
  background-color: ${Colors.main.yellowish};
  z-index: -2;
`;

export const FAQWrapperStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: ${Colors.main.gray};
  border-radius: 6px;
`;

export const FAQTitleStyled = styled.h3`
  @media (max-width: 650px) {
    display: none;
  }

  margin: 0;
  font-size: 64px;
  font-weight: 200;
  letter-spacing: 10px;
  writing-mode: vertical-rl;
  text-orientation: upright;
  background-color: ${Colors.main.orangish};
  color: ${Colors.main.white};
  min-height: 45vh;
  user-select: none;
`;

export const FAQSubtitleWrapperStyled = styled.div`
  @media (max-width: 650px) {
    display: none;
  }

  position: relative;
`;

export const FAQSubtitleStyled = styled.h5`
  position: absolute;
  margin: 0;
  padding: 1rem 0;
  top: 3rem;
  right: 0;
  font-size: 12px;
  font-weight: 400;
  writing-mode: vertical-rl;
  text-orientation: upright;
  white-space: nowrap;
  background-color: ${Colors.main.lightOrange};
  color: ${Colors.main.black};
  user-select: none;
`;

export const FAQDrowpdownContainerWrapperStyled = styled.div`
  @media (max-width: 650px) {
    padding: 1rem 1rem;
  }

  padding: 1rem 3rem;
`;

export const FAQDescStyled = styled.span`
  font-size: 21px;
  font-weight: 600;
  color: ${Colors.main.orange};
`;

export const FAQDrowpdownsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-top: 1rem;
`;

export const FAQDrowpdownWrapperStyled = styled.div`
  
`;

export const FAQDrowpdownTopWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Colors.main.black};
  padding: 2px 24px 2px 12px;
  cursor: pointer;

  & > svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const FAQDrowpdownTitleStyled = styled.h6`
  font-size: 18px;
  margin: 0;
`;

export const FAQDrowpdownContentWrapperStyled = styled.div<{ open: Boolean }>`
  padding: 4px 12px;
  transition: all .4s ease;
  clip-path: ${({ open }) => open ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)'};
  max-height: ${({ open }) => open ? '63px' : '0'};
`;

export const FAQDrowpdownContentTextStyled = styled.p`
  margin: 0;
`;
