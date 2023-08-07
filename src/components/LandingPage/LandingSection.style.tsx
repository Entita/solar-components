import { Colors } from "@/utils/Colors";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  
  padding-top: 20vh;
  min-height: 60vh;
  gap: .6rem;
`;

export const LandingTextStyled = styled.h5`
  font-weight: 700;
  font-size: 48px;
  margin: 0;
  padding: 0;
`;

export const OrangeTextStyled = styled.span`
  color: ${Colors.main.orangish};
`;

export const LandingDescStyled = styled.p`
  font-weight: 400;
  font-size: 24px;
  margin: 0;
`;

export const LandingButtonWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LandingButtonStyled = styled.button`
  font-weight: 600;
  font-size: 14px;
  background-color: ${Colors.main.white};
  color: ${Colors.main.orangish};
  border: 2px solid ${Colors.main.orangish};
  padding: .3rem 1.8rem;
  border-radius: 12px;
  font-weight: 500;
  transition: all .2s ease;
  user-select: none;
  white-space: nowrap;

  &:hover {
    background-color: ${Colors.main.orangish};
    color: ${Colors.main.white};
  }
`;

export const LandingPlaceholderStyled = styled.span`
  position: relative;
  font-weight: 600;
  font-size: 14px;
  user-select: none;
  padding-left: 4rem;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    width: 3rem;
    background-color: ${Colors.main.black};
  }
`;

export const LandingBackgroundStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(-10vw - 2px);
  width: calc(100vw + 4px);
  background-image: url('svg/landingBottom.svg');
  aspect-ratio: 216/127;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
`;
